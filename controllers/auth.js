
exports.getLogin= (req, res, next) => {
    req.isLoggedIn=true
    res.render('auth/login', {
        path: '/orders',
        pageTitle: 'Login Page',
        isAuthenticated:req.isLoggedIn
    })
};

  
exports.postLogin=(req,res,next)=>{
    res.setHeader("Set-Cookie", "isLoggedIn=true")
    res.redirect("/")
}