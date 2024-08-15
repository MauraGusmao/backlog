 import filmeModel from "../models/filmesModel.js";

 class Filmes{
    async BuscarTodosFilmes(req ,res){
        try{
            const filmes = await filmesModel.findAll();
            res.json(filmes);
        }
        catch(err){
            res.status(500).json({erro:err.message})

        }
    }

    async CadastrarFilme(req, res){
        try {
            const FilmeCadastrado = await filmeModel.create(req.body);
            res.json({message: 'Filme cadastrado com sucesso!', FilmeCadastrado});
        } catch (err) {
            res.status(500).json({erro: err.message});
            
        }
    }
 }

 export default Filmes;