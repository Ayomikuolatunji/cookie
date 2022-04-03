
exports.getLogin= (req, res, next) => {
    // const isLoggedIn=req.get("Cookie")
    // .split(";")[1]
    // .trim()
    // .split("=")[1]
    // console.log(isLoggedIn)
    res.render('auth/login', {
        path: '/orders',
        pageTitle: 'Login Page',
        isAuthenticated:false
    })
};

  
exports.postLogin=(req,res,next)=>{
    res.setHeader("Set-Cookie", "isLoggedIn=true; Secure")
    res.redirect("/")
}