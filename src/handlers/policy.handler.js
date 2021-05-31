const policyService = require( '../services/policy.service' );

const getPoliciesByEmail = ( req, res ) => {
    try {
        const id = req.headers.authorization;
        const { email } = req.params;
        const { page } = req.query;
        const policies = policyService.getPoliciesByEmail( email, id, page );
        if ( policies ) {
            res.status( 202 ).send({ data: policies });
        }
    } catch ( error ) {
        res.status( 500 ).send({ message: 'Ocurrio un error ' });
    }
};

const getAllPolicies = ( req, res ) => {
    try{
        const id = req.headers.authorization;
        const { page } = req.query;
        const data = policyService.getAllPolicies( id, { page } );
        res.status( 202 ).send({ data });
    } catch ( error ) {
        res.status( 500 ).send({ message: 'Ocurrio un error ' });
    }
    
}

module.exports = {
    getPoliciesByEmail,
    getAllPolicies
};
