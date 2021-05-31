const clientHandler = require( '../handlers/client.handler' );
const baseUrl = '/client'

module.exports = ( app ) => {
    app.get( `${baseUrl}`, clientHandler.getAllClients );
    app.get( `${baseUrl}/:id`, clientHandler.getClientById );
}