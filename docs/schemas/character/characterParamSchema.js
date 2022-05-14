const characterPostParam = {
    type: "object",
    properties: {
        name: { type: "string" },
        weight: { type: "number" },
        age: { type: "number" },
        image: { type: "file" },
        history: { type: "string" },
        movies_id: { type: "array", items: { type: "string" } },
    },
    required: ["name", "weight", "age", "image", "history"],
};

module.exports = { characterPostParam };
