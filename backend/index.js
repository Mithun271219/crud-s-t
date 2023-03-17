const express = require('express');
const { config } = require('dotenv');
const cors = require('cors');

const app = express();
config();
const log = require('./shared/log');
const { maintenance, logging, validateToken } = require('./shared/middleware');
const { connect } = require('./shared/mongo');
const students = require('./routes/students.routes');
const teachers = require('./routes/teachers.routes');
const auth = require('./routes/auth.route');
const addteacher = require('./routes/AddTeacher.routes')
const pageNotFount = require('./routes/pnf.route');

(async () => {
    try {
        //db connection
        await connect();

        //middlewares
        app.use(express.json());
        app.use(cors());
        app.use(maintenance);
        app.use(logging);

        // Access to XMLHttpRequest at 'http://localhost:3001/students' from origin 'http://localhost:3000'
        //  has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the
        //   requested resource.

        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "https://64144fd16423e50370aee77a--illustrious-kelpie-3df561.netlify.app");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        //routes
        app.use('/students', students);
        app.use('/add/teacher', addteacher);

        app.use('/auth', auth);

        //tokenvalidation
        app.use(validateToken);

        app.use('/teachers', teachers);

        app.use('/*', pageNotFount);
        app.listen(process.env.port, () => log(`listening to port ${process.env.port}`))

    } catch (error) {
        log(`error creating server`)
        log(error)
        process.exit();
    }
})()