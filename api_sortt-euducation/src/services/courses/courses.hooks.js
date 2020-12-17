const { authenticate } = require("@feathersjs/authentication").hooks;
const authorization = require("../../hooks/common/authorization");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [
      (context) => {
        console.log(context);
        return context;
      },
    ],
    create: [authenticate("jwt"), authorization()],
    update: [authenticate("jwt"), authorization()],
    patch: [authenticate("jwt"), authorization()],
    remove: [authenticate("jwt"), authorization()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
