/*eslint no-console: 0*/
"use strict";
const express   			= require('express'); 
const bodyParser			= require('body-parser');    
const tokenjwt  			= require('./utils/tokenjwt');
const routes   				= require('./routes/index'); 
var cors					= require('cors');
//crear el servidor
const app = express();

//NO PASAR A QAS
app.use(cors());
/////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
 
// Authentication
app.use((req, res, next) => {
	    var token = req.headers['stoken'];
	    if(!token){
	        res.status(401).send({
	          error: "Es necesario el token de autenticación"
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
       	 req.headers.sUsuario		= oValidaToken.oData.sUsuario;
       	 req.headers.oInfoUsuario	= JSON.stringify(oValidaToken.oData);
       	 next();
       }   
});

//Rutas del app de auditoria
app.use('/api-gateway', routes());
 

var port = process.env.PORT || 5000;
//puerto
app.listen(port);

console.log("Server listening on port %d", port);



