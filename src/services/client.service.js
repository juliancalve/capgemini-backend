const allClients = require( '../storage/clients' );
const allPolicies = require( '../storage/policies.json' );
const { checkUserAdmin } = require( './auth.service' );
const { paginate } = require('../utils/paginate');
const roles = require( '../constants/roles' );

const getClientById = ( id ) => {

    const clientFinded = allClients.clients.find( client => client.id === id );
    return clientFinded;
};

const getAllClients = ( id, page ) => {
    let data;
    if ( checkUserAdmin( id ) ) {
        const clients = allClients.clients.filter( client => {
            return allPolicies.policies.some( policy => {
                return policy.clientId === id && client.email === policy.email;
            });
        });
        data = paginate( clients, { current_page: page } );
    }
    return data;
}

module.exports = {
    getClientById,
    getAllClients
}