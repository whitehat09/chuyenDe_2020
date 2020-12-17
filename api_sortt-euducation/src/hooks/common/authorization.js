// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const { NotAuthenticated } = require("@feathersjs/errors");
module.exports = (options = { role: 2 }) => {
  return async (context) => {
    if (!context.params.user) {
      return context;
    }
    const { role } = context.params.user;
    if (role < options.role) {
      const notAuthenticated = new NotAuthenticated("invalid role", {});
      throw notAuthenticated;
    }
    return context;
  };
};
