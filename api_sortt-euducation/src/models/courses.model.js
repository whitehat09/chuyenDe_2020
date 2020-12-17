// courses-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "courses";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      title: {type: String, required: true},
	  price: {type: Number, required: true},
    
      teacher: {type: String, required: true},
	  description: String,
	  avatar: String,
      lessons: [{ type: String, ref: "lessons" }],
      users: [{ type: String, ref: "users" }],
	  status: {type: Boolean, required: true},
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
