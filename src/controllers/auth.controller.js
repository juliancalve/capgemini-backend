const authHandler = require( '../handlers/auth.handler' );
const baseUrl = '/auth'

module.exports = ( router ) => {
    router.post( `${baseUrl}/login`, authHandler.login );
    router.get( `${baseUrl}/get-user`, authHandler.getUser );
}
