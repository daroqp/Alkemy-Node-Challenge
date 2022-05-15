const postMoviesSeriesPath = {
    post: {
        tags: ["Movies Series"],
        summary: "ENDPOINT to create a new movie/series",
        description:
            "To create a new movie/series\n\nGenres IDs:\n\naccion = 8e23eb23-e7bb-431a-8403-f1d0d713c45e\n\ncomedy = 8ca66c90-4dba-40db-8a35-035f943518d6\n\nanimation = 1ae1c23a-b6bb-4b9a-9d63-6edd850a9c2a\n\nterror = cbcffd32-6bdc-4b4c-aff7-64e4d4aba2d9",
        security: [
            {
                bearerAuth: [],
            },
        ],
        requestBody: {
            content: {
                "multipart/form-data": {
                    schema: {
                        $ref: "#/schemas/PostMoviesParam",
                    },
                },
            },
        },
        responses: {
            200: {
                description:
                    "Returns a message indicating the creation of a new resource",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/PostMoviesSchema",
                        },
                    },
                },
            },
            400: {
                $ref: "#/components/BadRequest",
            },
            401: {
                $ref: "#/components/Unauthorized",
            },
            403: {
                $ref: "#/components/Forbidden",
            },
            500: {
                $ref: "#/components/ServerError",
            },
        },
    },
};

const getMoviesSeriesPath = {
    get: {
        tags: ["Movies Series"],
        summary: "ENDPOINT to get all movie/series",
        description: "Get all movie/series or filtered",
        security: [
            {
                bearerAuth: [],
            },
        ],
        parameters: [
            {
                in: "query",
                name: "title",
                description: "Title to be searched",
                required: false,
            },
            {
                in: "query",
                name: "genre_id",
                description: "Genre ID to be filtered",
                required: false,
            },
            {
                in: "query",
                name: "order",
                description: "Order: ASC, DESC",
                required: false,
            },
        ],
        responses: {
            200: {
                description: "Return movie/series filtered",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/GetMoviesSchema",
                        },
                    },
                },
            },
            400: {
                $ref: "#/components/BadRequest",
            },
            401: {
                $ref: "#/components/Unauthorized",
            },
            403: {
                $ref: "#/components/Forbidden",
            },
            404: {
                $ref: "#/components/NotFound",
            },
            500: {
                $ref: "#/components/ServerError",
            },
        },
    },
};

const idMoviesPath = {
    get: {
        tags: ["Movies Series"],
        summary: "ENDPOINT to get a movie/serie",
        description: "Get movie/series detail",
        security: [
            {
                bearerAuth: [],
            },
        ],
        parameters: [
            {
                in: "path",
                name: "movie_id",
                description: "ID movie to see detail",
                required: true,
            },
        ],
        responses: {
            200: {
                description: "Return a movie/serie detail",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/DetailMovie",
                        },
                    },
                },
            },
            400: {
                $ref: "#/components/BadRequest",
            },
            401: {
                $ref: "#/components/Unauthorized",
            },
            403: {
                $ref: "#/components/Forbidden",
            },
            404: {
                $ref: "#/components/NotFound",
            },
            500: {
                $ref: "#/components/ServerError",
            },
        },
    },
};
const idMoviesEditPath = {
    put: {
        tags: ["Movies Series"],
        summary: "ENDPOINT to edit a movie/serie",
        description:
            "Edit a movie/series\n\nGenres IDs:\n\naccion = 8e23eb23-e7bb-431a-8403-f1d0d713c45e\n\ncomedy = 8ca66c90-4dba-40db-8a35-035f943518d6\n\nanimation = 1ae1c23a-b6bb-4b9a-9d63-6edd850a9c2a\n\nterror = cbcffd32-6bdc-4b4c-aff7-64e4d4aba2d9 ",
        security: [
            {
                bearerAuth: [],
            },
        ],
        parameters: [
            {
                in: "path",
                name: "edit_movie_id",
                description: "ID movie to edit a movie/serie",
                required: true,
            },
        ],
        requestBody: {
            content: {
                "multipart/form-data": {
                    schema: {
                        $ref: "#/schemas/PostMoviesParam",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/PutMoviesSchema",
                        },
                    },
                },
            },
            400: {
                $ref: "#/components/BadRequest",
            },
            401: {
                $ref: "#/components/Unauthorized",
            },
            403: {
                $ref: "#/components/Forbidden",
            },
            404: {
                $ref: "#/components/NotFound",
            },
            500: {
                $ref: "#/components/ServerError",
            },
        },
    },
};
const idMoviesDeletePath = {
    delete: {
        tags: ["Movies Series"],
        summary: "ENDPOINT to elimate a movie/serie",
        description: "Elimate a movie/series",
        security: [
            {
                bearerAuth: [],
            },
        ],
        parameters: [
            {
                in: "path",
                name: "delete_movie_id",
                description: "ID movie to delete a movie/serie",
                required: true,
            },
        ],
        responses: {
            200: {
                description: "Return a message OK",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/DeleteMovieSchema",
                        },
                    },
                },
            },
            400: {
                $ref: "#/components/BadRequest",
            },
            401: {
                $ref: "#/components/Unauthorized",
            },
            403: {
                $ref: "#/components/Forbidden",
            },
            404: {
                $ref: "#/components/NotFound",
            },
            500: {
                $ref: "#/components/ServerError",
            },
        },
    },
};

module.exports = {
    postMoviesSeriesPath,
    getMoviesSeriesPath,
    idMoviesPath,
    idMoviesEditPath,
    idMoviesDeletePath,
};
