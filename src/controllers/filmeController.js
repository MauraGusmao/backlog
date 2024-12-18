import filmeModel from "../models/filmeModel.js";
//controlles
export default class Filmes{
    async BuscarTodosOsFilmes(req, res){//Async e await faz o javascript aguardar as informações de findAll antes de dar a resposta para o usuario
        try {
            const filmes = await filmeModel.findAll();//Await indica que o código deve entrar em estado de espera
            res.json(filmes);
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }


    }
    async CadastrarFilme(req, res){
        try {
            const filmeCadastrado = await filmeModel.create(req.body);
            res.json({message: 'Filme cadastrado com sucesso!', filmeCadastrado});
        } 
        catch (err) {
            res.status(500).json({erro: err.message});
        }

    }

    async BuscarFilme(req, res, id){
        try{
            const filme = await filmeModel.findOne({where: {id: id}});
            if(!filme){
                return res.status(404).json({erro: ""});//Return para evitar que em caso de bug de fluxo o código tente mandar duas
                //respostas para o servidor e acabe o derrubando.
            } 
            return res.json(filme);
        }catch(err){
            res.status(500).json({erro: err.message});
        }
    }

    async AtualizarFilme(req,res){
        try{
            const [atualizado] = await filmeModel.update(req.body, {where: {"id": req.params.id}});
            if(!atualizado){
                return res.status(404).json({erro:"Filme não encontrado"});
            }
            const filmeAtualizado = await filmeModel.findOne({where: {"id": req.params.id}});
            return res.json({message:"Filme atualizado com sucesso", filme: filmeAtualizado});
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }

    }

    async DeletarFilme(req, res){
        try{
            const filme = await filmeModel.destroy({
                where:{"id": req.params.id}
            });
            if(!filme){
                return res.status(404).json({erro: "Filme não encontrado"});
            }
            return res.status(204).json({message: "Filme deletado com sucesso", filme: filme});
        }catch(err){
            res.status(500).json({erro: err.message});
        }
    }

}
