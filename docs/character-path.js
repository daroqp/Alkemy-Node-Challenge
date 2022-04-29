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

const postCharacterPath = {
  post: {
    tags: ["Character"],
    summary: "ENDPOINT to create a character",
    description: "Create character",
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/CharacterPostParam",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Create a character",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/PostCharacter",
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

const idCharacterPath = {
  put: {
    tags: ["Character"],
    summary: "ENDPOINT to edit a character",
    description: "Edit a character",
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        in: "param",
        name: "character_id",
        description: "ID character to edit",
        required: true,
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/CharacterPostParam",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Return character was edit successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/PutCharacter",
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
  delete: {
    tags: ["Character"],
    summary: "ENDPOINT to delete a character",
    description: "Delete a character",
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        in: "param",
        name: "character_id",
        description: "ID character to delete",
        required: true,
      },
    ],
    responses: {
      200: {
        description: "Return a character deleted",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/DeleteCharacter",
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

  get: {
    tags: ["Character"],
    summary: "ENDPOINT to see a detail character",
    description: "Detail of character",
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        in: "param",
        name: "character_id",
        description: "ID character to see detail",
        required: true,
      },
    ],
    responses: {
      200: {
        description: "Return a character detail",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/DetailCharacter",
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
  getCharactersPath,
  postCharacterPath,
  idCharacterPath,
};
