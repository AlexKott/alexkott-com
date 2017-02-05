const path = require('path');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const minifyHTML = require('express-minify-html');
const compression = require('compression');
const helpers = require('./src/js/hbs-helpers.js');
const intro = require('./content/intro.js');
const story = require('./content/story.js');
const about = require('./content/about.js');

const hbs = exphbs.create({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, './src/hbs'),
    partialsDir: path.join(__dirname, './src/hbs/partials'),
    defaultLayout: 'index',
    helpers: helpers,
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './src/hbs'));

if (process.env.NODE_ENV === 'production') {
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

app.get('/', (req, res) => {
    res.render('main', { intro, story, about });
});

module.exports = app;
