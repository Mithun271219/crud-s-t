let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

let log = require('../shared/log');
let { validate, signinSchema } = require('../shared/schema');
let { teachers } = require('../shared/mongo');

module.exports = {
    async signIn(req, res) {
        try {
            // validation
            let isError = await validate(signinSchema, req.body);
            if (isError) return res.status(500).json({ msg: isError });

            //checking user exist or not
            const user = await this.teachers.findOne({ email: req.body.email });
            if (!user) return res.status(401).json({ msg: 'user does not exist' });
            if (!user.active) return res.status(401).json({ msg: 'user is inactive' });

            //to check the passworg

            let isValid = await bcrypt.compare(req.body.password, user.password);
            //isValid ? res.json({ msg: "login success" }) : res.status(401).json({ msg: "email or Password is incorrect" });
            if (isValid) {
                let token = await jwt.sign({ id: user.id }, process.env.jwtkey, { expiresIn: process.env.jwtexp });
                // res.writeHead(200, { 'Authorization': `Bearer ${token}` });
                res.json({ msg: "login success", token });
            } else {
                res.status(401).json({ msg: "email or Password is incorrect" });
            }
        } catch (error) {
            log(error);
            res.status(500).json({ error_msg: 'error while signing In' })
        }
    }
}