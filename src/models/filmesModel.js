 import { DataTypes } from "sequelize";
import Sequelize from "../config/dbConfig.js";

const filmeModel = Sequelize.define('filmes',{
    id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        primarayKey: true,
        autoIncrement: false
    },
    titulo: {
        type : DataTypes.STRING,
        allowNull: false
    },

});
    
