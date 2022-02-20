const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Character = require('./Character');
const Movie_serie = require('./Movie_serie');

class Pivot_character_movie extends Model {}

Pivot_character_movie.init({

    id: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
    },

    characters_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    movies_series_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
},{
    sequelize,
    tableName: "characters_movies_series",
    timestamps: false,
});

Pivot_character_movie.belongsTo( Character, { as: 'Character' } );
Pivot_character_movie.belongsTo( Movie_serie, { as: 'Movie_serie' } );

module.exports = Pivot_character_movie;