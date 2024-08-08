 import { Sequelize } from "sequelize";

 const sequelize = new Sequelize('backlog' , 'root' ,'',{
    host: 'localhost',
    dialect: 'mysql'

 });
 sequelize.authenticate()
    .then(() => {
        console.log('conctado ao mysql com sequelize');
    })
    .catch (err =>{
        console.error('nao foi possivel conecta ao banco de dados:' , err);
    });
export default sequelize;