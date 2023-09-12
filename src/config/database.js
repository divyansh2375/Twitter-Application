const mongoose = require ('mongoose');
const connect = async () => {
    await mongoose.connect('mongodb://0.0.0.0/twitterDev');
}
module.exports = connect ;