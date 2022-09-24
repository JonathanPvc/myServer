//Diferentes métodos y rutas relacionadas con los artículos. Definimos todos los métodos y objetos de la API

'use strict'

const History = require('../../models/history/history.js');

const controller = {

    save: (req, res) => {

        
    

        const params = req.body;
        console.log(params);
        
        const history = new History();

      
        history.temperature = params.temperature;
        history.weight = params.weight;
        history.heart_rate = params.heart_rate;
        history.breathing_frequency = params.breathing_frequency;
        history.date_time = params.date_time;
        history.feeding = params.feeding;
        history.habitat = params.habitat;
        history.observation = params.observation;


        history.save((err, historyStored) => {

            if (err || !historyStored) {
                return res.status(404).send({
                    status: 'error',
                    message: 'El usuario no se ha guardado !!!'
                });
            }

          
            return res.status(200).send({
                status: 'success',
                historyStored
            });

        });

    },

 

    getHistory: (req, res) => {

        const query = History.find({});

        query.sort('-date').exec((err, history) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al extraer los datos"
                });
            }

        
            if (!history) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay clientes para mostrar"
                });
            }

            return res.status(200).send({
                status: "success",
                history
            });

        });

    },

   

    delete: (req, res) => {

       
        const historyId = req.params.id;

        History.findOneAndDelete({ _id: historyId }, (err, historyRemoved) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al eliminar!!"
                });
            }

            if (!historyRemoved) {
                return res.status(404).send({
                    status: "error",
                    message: "No se ha encontrado el usuario que deseas eliminar!!"
                });
            }

         

            return res.status(200).send({
                status: "success",
                history: historyRemoved
            });

        });

    }

};

module.exports = controller;