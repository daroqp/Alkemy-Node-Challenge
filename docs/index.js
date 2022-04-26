const { loginPath } = require("./auth-path.js");
const {
  userLoginSchema,
  userLoginResponseSchema,
} = require("./schemas/auth/loginSchema");
const { unauthorized } = require("./components/unauthorized");
const { errorSchema, badErrorSchema } = require("./schemas/errorSchema");
const { serverError } = require("./components/server-error");
const { badRequest } = require("./components/bad-request");

module.exports = {
  openapi: "3.0.0",
  info: {
    description: "API REST inspired on Disney world!\n",
    version: "1.0.0",
    title: "API Disney",
    contact: "daro.qp@gmail.com",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
  paths: {
    "/auth/login": loginPath,
  },
  schemas: {
    User: userLoginSchema,
    UserResponse: userLoginResponseSchema,
    Error: errorSchema,
    BadError: badErrorSchema,
  },
  components: {
    Unauthorized: unauthorized,
    ServerError: serverError,
    BadRequest: badRequest,
  },
};
