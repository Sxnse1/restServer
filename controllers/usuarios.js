const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};


const usuariosPut = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'put API',
        id
    });
};

const usuariosPost = (req, res) => {

    const body = req.body;
    const usuario = new usuario(body);

    res.json({
        msg: 'post API',
        body
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    });
};


module.exports = { 
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}