"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "genres",
            [
                {
                    id: "8e23eb23-e7bb-431a-8403-f1d0d713c45e",
                    name: "accion",
                    image: "imageDefault.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "8ca66c90-4dba-40db-8a35-035f943518d6",
                    name: "comedy",
                    image: "imageDefault.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "1ae1c23a-b6bb-4b9a-9d63-6edd850a9c2a",
                    name: "animation",
                    image: "imageDefault.png",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "cbcffd32-6bdc-4b4c-aff7-64e4d4aba2d9",
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
