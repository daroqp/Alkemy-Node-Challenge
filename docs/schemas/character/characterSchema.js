const charactersGetSchema = {
  type: "object",
  properties: {
    characters: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          image: { type: "string" },
        },
      },
    },
  },
};

const characterPostSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: "Character created successfully",
  },
};

const characterPutSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: "Character edited successfully",
  },
};

const characterDeleteSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
  },
  example: {
    message: "Character has been deleted successfully",
  },
};

const characterDetailSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    image: { type: "string" },
    weight: { type: "number" },
    age: { type: "number" },
    history: { type: "string" },
    movies_series_id: {
      type: "array",
      items: { type: "object", properties: { movie: { type: "string" } } },
    },
  },
};

module.exports = {
  charactersGetSchema,
  characterPostSchema,
  characterPutSchema,
  characterDeleteSchema,
  characterDetailSchema,
};
