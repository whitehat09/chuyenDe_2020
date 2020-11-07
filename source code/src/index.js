const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override'); // put path ....

const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

// file tĩnh
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
); //xử lí dữu liệu từ from lên
app.use(express.json()); // xử lí dữu liệu js lên

app.use(morgan('combined')); // hiện thi giao tiếp giao diện và máy chủ trên cmd

app.use(methodOverride('_method'));

// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
); // định nghĩa
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
