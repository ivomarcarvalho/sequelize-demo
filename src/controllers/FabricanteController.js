const Fabricante = require('../models/Fabricante');
//const conn = require('../../db');

module.exports = {
    async index(req, res) {
        const { id } = req.params;
        let fabricante = [];
        if (id == 0) {
            fabricante = await Fabricante.findAll();
        } else {
            fabricante = await Fabricante.findByPk(id);
        }
        if (fabricante === null) {
            return res.json({ msg: 'Fabricante não localizado!' })
        } else {
            return res.json(fabricante)
        };
    },
    async create(req, res) {
        let fabricante = await Fabricante.findOne({ where: req.body })
        if (fabricante === null) {
            fabricante = await Fabricante.create(req.body);
            return res.json(fabricante);
        } else {
            return res.json('Fabricante já cadastrado!');
        }
    }
};