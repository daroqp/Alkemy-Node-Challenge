const moviePostSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: "Movie/Serie created successfully",
  },
};

const movieGetSchema = {
  type: "object",
  properties: {
    movies: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          image: { type: "string" },
          createdAt: { type: "string" },
        },
      },
    },
  },
};

const movieDetailSchema = {
  type: "object",
  properties: {
    movie: {
      type: "object",
      properties: {
        title: { type: "string" },
        image: { type: "string" },
        rate: { type: "number" },
        Genre: {
          type: "object",
          properties: {
            name: { type: "string" },
          },
        },
        Characters: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
            },
          },
        },
      },
    },
  },
};

const moviePutSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: "Movie/Serie edited successfully",
  },
};

const movieDeleteSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: "Movie/Serie are delete successfully",
  },
};

module.exports = {
  moviePostSchema,
  movieGetSchema,
  movieDetailSchema,
  moviePutSchema,
  movieDeleteSchema,
};
