const joi = require('joi');
const log = require('./log');


module.exports = {
    signinSchema: joi.object({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }),
    studentSchema: joi.object({
        id: joi.number().required(),
        firstName: joi.string().min(4).required(),
        lastName: joi.string().required(),
        DOB: joi.string().required(),
        gender: joi.string().required(),
        email: joi.string().required(),
        phone: joi.number(),
        school: joi.string(),
        class: joi.string(),
        sports: joi.array(),
        fathername: joi.string(),
        mothername: joi.string(),
        address: joi.object()
    }),
    teacherSignupSchema: joi.object({
        id: joi.number().required(),
        name: joi.string().min(4).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        cpassword: joi.ref('password'),
    }),
    teacherChangePassSchema: joi.object({
        id: joi.number().required(),
        name: joi.string().min(4).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        cpassword: joi.ref('password'),
    }),
    async validate(schema, data) {
        try {
            await schema.validateAsync(data);
            return false
        } catch ({ details: [err] }) {
            return err.message;
        }
    }
}