 import filmeModel from "../models/filmesModel.js";

 class Filmes{
    async BuscarTodosFilmes(req ,res){
        try{
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        }
        catch(err){
            res.status(500).json({erro:err.message})

        }
    }


    async BuscarFilmePorId(req , res){
        try {
            const FilmeEncontrado = await filmeModel.findByPk(req.params.id);
            if(!FilmeEncontrado){
                return res.status(404).json({erro:'Filme não encontrado'});
            }
            return res.json(FilmeEncontrado);

        } 
        catch (err) {
            res.status(500).json({erro:err.message});
            
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
    async AtualizarFilme(req , res){
        try {
            const [atualizado] = await  filmeModel.update(req.body,
                { where: {id: req.params.id} }
            );
            
            if(atualizado){
                const filmeAtualizado = await filmeModel.findByPk(req.params.id);
                res.json({ message: "filme atualizado com sucesso" , filme: filmeAtualizado});
            }
            
            else{
                res.status(404).json({erro: 'filme não encontrado!'});
            }
            
        } catch (err) {
            res.status(500).json({erro: err.message})
        }
    }
 }

 export default Filmes;