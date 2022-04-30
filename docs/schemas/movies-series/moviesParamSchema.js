const moviePostParamSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    image: { type: "file" },
    rate: { type: "number" },
    genre_id: { type: "string" },
    characters: { type: "array", items: { type: "string" } },
  },
  required: ["title", "rate", "image", "genre_id"],
};

module.exports = { moviePostParamSchema };
