const Usuario = require('../models/Usuario');


module.exports = {

    async index(req, res) {
        const { id } = req.params;
        let usuario = [];
        if (id == 0) {
            usuario = await Usuario.findAll()

        } else {
            usuario = await Usuario.findPk(id)
        }
        return res.json(usuario);
    },

    async create(req, res) {
        const { login } = req.body;
        let usuario = await Usuario.findOne({ where: { login: login } });
        if (!usuario) {
            usuario = await Usuario.create(req.body)
                .then(() => {
                    return res.status(200).json({
                        msg: 'ok'
                    })
                        .catch(() => {
                            return res.status(400).json({
                                msg: 'erro na inclusão do usuário'
                            })
                        })
                })
        } else {
            return res.json({ msg: 'Login já cadastrada!' });
        }
    },
    async update(req, res) {
        const { id, senha } = req.body;
        await Usuario.update({ senha: senha }, { where: { id: id } })
            .then(() => {
                return res.status(200).json({
                    msg: 'ok'
                })
            })
            .catch(() => {
                return res.status(400).json({
                    msg: 'erro'
                })
            })
    },
    async delete(req, res) {
        const { id } = req.params;
        let usuario = await Usuario.findOne({ where: { id: id } });
        if (!usuario) {
            return res.json({
                msg: 'Usuário não localizado!'
            })
        } else {
            usuario = await Usuario.destroy({ where: { id: id } })
                .then(() => {
                    return res.status(200).json({
                        msg: 'Exclusão realizada com sucesso!'
                    })
                        .catch(() => {
                            return res.status(400).json({
                                msg: 'erro na exclusão do usuário!'
                            })
                        })
                })
        }
    }

};