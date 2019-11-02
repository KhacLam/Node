exports.getIndex = (req, res) => {
    res.status(200).render('home', {
        title: 'Home'
    })
}

exports.getContact = (req, res) => {
    res.status(200).render('contact', {
        title: 'Contact'
    })
}

exports.getCard = (req, res) => {
    res.status(200).render('cart', {
        title: 'Cart'
    })
}

exports.getCheckout = (req, res) => {
    res.status(200).render('checkout', {
        title: 'Checkout'
    })
}

exports.getLogin = (req, res) => {
    res.status(200).render('login', {
        title: 'Login'
    })
}

exports.getRegister = (req, res) => {
    res.status(200).render('register', {
        title: 'Register'
    })
}

exports.getManage = (req, res) => {
    res.status(200).render('admin/pages/dashboard', {
        title: 'Dashboard'
    })
}