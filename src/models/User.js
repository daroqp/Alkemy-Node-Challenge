module.exports = (sequelize, dataTypes) => {

    let alias = "Users";
    let cols = {
        id: {
            types: dataTypes.STRING(45),
            primaryKey: true,
            allowNull: false
        },
        
        name: {
            types: dataTypes.STRING(45),
            allowNull: false,
        },
        
        email: {
            types: dataTypes.STRING(45),
            allowNull: false,
        },
        
        password: {
            types: dataTypes.STRING(45),
            allowNull: false,
        },
        
        google: {
            types: dataTypes.BOOLEAN,
            allowNull: false,
        },

        status: {
            types: dataTypes.BOOLEAN,
            allowNull: false,
        }
    };

    let config = {
        tableName: "users",
        timestamps: false,
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}