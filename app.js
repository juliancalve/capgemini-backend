const express = require( 'express' );
const app = express();
const cors = require( 'cors' );
const { PORT } = require( './config' );
const createControllers = require( './src/controllers/createControllers' );
const router = express.Router();

app.use(cors());

app.use( express.urlencoded( { extended: false } ) );

app.use( express.json() );

app.use( '/api', router );
createControllers( router );

app.listen(PORT, () => {
 console.log( `Port listen on ${PORT}` );
});
