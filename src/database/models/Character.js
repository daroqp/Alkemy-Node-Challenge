module.exports = (sequelize, DataTypes) => {

    let alias = "Characters"

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
        },

    } 

    let config = {
        tableName: "characters",
    }

    const Character = sequelize.define( alias, cols, config );

    Character.associate = models => {
        Character.belongsToMany( models.Movies_series, {
            foreignKey: "characters_id",
            through: "Character_Movie",
            as: "movies_or_series"
        } )
    }

    return Character;
}