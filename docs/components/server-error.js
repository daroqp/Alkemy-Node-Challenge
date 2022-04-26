const serverError = {
  description: "Something on the server didn't work",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/Error",
      },
    },
  },
};

module.exports = { serverError };
