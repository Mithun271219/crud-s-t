
const log = require('../shared/log');


module.exports = {
    async pageNotFount(req, res) {
        try {
            await res.status(404).json({ msg: "page not fount" })
        } catch (error) {
            log(error);
            res.status(400).json({ msg: 'error processing url' })
        }
    }
}