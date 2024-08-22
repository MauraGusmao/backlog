 import { DataTypes } from "sequelize";
import Sequelize from "../config/dbConfig.js";

const filmeModel = Sequelize.define('Filmes',{
    id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    titulo: {
        type : DataTypes.STRING,
        allowNull: false
    },
    diretor: {
        type: DataTypes.STRING,
        allowNull:false
    },
    ano: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    gereno: {
        type: DataTypes.STRING,
        allowNull: false

    }
},   {
    timestamps:false



});

export default filmeModel;
    
