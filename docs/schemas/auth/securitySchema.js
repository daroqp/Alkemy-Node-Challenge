const securitySchema = {
  bearerAuth: {
    type: "http",
    scheme: bearer,
    bearerFormat: "JWT",
  },
};

module.exports = { securitySchema };
