const characterPostParam = {
  type: "object",
  properties: {
    name: { type: "string" },
    weight: { type: "string" },
    age: { type: "string" },
    history: { type: "string" },
    movies: { type: "string" },
  },
  required: ["name", "weight", "age", "history"],
};

module.exports = { characterPostParam };
