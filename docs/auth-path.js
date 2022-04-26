const loginPath = {
  post: {
    tags: ["Auth"],
    summary: "API to auth account",
    description: "Access: { email: test@example.com, password: 123456 }",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/User",
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
              $ref: "#/schemas/UserResponse",
            },
          },
        },
      },
      401: {
        $ref: "#/components/Unauthorized",
      },
      403: {
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
};
