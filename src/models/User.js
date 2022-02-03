const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class User extends Model {}
User.init({

    id: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false
    },
    
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    
    password: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    
    google: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: "users",
    timestamps: false,
});

module.exports = User;