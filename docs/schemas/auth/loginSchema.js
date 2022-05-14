const userLoginSchema = {
    type: "object",
    properties: {
        email: {
            type: "string",
        },
        password: {
            type: "string",
        },
    },
    example: {
        email: "admin@test.com",
        password: "admin123",
    },
    required: ["email", "password"],
};

const userLoginResponseSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
        role: {
            type: "string",
        },
        messagge: {
            type: "string",
        },
    },
};

module.exports = { userLoginSchema, userLoginResponseSchema };
