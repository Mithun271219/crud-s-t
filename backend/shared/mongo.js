let { MongoClient } = require('mongodb');

let log = require('./log');

module.exports = {
    db: null,

    students: null,
    teachers: null,

    async connect() {
        try {
            //connecting to mongo
            let client = new MongoClient(process.env.mongo_url);
            await client.connect();
            log(`mongo connected success`);

            //database selection
            this.db = await client.db(process.env.mongo_name);
            log(`selected database ${process.env.mongo_name}`);

            //paths
            students = await this.db.collection('students');
            teachers = await this.db.collection('teachers');
            log("Mongo collections initialized");
        } catch (err) {
            throw new Error(err);
        }
    }
}