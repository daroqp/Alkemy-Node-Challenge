const forbidden = {
  description: "Forbidden",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/Error",
      },
    },
  },
};

module.exports = { forbidden };
