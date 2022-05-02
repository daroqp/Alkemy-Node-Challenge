"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("genres", {
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
        await queryInterface.dropTable("genres");
    },
};
