let log = require('../shared/log');
let { students } = require('../shared/mongo');
let { validate, studentSchema } = require('../shared/schema');
let bcrypt = require('bcryptjs');

module.exports = {
    async getall(req, res) {
        try {
            //console.log(mongo.db)
            let data = await this.students.find().toArray();
            res.json(data);
        } catch (error) {
            log(error);
            res.status(500).json({ error: "error while fetching data" })
        }
    },
    async getbyId(req, res) {
        try {
            let id = parseInt(req.params.id);
            let data = await this.students.findOne({ id: id });
            res.json(data)
        } catch (error) {
            log(error);
            res.status(500).json({ error: "error while fetching data" })
        }
    },
    async create(req, res) {
        try {
            //validation
            let isError = await validate(studentSchema, req.body);
            if (isError) return res.status(400).json({ msg: sErroir });

            //insertion
            let data = await this.students.insertOne({ ...req.body, createdOn: new Date().toLocaleString(), active: true });
            res.json(data)
        } catch (error) {
            log(error);
            res.status(500).json({ error: "error while creating data" })
        }
    },
    async update(req, res) {
        try {
            //validation
            delete req.body._id;
            delete req.body.createdOn;
            delete req.body.modifiedOn;
            delete req.body.active;
            let isError = await validate(studentSchema, req.body);
            if (isError) return res.status(400).json({ msg: isError });

            //updation
            let id = parseInt(req.params.id)
            let data = await this.students.findOneAndUpdate({ id: id }, { $set: { ...req.body, modifiedOn: new Date().toLocaleString() } }, { returnDocument: 'after' })
            res.json(data.value)
        } catch (error) {
            log(error);
            res.status(500).json({ error: "error while updating data" })
        }
    },
    async remove(req, res) {
        try {
            let id = parseInt(req.params.id);
            await this.students.findOneAndDelete({ id: id })
            res.json({ msg: "delte success" })
        } catch (error) {
            log(error);
            res.status(500).json({ error: "error while removing data" })
        }
    },
}