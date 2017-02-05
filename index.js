const express = require('express');
const app = express();

const router = require('./router.js');

app.use('/', router);
app.use(express.static('./dist', { index: false }))

app.listen(8080, () => console.log('Listening on 8080...'));
