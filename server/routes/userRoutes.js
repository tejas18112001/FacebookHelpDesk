

const router = require("express").Router() ;
const passport = require('passport') ;
const {register , login  } = require('../controller/userController.js') ;
// const CLIENT_URL = "http://localhost:3000/delete" ;

// router.get('/login/failed' , (req , res) => {
//     res.status(401).json({
//         success : false ,
//         message : "failure" ,
//     })
// })

// router.get('/logout' , (req , res) => {
//      req.logout() ;
//      res.redirect('/') ;


// })

// router.get('/facebook', passport.authenticate('facebook' , {
//     scope : ['profile' , 'email']
// }));

// router.get('/facebook/callback',passport.authenticate('facebook', { 
//         successRedirect : CLIENT_URL ,
//         failureRedirect: '/login/failed'  ,
//     }),
//   function(req, res) {
//   res.redirect('/');
// });



router.post("/register" ,register ) ;
router.post("/login" , login) ;
router.get("/hii" , (req , res) => {
    return res.json({msg : "Welcome to the server" }) ;
})

module.exports = router ;