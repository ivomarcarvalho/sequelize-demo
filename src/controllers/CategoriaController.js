const Categoria = require('../models/Categoria');
const conn = require('../../db');

module.exports = {
    async index(req, res) {
        const { id } = req.params;
        let categoria = [];
        if (id == 0) {
            categoria = await Categoria.findAll({
                attributes: ['nome']});
        } else {
            categoria = await Categoria.findByPk(id);
        }

        return res.json(categoria)
    },
    async create(req, res) {
        const { nome } = req.body;
        let categoria = await Categoria.findOne({ where: { nome: nome } });
        if (!categoria) {
            categoria = await Categoria.create(req.body)
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
            // return res.json(categoria);
        } else {
            return res.json({ msg: 'Categoria já cadastrada!' });
        }
    },
    async update(req, res) {
        const { id, nome } = req.body;
        await Categoria.update({ nome: nome }, { where: { id: id } })
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
        await Categoria.destroy({ where: { id: id } })
            .then(() => {
                return res.json({
                    msg: 'Categoria excluida com sucesso!'
                })
            }).catch(() => {
                return res.json({
                    msg: 'Erro na exclusão da categoria'
                })
            })
    },
    async qbg(req, res) {
        let cat = [];
        [cat] = await conn.query('select * from categoria');
        return res.json(cat);
    }
}