const { loginPath, registerPath } = require("./auth-path.js");
const {
  userLoginSchema,
  userLoginResponseSchema,
} = require("./schemas/auth/loginSchema");
const {
  userRegisterSchema,
  userRegisterResponseSchema,
} = require("./schemas/auth/registerSchema");
const {
  getCharactersPath,
  postCharacterPath,
  idCharacterPath,
} = require("./character-path");
const {
  charactersGetSchema,
  characterPostSchema,
  characterPutSchema,
  characterDeleteSchema,
} = require("./schemas/character/characterSchema");
const {
  characterPostParam,
} = require("./schemas/character/characterParamSchema");

const { unauthorized } = require("./components/unauthorized");
const { errorSchema, badErrorSchema } = require("./schemas/errorSchema");
const { serverError } = require("./components/server-error");
const { badRequest } = require("./components/bad-request");
const { forbidden } = require("./components/forbidden");
const { notFound } = require("./components/notFound");
const { securitySchemes } = require("./schemas/securitySchema");

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
    "/auth/register": registerPath,

    "/characters": getCharactersPath,
    "/characters/create": postCharacterPath,
    "/characters/:character_id": idCharacterPath,
  },
  schemas: {
    UserLogin: userLoginSchema,
    UserLoginResponse: userLoginResponseSchema,

    UserRegister: userRegisterSchema,
    UserRegisterResponse: userRegisterResponseSchema,

    CharacterPostParam: characterPostParam,
    GetCharacters: charactersGetSchema,
    PostCharacter: characterPostSchema,
    PutCharacter: characterPutSchema,
    DeleteCharacter: characterDeleteSchema,

    Error: errorSchema,
    BadError: badErrorSchema,
  },
  components: {
    Unauthorized: unauthorized,
    ServerError: serverError,
    BadRequest: badRequest,
    Forbidden: forbidden,
    NotFound: notFound,
    securitySchemes,
  },
};
