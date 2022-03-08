
module.exports = ( sequelize, DataTypes ) => {

    let alias = "Genres"

    let cols = {

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

    }

    let config = {
        tableName: 'genres',
    }

    const Genre = sequelize.define( alias, cols, config );

    Genre.associate = models => {
        Genre.hasMany( models.Movies_series, {
            as: "genre",
            foreignKey: "genres_id"
        } )
    }

    return Genre;
}