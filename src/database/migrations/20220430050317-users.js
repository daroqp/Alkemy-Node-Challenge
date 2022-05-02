"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.STRING(100),
                primaryKey: true,
                allowNull: false,
            },

            name: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },

            email: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },

            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },

            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            role: {
                type: Sequelize.STRING(45),
                allowNull: false,
                defaultValue: "user",
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
    },
};
