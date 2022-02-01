module.exports = (sequelize, dataTypes) => {

    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.STRING(45),
            primaryKey: true,
            allowNull: false
        },
        
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        
        password: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        
        google: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },

        status: {
            type: dataTypes.BOOLEAN,
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