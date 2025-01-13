import Carro from "../models/Carro.js";
import Registro from "../models/Registro.js";

class RegistroController {
  static async alugarCarro(req, res) {
    const registro = {
      placa: req.body.placa,
      dataInicial: req.body.dataInicial,
      dataFinal: req.body.dataFinal,
    };

    const carroDisponivel = await Carro.findOne({
      where: {
        placaDoCarro: registro.placa,
      },
      raw: true,
    });

    const carroDisponivelObjeto = JSON.parse(JSON.stringfy(carroDisponivel));

    if (carroDisponivelObjeto == null) {
      res.status(404).json("Carro não encontrado em carros disponiveis");
      return;
    } else {
      console.log(`Carro encontrado: ${carroDisponivelObjeto.placaDoCarro}`);
    }

    if (carroDisponivelObjeto.placaDoCarro == registro.placa) {
      try {
        const isCarroAlugado = await Registro.findOne({
          where: {
            placa: registro.placa,
          },
        });

        if (isCarroAlugado) {
          res.json("Esse carro já está alugado");
          return;
        }

        await Registro.create(registro);

        res.status(302).json(carroDisponivel);
      } catch (error) {
        console.log("Ops, tivemos um erro", +error);
      }
    }
  }
}

export default RegistroController;
