import app from './src/app.js';//Importando o objeto do arquivo app.js

const PORT = 3000;//porta padrão /servidor

app.listen(PORT, () => {
    console.log("Servidor escutando");
});//Usando o metodo listen, através de uma arrow function
