const allPolicies = require( '../storage/policies.json' );
const allClients = require( '../storage/clients.json' );
const { paginate } = require( '../utils/paginate' );
const { checkUserAdmin } = require( './auth.service' );

const getPoliciesByEmail = ( email, id, page ) => {
    const policies = allPolicies.policies.filter( policy => policy.email === email && policy.clientId === id );
    const data = paginate( policies, { current_page: page });
    data.data.sort( (a, b)  => {
        return new Date(a.inceptionDate) < new Date(b.inceptionDate) ? 1 : -1;
    });
    return data;
}

const getAllPolicies = ( id, { page } ) => {
    const isAdmin = checkUserAdmin( id );
    let policies = [];
    if( isAdmin ) {
        policies = allPolicies.policies.filter( policy => policy.clientId === id );
    } else {
        const findedClient = allClients.clients.find( client => client.id === id );
        policies = allPolicies.policies.filter( policy => policy.email === findedClient.email );
    }
    const data = paginate( policies, { current_page: page } );
    data.data.sort( (a, b)  => {
        return new Date(a.inceptionDate) < new Date(b.inceptionDate) ? 1 : -1;
    });
    return data;
}

module.exports = {
    getPoliciesByEmail,
    getAllPolicies
};
