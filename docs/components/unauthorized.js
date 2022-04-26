const unauthorized = {
  description: "Password or account are incorrect",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/Error",
      },
    },
  },
};

module.exports = { unauthorized };
