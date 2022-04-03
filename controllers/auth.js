
exports.getLogin= (req, res, next) => {
    req.isLoggedIn=true
    res.render('auth/login', {
        path: '/orders',
        pageTitle: 'Login Page',
    })
};

  
exports.postLogin=()=>{
    res.redirect("/")
}