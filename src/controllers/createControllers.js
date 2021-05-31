const authController = require( './auth.controller' );
const clientController = require( './client.controller' );
const policyController = require( './policy.controller' );
module.exports = ( router ) => {

    authController( router );
    clientController( router );
    policyController( router );
}