
module.exports = ( sequelize, DataTypes ) => {

    let alias = "Users";

    let cols = {

        id: {
            type: DataTypes.STRING(100),
            primaryKey: true,
            allowNull: false
        },
        
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        
        email: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING(45),
            allowNull: false,
            defaultValue: 'user',
        },
    }

    let config = {
        tableName: "users",
    }

    const User = sequelize.define( alias, cols, config );

    return User;

}
