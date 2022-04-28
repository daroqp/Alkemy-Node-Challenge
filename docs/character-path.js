const getCharactersPath = {
  get: {
    tags: ["Character"],
    summary: "ENDPOINT to get all characters",
    description: "Search and filter with @query parameter",
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        in: "query",
        name: "name",
        description: "Title name to search",
        required: false,
      },
      {
        in: "query",
        name: "age",
        description: "Age to be filtered",
        required: false,
      },
      {
        in: "query",
        name: "weight",
        description: "Weight to be filtered",
        required: false,
      },
      {
        in: "query",
        name: "movies",
        description: "Movie id to be filtered",
        required: false,
      },
    ],
    responses: {
      200: {
        description: "Get all characters or filtered",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/GetCharacters",
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

module.exports = { getCharactersPath };
