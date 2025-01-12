import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Sistema-aluguel-de-carro', 'postgres', 'qnm17h34', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

try{

    sequelize.authenticate()
    console.log('Conectados ao postgres com sucesso!')

} catch (error){
    console.log('Não foi possivel conectar. Erro', error)
}

export default sequelize;