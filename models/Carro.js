import { Datatypes } from "sequelize";

import db from './../db/conn.js';

const Carro = db.define('Carro', {
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    placaDoCarro: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true 
    },
    precoDeAluguel: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        require: true 
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true 
    },
});

export default Carro;