const router = require("express").Router();


router.get("/check", (req, res) => {
    // console.log('!!!!!!!!!!!!!!');
    // console.log(req.session.userId, '@@@@@@@@@@@@@@@@@@@@2');
    if(req.session.userId) {
        res.json({user: req.session.userId, admin: req.session.admin});
    } else {
        res.json({user: undefined, admin: false})
    }
});

module.exports = router;
