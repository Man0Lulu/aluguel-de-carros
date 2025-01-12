import Carro from "../models/Carro.js";

class CarroController{

    static async createCarro(req, res){
        
        const carro = {
            modelo: req.body.modelo,
            cor: req.body.cor,
            placaDoCarro: req.body.placaDoCarro,
            precoDeAluguel: req.body.precoDeAluguel,
            categoria: req.body.categoria
        }
        try{
            await Carro.create(carro)
            res.status(200).json('carro adicionado.')

        } catch (error) {
            console.log('não foi possivel completar a ação', + error)

        }
    }
}

export default CarroController;