const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255 }, // bắt buộc tối đa nhập 255 kí tự
    description: { type: String, minlength: 1 }, // bắt buộc tối thiểu nhập 1 kí tự
    image: { type: String, maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
