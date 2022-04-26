const unauthorized = {
  description: "Unauthorized",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/Error",
      },
    },
  },
};

module.exports = { unauthorized };
