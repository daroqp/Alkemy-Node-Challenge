const badRequest = {
  description: "Bad Request",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/BadError",
      },
    },
  },
};

module.exports = { badRequest };
