module.exports = (options = {}) => {
  return async (context) => {
    const { admin } = context.data;
    if (admin && admin === "admin") {
      const data = {
        username: "admin",
        password: "admin",
        name: "admin",
      };

      context.data = data;
    }
    return context;
  };
};
