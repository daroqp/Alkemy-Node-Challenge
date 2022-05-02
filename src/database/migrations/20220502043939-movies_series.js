"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable("movies_series", {
            id: {
                type: Sequelize.STRING(100),
                primaryKey: true,
                allowNull: false,
            },

            title: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },

            image: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },

            rate: {
                type: Sequelize.TINYINT(4),
                allowNull: false,
            },

            genres_id: {
                type: Sequelize.STRING(100),
                allowNull: false,
                references: {
                    model: "Genres",
                    key: "id",
                },
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
        await queryInterface.dropTable("movies_series");
    },
};
