const { clients } = require( '../storage/clients.json' );
const roles = require( '../constants/roles' );

const checkUserAdmin = ( id ) => {

    const user = clients.find( client => client.id === id && roles.ADMIN === client.role );
    return user;
};

const login = ( email ) => {
    const user = clients.find( client => client.email === email );
    return user;
}

module.exports = {
    checkUserAdmin,
    login
}