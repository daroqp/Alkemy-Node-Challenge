const securitySchemes = {
  bearerAuth: {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
  },
};

module.exports = { securitySchemes };
