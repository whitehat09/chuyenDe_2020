const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/online_learning', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(' connect successfully ');
    } catch (error) {
        console.log('connect failed');
    }
}
module.exports = { connect };
