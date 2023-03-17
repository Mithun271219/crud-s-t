const { date } = require('joi');
let bcrypt = require('bcryptjs');
let route = require('express').Router();

let log = require('../shared/log')
let { teachers } = require('../shared/mongo');
let { validate, teacherSignupSchema, teacherChangePassSchema } = require('../shared/schema');

module.exports = {
    async getall(req, res) {
        try {
            let data = await this.teachers.findOne({ id: req.user.id });
            //let data = await this.teachers.aggregate([{ $match: { id: req.user.id } }, { $project: { _id: 0, id: 1, name: 1 } }]);
            res.json(data)
        } catch (error) {
            res.status(500).json({ message: 'error fetching data' })
            log(error);
        }
    },
    async getbyid(req, res) {
        try {
            let id = parseInt(req.params.id)
            let data = await this.teachers.findOne({ id: id });
            res.json(data)
        } catch (error) {
            res.json({ message: 'error fetching data by id' })
            log(error);
        }
    },
    async create(req, res) {
        try {
            //validation
            let isError = await validate(teacherSignupSchema, req.body);
            if (isError) return res.status(400).json({ msg: isError });

            //password encryption

            req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt());
            delete req.body.cpassword;

            //insertion
            let data = await this.teachers.insertOne({ ...req.body, createdOn: new Date().toLocaleString(), active: true });
            res.json(data)
        } catch (error) {
            res.status(500).json({ message: 'error creating data' })
            log(error);
        }
    },
    async update(req, res) {
        try {
            //validation
            delete req.body._id;
            delete req.body.createdOn;
            delete req.body.modifiedOn;
            delete req.body.active;
            let isError = await validate(teacherChangePassSchema, req.body);
            if (isError) return res.status(400).json({ msg: isError });

            //pass encryption
            req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt());
            delete req.body.cpassword;

            //updation
            let id = parseInt(req.params.id);
            let data = await this.teachers.findOneAndUpdate({ id: id }, { $set: { ...req.body, modifiedOn: new Date().toLocaleString() } }, { returnDocument: 'after' });
            res.json(data.value)
        } catch (error) {
            res.status(500).json({ message: 'error updating data' })
            log(error);
        }
    },
    async remove(req, res) {
        try {
            let id = parseInt(req.params.id);
            await this.teachers.deleteOne({ id: id });
            res.json({ msg: "data removed" })
        } catch (error) {
            res.status(500).json({ message: 'error removing data' })
            log(error);
        }
    }
};