const { response } = require('express');
const authService = require( '../services/auth.service' );

const login = (req, res) => {
    try {

        const { email } = req.body;
        const data = authService.login( email );
        if( data ) {
            return res.status(202).send({ data });
        } else {
            return res.status(401).send({ data: 'Invalid credentials' });
        }
    } catch ( error ) {
        return res.status(500).send( error )
    }
};

const getUser = (req, res) => {
    try {
        const id = req.headers.authorization;
        if ( id ) {
            const admin = authService.checkUserAdmin( id );
            return res.status( 202 ).send( admin )

        } else {
            return response.status(401).send();
        }
    } catch ( error ) {
        return res.status(500).send( error );
    }
}


module.exports = {
    login,
    getUser
}