const notFound = {
  description: "Bad Request",
  content: {
    "application/json": {
      schema: {
        $ref: "#/schemas/Error",
      },
    },
  },
};

module.exports = { notFound };
