
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
        Movies_series.belongsTo( models.Genres );
        Movies_series.hasMany( models.Character_Movie, {
            foreignKey: "movies_series_id",
            as: "characters"
        } )
    }

    return Movies_series;
}