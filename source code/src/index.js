const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override'); // put path ....

const route = require('./routes');
const db = require('./config/db');
const SortMiddleware = require('./app/middlewares/SortMiddleware');

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
// custom Middlewares
app.use(SortMiddleware);

// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const icon = icons[sortType];
                const type = types[sortType];
                return '<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>';
                //return '<a href="?_sort&column=${sort.column}&type=${type}"><span class="${icon}" ></span></a>';
            },
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
