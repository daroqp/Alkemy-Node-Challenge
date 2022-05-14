const loginPath = {
    post: {
        tags: ["Auth"],
        summary: "ENDPOINT to auth account",
        description: "Access: { email: admin@test.com, password: admin123 }",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/UserLogin",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Success",
                headers: {
                    authorization: {
                        type: "Bearer",
                        description: "Token returned",
                    },
                },
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/UserLoginResponse",
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
            500: {
                $ref: "#/components/ServerError",
            },
        },
    },
};

const registerPath = {
    post: {
        tags: ["Auth"],
        summary: "ENDPOINT to register account",
        description:
            "Register {name: example, email: test@example.com, password: 123456}",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/schemas/UserRegister",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Resource was successfully registered",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/UserRegisterResponse",
                        },
                    },
                },
            },
            400: {
                $ref: "#/components/BadRequest",
            },
            500: {
                $ref: "#/components/ServerError",
            },
        },
    },
};

module.exports = {
    loginPath,
    registerPath,
};
