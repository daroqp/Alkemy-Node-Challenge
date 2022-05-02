"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("characters", {
            id: {
                type: Sequelize.STRING(100),
                primaryKey: true,
                allowNull: false,
            },

            name: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },

            image: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },

            weight: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },

            age: {
                type: Sequelize.INTEGER(10),
                allowNull: false,
            },

            history: {
                type: Sequelize.STRING(900),
                allowNull: false,
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
        await queryInterface.dropTable("characters");
    },
};
