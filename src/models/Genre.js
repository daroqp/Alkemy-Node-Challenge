const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Movie_serie = require('./Movie_serie');

class Genre extends Model {}

Genre.init({

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

    movies_series_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }

}, {
    sequelize,
    tableName: 'genres',
    timestamps: false,
});

Genre.belongsTo( Movie_serie );

module.exports = Genre;