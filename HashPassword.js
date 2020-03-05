const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hash(password) {
    try {

        let salt = await bcrypt.genSalt(saltRounds)
        let hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword

    } catch (error) {
        throw new HttpError(500, "InternalServerError");
    }
}
async function decodePassword(originalPassword, hashedPassword) {

    try {

        let comparisionResult = await bcrypt.compare(originalPassword, hashedPassword);
        return comparisionResult;

    } catch (error) {
        return false;
    }
}


module.exports = { hash, decodePassword };