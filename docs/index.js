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
    idCharacterEditPath,
    idCharacterDeletePath,
} = require("./character-path");
const {
    charactersGetSchema,
    characterPostSchema,
    characterPutSchema,
    characterDeleteSchema,
    characterDetailSchema,
} = require("./schemas/character/characterSchema");
const {
    characterPostParam,
} = require("./schemas/character/characterParamSchema");

const {
    postMoviesSeriesPath,
    getMoviesSeriesPath,
    idMoviesPath,
    idMoviesEditPath,
    idMoviesDeletePath,
} = require("./movies-path");
const {
    moviePostParamSchema,
} = require("./schemas/movies-series/moviesParamSchema");
const {
    moviePostSchema,
    movieGetSchema,
    movieDetailSchema,
    moviePutSchema,
    movieDeleteSchema,
} = require("./schemas/movies-series/moviesSchema");

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
            url: `http://localhost:${process.env.PORT}`,
        },
    ],
    paths: {
        "/auth/login": loginPath,
        "/auth/register": registerPath,

        "/characters/create": postCharacterPath,
        "/characters": getCharactersPath,
        "/characters/{character_id}": idCharacterPath,
        "/characters/{edit_character_id}": idCharacterEditPath,
        "/characters/{delete_character_id}": idCharacterDeletePath,

        "/movies/create": postMoviesSeriesPath,
        "/movies": getMoviesSeriesPath,
        "/movies/{movie_id}": idMoviesPath,
        "/movies/{edit_movie_id}": idMoviesEditPath,
        "/movies/{delete_movie_id}": idMoviesDeletePath,
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
        DetailCharacter: characterDetailSchema,

        PostMoviesParam: moviePostParamSchema,
        PostMoviesSchema: moviePostSchema,
        GetMoviesSchema: movieGetSchema,
        DetailMovie: movieDetailSchema,
        PutMoviesSchema: moviePutSchema,
        DeleteMovieSchema: movieDeleteSchema,

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
