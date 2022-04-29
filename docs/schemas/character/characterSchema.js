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

module.exports = {
  charactersGetSchema,
  characterPostSchema,
  characterPutSchema,
  characterDeleteSchema,
};
