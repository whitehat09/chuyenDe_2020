module.exports = (context) => {
  if (context.params.user) {
    const role = context.params.user.role;
    if (role) {
      context.params.query.role = { $lt: role };
    }
  }
  return context;
};
