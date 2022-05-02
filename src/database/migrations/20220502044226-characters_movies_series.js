"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("characters_movies_series", {
            id: {
                type: Sequelize.STRING(100),
                primaryKey: true,
                allowNull: false,
            },

            characters_id: {
                type: Sequelize.STRING(100),
                allowNull: false,
                references: {
                    model: "characters",
                    key: "id",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },

            movies_series_id: {
                type: Sequelize.STRING(100),
                allowNull: false,
                references: {
                    model: "movies_series",
                    key: "id",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable("characters_movies_series");
    },
};
