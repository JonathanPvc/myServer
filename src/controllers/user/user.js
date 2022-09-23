
'use strict'

const User = require('../../models/user/user.js');

const controller = {

    save: (req, res) => {

        const params = req.body;
        console.log(params);

        const user = new User();


        user.name = params.name;
        user.lastname = params.lastname;
        user.typedocument = params.typedocument;
        user.numberdocument = params.numberdocument;
        user.state = params.state;
        user.sex = params.sex;

        user.save((err, userStored) => {

            if (err || !userStored) {
                return res.status(404).send({
                    status: 'error',
                    message: 'El usuario no se ha guardado !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                userStored
            });

        });

    },

    getUser: (req, res) => {

        const query = User.find({});

        query.sort('-date').exec((err, user) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al extraer los datos"
                });
            }

            if (!user) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay clientes para mostrar"
                });
            }

            return res.status(200).send({
                status: "success",
                user
            });

        });

    },

  
    delete: (req, res) => {

        
        const userId = req.params.id;

        User.findOneAndDelete({ _id: userId }, (err, userRemoved) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al eliminar!!"
                });
            }

            if (!userRemoved) {
                return res.status(404).send({
                    status: "error",
                    message: "No se ha encontrado el usuario que deseas eliminar!!"
                });
            }

    
            return res.status(200).send({
                status: "success",
                user: userRemoved
            });

        });

    }

};

module.exports = controller;