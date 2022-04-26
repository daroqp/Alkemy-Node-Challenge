const errorSchema = {
  type: "object",
  properties: {
    error: {
      type: "string",
    },
  },
};

const badErrorSchema = {
  type: "object",
  properties: {
    errors: {
      type: "array",
      items: {
        type: "object",
        properties: {
          value: {
            type: "string",
          },
          msg: {
            type: "string",
          },
          param: {
            type: "string",
          },
          location: {
            type: "string",
          },
        },
      },
    },
  },
};

module.exports = { errorSchema, badErrorSchema };
