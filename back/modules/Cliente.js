import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

class Cliente extends Model {}

Cliente.init(
    {
        id: { type:DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        email: {type: DataTypes.STRING, allowNull: false, validate: {email: true} },
        ciudad: {type: DataTypes.STRING, allowNull: true },
    },
    { sequelize, modelName: 'Cliente', tableName: 'clientes', timestamps: false }
);

export default Cliente;


