const clientService = require( '../services/client.service' );

const getClientById = (req, res) => {
    try {
        const { id } = req.params;
        const data = clientService.getClientById( id );
        if( data ) {
            return res.status(202).send({ data });
        } else {
            return res.status(404).send({ data })
        }
    } catch ( error ) {
        return res.status(500).send( error )
    }
};

const getAllClients = (req, res) => {
    try {
        const id = req.headers.authorization;
        const { page } = req.query;
        const data = clientService.getAllClients( id, page );
        if( data ) {
            return res.status(202).send({ data });
        } else {
            return res.status(404).send({ data })
        }
    } catch ( error ) {
        return res.status(500).send( error )
    }
};

module.exports = {
    getClientById,
    getAllClients
}