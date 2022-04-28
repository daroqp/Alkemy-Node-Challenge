const getCharactersSchema = {
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

module.exports = { getCharactersSchema };
