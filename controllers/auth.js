let jwt = require('jsonwebtoken');

function generateToken(user) {
    let payload = {
        email: user.email,
        password: user.password
    }
    return jwt.sign(payload, process.env.SECRET);
}

function checkToken(token) {
    try {
        let result = jwt.verify(token, process.env.SECRET);
        return result;
    } catch(error) {
        return false;
    }
}

module.exports = { generateToken, checkToken };