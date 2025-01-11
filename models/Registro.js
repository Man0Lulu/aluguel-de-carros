import { DataTypes } from "sequelize";

import db from './../db/conn.js';

const Registro = db.define('Registro', {
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true 
    },
    dataInicial: {
        type: DataTypes.DATE,
        allowNull: false,
        require: true 
    },

    dataFinal: {
        type: DataTypes.DATE,
        allowNull: false,
        require: true 
    },
});


export default Registro;