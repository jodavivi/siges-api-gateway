/*eslint no-console: 0*/
"use strict";
const express   			= require('express'); 
const bodyParser			= require('body-parser');    
const tokenjwt  			= require('./utils/tokenjwt');
const routes   				= require('./routes/index'); 
var cors					= require('cors');
var http 					= require('http'); 
//crear el servidor
const app = express(); 
 app.set('port', process.env.PORT || 5000);
/*app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,saplicacion,sidtransaccion,sterminal,stoken');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');


 
	console.log("INGRESAAAAAAAAAAAAAAA 112343424234234");
    // Pass to next layer of middleware
    next();
});
*/
/*var allowlist = ['http://example1.com', 'http://localhost']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
	  console.log("INGRESAAAAAAA 111");
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
	console.log("INGRESAAAAAAA 22222222");
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors(corsOptionsDelegate));
 */
app.use(cors());
///// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
 
// Authentication
app.use((req, res, next) => { 
	    var token = req.headers['stoken']; 
	    if(!token){
			console.log("AUTENTICACIONNNN ERROR");
	        res.status(401).send({
	          error: "Es necesario el token de autenticación"
	        });
	        return;
	    } 
	   token = token.replace('Bearer ', '') ; 
       var oValidaToken = tokenjwt.validarToken(token); 
       if(oValidaToken.oAuditResponse.iCode !== 1){ 
		console.log("AUTENTICACIONNNN OK");
       		 res.status(401).send({
	          error: "No tiene permisos para utilizar este recurso"
	        });
       }else{
	 
       	 req.headers.sUsuario		= JSON.parse(oValidaToken.oData.data).Usuario;
       	 req.headers.oInfoUsuario	= oValidaToken.oData.data;
       	 next();
       }   
});

//Rutas del app de auditoria
app.use('/api-gateway', routes());
  
http.createServer(app).listen(app.get('port'), () => {
    console.log('Servidor funcionando correctamente en el puerto: ' + app.get('port'));
});

