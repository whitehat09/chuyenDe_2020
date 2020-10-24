const Course = require('../../models/Course');

class SiteController {
    // [Get]  /
    index(req, res) {
        Course.find({}, function (err, course) {
            if (!err) {
                res.json(course);
            } else {
                res.status(400).json({ error: 'error ' });
            }
        });
        res.render('home');
    }

    //[get]/search
    search(req, res) {
        console.log(req.body);
        res.render('search');
    }
}

module.exports = new SiteController();
