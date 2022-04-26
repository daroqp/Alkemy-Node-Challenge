const userRegisterSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["name", "email", "password"],
};

const userRegisterResponseSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    token: {
      type: "string",
    },
    msg: {
      type: "string",
    },
  },
};

module.exports = { userRegisterSchema, userRegisterResponseSchema };
