
'use strict'

const Pet = require('../../models/pet/pet.js');


const controller = {

 

    save: (req, res) => {

        const params = req.body;
        console.log(params);

        const pet = new Pet();

      
        pet.name = params.name;
        pet.breed = params.breed;
        pet.sex = params.sex;
     
        pet.save((err, petStored) => {

            if (err || !petStored) {
                return res.status(404).send({
                    status: 'error',
                    message: ' mascota no se ha guardado !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                petStored
            });

        });

    },


    getPet: (req, res) => {

        const query = Pet.find({});

        query.sort('-date').exec((err, pet) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al extraer los datos"
                });
            }

            if (!pet) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay Mascotas para mostrar"
                });
            }

            return res.status(200).send({
                status: "success",
                pet
            });

        });

    },



    delete: (req, res) => {

        const petId = req.params.id;

        Pet.findOneAndDelete({ _id: petId }, (err, petRemoved) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al eliminar!!"
                });
            }

            if (!petRemoved) {
                return res.status(404).send({
                    status: "error",
                    message: "No se ha encontrado la mascota que deseas eliminar!!"
                });
            }


            return res.status(200).send({
                status: "success",
                pet: petRemoved
            });

        });

    }

};

module.exports = controller;