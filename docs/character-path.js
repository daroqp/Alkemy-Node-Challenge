const getCharactersPath = {
  get: {
    tags: ["Character"],
    summary: "ENDPOINT to get all characters",
    description: "Search and filter with @query parameter",
    parameters: [
      {
        in: "query",
        name: "name",
        description: "Name of title to search.",
        required: false,
      },
      {
        in: "query",
        name: "age",
        description: "Age to filter",
        required: false,
      },
      {
        in: "query",
        name: "weight",
        description: "Weight to filter",
        required: false,
      },
      {
        in: "query",
        name: "movies",
        description: "Movie id to filter",
        required: false,
      },
    ],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {},
          },
        },
      },
      403: {},
      500: {},
    },
  },
};

module.exports = { getCharactersPath };
