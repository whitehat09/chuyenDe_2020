module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject()); // list
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObiect() : mongoose; // 1 cái trong list
    },
};
