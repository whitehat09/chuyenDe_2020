
class SiteController {

    // [Get]  / 
    index(req, res ){
        res.render('home');
    }

    //[get]/search
    search(req, res) {
        console.log(req.body);
        res.render('search');
    }
}

module.exports = new SiteController ;