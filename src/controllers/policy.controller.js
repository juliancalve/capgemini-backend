const policyHandler = require( '../handlers/policy.handler' );
const baseURL = '/policy';

module.exports = ( router ) => {
    router.get( `${baseURL}/all`, policyHandler.getAllPolicies );
    router.get( `${baseURL}/:email`, policyHandler.getPoliciesByEmail );
};
