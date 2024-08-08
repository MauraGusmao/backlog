 import { DataTypes } from "sequelize";
import Sequelize from "../config/dbConfig.js";

const filmeModel = Sequelize.define('filmes',{
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
    genero: {
        type: DataTypes.STRING,
        allowNull: false

    }
},   {
    timestamps:false



});

export default filmeModel;
    
