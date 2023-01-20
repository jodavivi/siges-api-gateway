/*eslint no-console: 0*/
"use strict";
const config = require('./config/entorno.js'); 
const express   			= require('express'); 
const bodyParser			= require('body-parser');    
const tokenjwt  			= require('./utils/tokenjwt');
const routes   				= require('./routes/index'); 
const log4js = require("log4js"); 
var cors					= require('cors');
var http 					= require('http'); 
//crear el servidor
const app = express(); 
log4js.configure({
    appenders: {
        siges_api_gateway: {
        type: "dateFile",
        filename: "../log/siges-api-gateway.log",
        pattern: "yyyy-MM-dd",
        compress: true,
      },
    },
    categories: {
      default: { appenders: ["siges_api_gateway"], level: "debug" },
    },
  });
  app.set('host', config.HOST);
 app.set('port', config.PORT);
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
    try {
      var token = req.headers['stoken']; 
	    if(!token){
		 
	        res.status(401).send({
	          error: "Es necesario el token de autenticación"
	        });
	        return;
	    }  
      var sociedad = req.headers['ssociedad'];
      if(!sociedad || sociedad == ''){ 
        res.status(401).send({
          error: "Es necesario seleccionar la sociedad"
        });
        return;
    } 
	   token = token.replace('Bearer ', '') ; 
       var oValidaToken = tokenjwt.validarToken(token); 
       if(oValidaToken.oAuditResponse.iCode !== 1){  
       		 res.status(401).send({
	          error: "No tiene permisos para utilizar este recurso"
	        });
       }else{ 
        // Validamos que no este ingresando una emprsa que no tiene acceso
        var oEmpresasPermitidas = JSON.parse(oValidaToken.oData.data)["UsuarioEmpresa"][sociedad];
        
        if(!oEmpresasPermitidas){
          res.status(401).send({
	          error: "No tiene permisos para seleccionar esa sociedad: " +  sociedad
	        });
        }     
        var sNuevoToken = tokenjwt.crearToken(JSON.parse(oValidaToken.oData.data)); 
         req.headers.sSociedad  = sociedad;
         req.headers.oEmpresa   = JSON.stringify(oEmpresasPermitidas) ; 
       	 req.headers.sUsuario		= JSON.parse(oValidaToken.oData.data).Usuario;
       	 req.headers.oInfoUsuario	= oValidaToken.oData.data; 
         res.setHeader('RefreshToken', sNuevoToken.oData); 
         res.header( "Access-Control-Expose-Headers", "RefreshToken" ); 
       	 next();
       }   
    } catch (error) {
   //   console.log(error);
      res.status(501).send({
        error: "Error al cargar el api gateway "
      });
    } 
	    
});

//Rutas del app de auditoria
app.use('/api-gateway', routes());
const logger = log4js.getLogger("siges_api_gateway"); 
http.createServer(app).listen(app.get('port'), () => {
    console.log('Servidor funcionando correctamente en el puerto: ' + app.get('port'));
	logger.debug('Servidor funcionando correctamente en el puerto: ' + app.get('port')); 
});

