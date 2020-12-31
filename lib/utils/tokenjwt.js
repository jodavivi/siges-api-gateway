const jwt		 = require('jsonwebtoken');
const constantes = require('../utils/constantes');

//generar Token JWT
exports.generarToken = function () { 
	
	 var oConstantes = constantes.constantes(); 
	 var oResponse			  = {};
	 oResponse.oAuditResponse = {};
	 oResponse.oData		  = [];
     try { 
	     var oUsuario = {
							id: "jose.villanueva",
							name: {
								givenName: "jose david",
								familyName: "villanueva villalobos"
							},
							emails: [
								{
								value: "jose.villanueva@seidor.com"
								}
							]
						};
			 
			 var token=jwt.sign( oUsuario, oConstantes.sClaveJwt, {expiresIn: oConstantes.sTiempoExpiracion});
			 
			 oResponse.oAuditResponse.iCode = 1;
			 oResponse.oAuditResponse.sMessage = 'OK';
			 oResponse.oData = token; 
			
     } catch (e) { 
         	oResponse.oAuditResponse.iCode = -2;
			oResponse.oAuditResponse.sMessage = 'Ocurrio un error en el api gateway al tratar de generar el token ' + e.toString();
     }
     return oResponse;
}

exports.validarToken = function (sToken) { 
	
	 var oConstantes = constantes.constantes(); 
	 var oResponse			  = {};
	 oResponse.oAuditResponse = {};
	 oResponse.oData		  = [];
	 
	try{
		jwt.verify(sToken, oConstantes.sClaveJwt, function(err, user) {
			      if (err) {
			         oResponse.oAuditResponse.iCode = 2;
			         oResponse.oAuditResponse.sMessage = "No tiene permisos";
			         oResponse.oData = err;
			      } else {
			         oResponse.oAuditResponse.iCode = 1;
			         oResponse.oAuditResponse.sMessage = "OK";
			         oResponse.oData = user;
			      }
			 });  
	}catch(e){
		oResponse.oAuditResponse.iCode = -1;
        oResponse.oAuditResponse.sMessage = "Ocurrio un error al tratar de validar el token " + e.toString();
	}
	return oResponse;
}