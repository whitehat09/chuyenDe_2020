const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [Get]  /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                // sửa lỗi bảo mật hbs
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            }) // promise as if else
            .catch(next);
    }

    //[get]/search
    search(req, res) {
        console.log(req.body);
        res.render('search');
    }
}

module.exports = new SiteController();
