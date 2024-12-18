import express from "express";
import filmeController from "../controllers/filmeController.js";
const router = express.Router();
const filme = new filmeController();
router.get('/', (req, res) => {
    try {
        filme.BuscarTodosOsFilmes(req, res);
    } catch (err) {
        res.status(500).json({erro: err.message});

    }

} );//Callback function, caso algo aconteça, executa a função

router.post('/', (req, res) => {
    try{
      filme.CadastrarFilme(req, res);  
    }
    catch(err){
        res.status(500).json({erro: err.message});

    }}

);


router.get('/:id', (req, res) =>{//Pegando o parametro da rota
    try{
        const id = req.params.id;//Acessa o parametro da rota
        filme.BuscarFilme(req, res, id);
    }catch(err){
        res.status(500).json({erro: err.message});
    }
});

router.put("/:id", (req, res) =>{
    try{
        filme.AtualizarFilme(req, res);
    }
    catch(err){
        res.status(500).json({erro: err.message});
    }

})

router.delete("/:id", (req, res) =>{
    try{
        filme.DeletarFilme(req, res);
    }catch(err){
        res.status(500).json({erro:err.message});
    }
})

export default router;
