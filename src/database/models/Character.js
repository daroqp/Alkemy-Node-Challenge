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
        Character.hasMany( models.Character_Movie, {
            foreignKey: "characters_id",
            as: "movies_series"
        } )
    }

    return Character;
}