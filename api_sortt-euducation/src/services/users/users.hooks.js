const { authenticate } = require("@feathersjs/authentication").hooks;
const filterUser = require("../../hooks/users/filterUser");
const {
  hashPassword,
  protect,
} = require("@feathersjs/authentication-local").hooks;

const authorization = require("../../hooks/common/authorization");
const generatoAdminAcc = require("../../hooks/users/generatoAdminAcc");

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt"), filterUser],
    get: [authenticate("jwt")],
    create: [generatoAdminAcc(), hashPassword("password")],
    update: [hashPassword("password"), authenticate("jwt")],
    patch: [hashPassword("password"), authenticate("jwt")],
    remove: [authenticate("jwt"), authorization({ role: 3 })],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
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
