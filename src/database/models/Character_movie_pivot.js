
module.exports = (sequelize, DataTypes) => {

    let alias = "Character_Movie"

    let cols = {
        id: {
            type: DataTypes.STRING(100),
            primaryKey: true,
            allowNull: false,
        },

        characters_id: {
            type: DataTypes.STRING(100),
            allowNull: false,
            references: {
                model: 'Character',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },

        movies_series_id: {
            type: DataTypes.STRING(100),
            allowNull: false,
            references: {
                model: 'Movie_serie',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }
    }

    let config = {
        tableName: "characters_movies_series",
    }

    const Character_Movies_Pivot = sequelize.define( alias, cols, config );

    Character_Movies_Pivot.associate = models => {
        Character_Movies_Pivot.belongsTo( models.Characters, {
            otherKey: "characters_id",
            foreignKey: "movies_series_id",
        } );
        Character_Movies_Pivot.belongsTo( models.Movies_series, {
            otherKey: "movies_series_id",
            foreignKey: "characters_id",
        } )
    }

    return Character_Movies_Pivot;
}    