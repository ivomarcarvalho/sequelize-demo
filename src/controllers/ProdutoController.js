const Fabricante = require('../models/Fabricante');
const Produto = require('../models/Produto');
const Categoria = require('../models/Categoria');


module.exports = {
    async create() {
        const novoProduto = await Produto.create({
            nome: 'Mouse USB',
            descricao: 'sem fio',
            custo: 5.89,
            preco: 10.00,
            idFabricante: 1
        })
    },
    async index(req, res) {
        const { id } = req.params;
        let produto = [];
        //Lazy loading - Carregamento tardio 
        //const produto = await Produto.findByPk(id);
        // const fabricante = await produto.getFabricante();
        //console.log(produto.nome+", Fabricante "+fabricante.nome);

        //Eager loading - Carregamento de ambos - left outer join
        produto = await Produto.findByPk(id, { include: [Fabricante, Categoria] });
        //    console.log(produto.nome+", Fabricante "+produto.fabricante.nome);
        return res.json(produto)

    },
    async update(req) {
        const id = req[0];
        const ajuste = req[1];
        const categoria = await Categoria.findByPk(1);
        console.log(categoria);

        const produto = await Produto.findByPk(id);
        // produto.preco = produto.preco + ajuste;
        await produto.setCategoria([categoria]);
        // produto.save();
    },
    async delete() {
        await Produto.destroy({
            where: {
                custo: null
            }
        })
    }

};