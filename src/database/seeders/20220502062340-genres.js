"use strict";
const uuid = require("uuid");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "genres",
            [
                {
                    id: uuid.v4(),
                    name: "accion",
                    image: "imageDefault.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid.v4(),
                    name: "comedy",
                    image: "imageDefault.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid.v4(),
                    name: "animation",
                    image: "imageDefault.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuid.v4(),
                    name: "terror",
                    image: "imageDefault.png",
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
        await queryInterface.bulkDelete("genres", null, {});
    },
};
