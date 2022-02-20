const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Pivot_character_movie = require('./Character_movie_pivot');

class Character extends Model {}
Character.init({

    id: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    image: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    weight: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    age: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },

    history: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    sequelize,
    tableName: "characters",
    timestamps: false,
});

Character.hasMany( Pivot_character_movie, { as: 'Movies_series', foreignKey: characters_id } );

module.exports = Character;