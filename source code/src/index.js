const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined')); // hiện thi giao tiếp giao diện và máy chủ trên cmd

// template engine
app.engine('hbs',handlebars({
  extname: '.hbs'
}));// định nghĩa
app.set('view engine','hbs');
app.set('views',path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})