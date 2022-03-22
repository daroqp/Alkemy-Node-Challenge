
module.exports = ( sequelize, DataTypes ) => {
    
    let alias = "Movies_series";
    
    let cols = {

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

        genres_id: {
            type: DataTypes.STRING(100),
            allowNull: false,
            references: {
                model: 'Genres',
                key: 'id',
            },
        },

    }

    let config = {
        tableName: 'movies_series',
    }

    const Movies_series = sequelize.define( alias, cols, config );

    Movies_series.associate = models => {
        Movies_series.belongsTo( models.Genres, {
            foreignKey: "genres_id"
        } );
        Movies_series.belongsToMany( models.Characters, {
            foreignKey: "movies_series_id",
            through: "Character_Movie",
        } )
    }

    return Movies_series;
}