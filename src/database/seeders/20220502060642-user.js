"use strict";

const uuid = require("uuid");
const bcrypt = require("bcryptjs");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    id: uuid.v4(),
                    name: "John Doe",
                    email: "admin@test.com",
                    password: bcrypt.hashSync("admin123", 10),
                    status: 1,
                    role: "admin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("users", null, {});
    },
};
