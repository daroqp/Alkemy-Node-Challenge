const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Pivot_character_movie = require('./Character_movie_pivot');
const Genre = require('./Genre');

class Movie_serie extends Model {}
Movie_serie.init({

    id: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
    },

    title: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    image: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

    rate: {
        type: DataTypes.TINYINT(4),
        allowNull: false,
    },

    createAt: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: 'movies_series',
    timestamps: false
});


Movie_serie.hasMany( Pivot_character_movie, { as: 'Characters', foreignKey: movies_series_id } );
Movie_serie.hasOne( Genre );

module.exports = Movie_serie;