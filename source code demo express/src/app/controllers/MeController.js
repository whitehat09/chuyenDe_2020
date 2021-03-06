const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

const mongoose = require('../../util/mongoose');

class MeController {
    // [get]  /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            // xử lý bất đồng bộ giưa tìm và đếm số lượng bị xoá
            .then(([courses, deleteCount]) =>
                res.render('me/stored-courses', {
                    deleteCount,
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [get]  /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({}) // tìm đã xoá
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
