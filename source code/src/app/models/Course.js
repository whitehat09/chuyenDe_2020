const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Course = new Schema(
    {
        name: { type: String, require: true }, // bắt buộc tối đa nhập 255 kí tự
        description: { type: String }, // bắt buộc tối thiểu nhập 1 kí tự
        image: { type: String },
        videoId: { type: String, require: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true }, // tồn tại duy nhất 1
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
