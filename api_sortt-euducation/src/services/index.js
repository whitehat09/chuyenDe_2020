const users = require('./users/users.service.js');
const courses = require('./courses/courses.service.js');
const lessons = require('./lessons/lessons.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(courses);
  app.configure(lessons);
};
