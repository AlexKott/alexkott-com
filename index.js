const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const minifyHTML = require('express-minify-html');
const compression = require('compression');
const helpers = require('./src/js/hbs-helpers.js');
const story = require('./content/story.js');
const about = require('./content/about.js');

const config = {
    PORT: 8080,
    env: process.env.NODE_ENV
};

const hbs = exphbs.create({
    extname: '.hbs',
    layoutsDir: './src/hbs',
    partialsDir: './src/hbs/partials',
    defaultLayout: 'index',
    helpers: helpers,
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './src/hbs');

app.get('*', (req, res, next) => {
    if (config.env === 'production' && req.get('X-Forwarded-Proto') === 'http') {
        return res.redirect(`https://${req.hostname}${req.originalUrl}`);
    }
    return next();
});

if (config.env === 'production') {
    app.use(compression());

    app.use(minifyHTML({
        htmlMinifier: {
            removeComments:            true,
            collapseWhitespace:        true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes:     true,
            removeEmptyAttributes:     true
        }
    }));
}

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.render('main', { story, about });
});

app.listen(config.PORT, () => {
    console.log(`Serving on port ${config.PORT}`); // eslint-disable-line
});
