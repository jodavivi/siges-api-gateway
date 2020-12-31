const request			= require('request-promise-native');
const utilshttp 		= require('../utils/utilshttp');
const serviciosurl		= require('../urlservicio/index');
 const registrarAuditoriaClient  = require('../serviceclient/siges/registroAuditoriaHana');
//Servicios de metodo GET
exports.operacionGet = async (req, res) => { 
	 var oResponse			  = {};
	 oResponse.oAuditResponse = {};
	 oResponse.oData		  = [];
	 var sNombreProceso		  = '';
	 var tiempoProceso		  = 0;
     try { 
     	var start			  = Date.now();
     	var constGet		  = "G-";
     	var oUrls			  = serviciosurl.servicios(); 
     	var sPath			  = req.url.split("?")[0];
     	var sUrlDestino		  = oUrls[constGet+sPath][0];
     		sNombreProceso    = oUrls[constGet+sPath][1];
     	if(sUrlDestino.indexOf("xsodata") !== -1){
     		//Es un odata
     		var options = {
			    method: 'GET'
			    ,uri: sUrlDestino
			    ,headers: utilshttp.generaHeaders(req.headers)
			    ,json: true 
			  } 
     	 oResponse =	await	utilshttp.httpOdata(options, sUrlDestino, req.url);
     	}else{
			 //es un servicio normal
			 
     		var options = {
			    method: 'GET'
			    ,uri: sUrlDestino
			    ,headers: utilshttp.generaHeaders(req.headers)
			    ,json: true 
			  } 
     	 oResponse =	await	utilshttp.httpMetodo(options, sUrlDestino, req.url);
     	}
     	 var end = Date.now();
    	 tiempoProceso = end - start; 
     } catch (e) {
         	oResponse.oAuditResponse.iCode = -3;
			oResponse.oAuditResponse.sMessage = 'Ocurrio un error en el api gateway, ' + e.toString();
			oResponse.oAuditResponse.sIdTransaccion	=  req.headers.sidtransaccion;
     }finally{
     	if(oResponse.oAuditResponse.iCode < 1){
	     	var oParamAuditoria = {};
			 oParamAuditoria.oData						= {};
			 oParamAuditoria.oData.sTransaccionId		= req.headers.sidtransaccion;
			 oParamAuditoria.oData.sTerminal			= (req.headers.sterminal) ? req.headers.sterminal : req.headers['x-forwarded-for'];
			 oParamAuditoria.oData.sUsuario				= req.headers.susuario;
			 oParamAuditoria.oData.sSistema				= "PORTAL-SIGES";
			 oParamAuditoria.oData.sAplicacion			= req.headers.saplicacion;
			 oParamAuditoria.oData.sNombreProceso		= sNombreProceso;
			 oParamAuditoria.oData.dFechaTransaccion  	= req.headers.dfecha;
	     	 oParamAuditoria.oData.iTiempoProceso		= tiempoProceso;
	     	 oParamAuditoria.oData.sEntradaProceso		= JSON.stringify(req.body);
			 oParamAuditoria.oData.sRespuestaProceso 	= JSON.stringify(oResponse);
			 if(oResponse.oAuditResponse.iCode === 1){
				oParamAuditoria.oData.sEstado				= "OK";
			 }else if(oParamAuditoria.oData.sEstado	< 1 ){
				oParamAuditoria.oData.sEstado				= "ERROR";
			 }else{
				oParamAuditoria.oData.sEstado				= "ALERTA";
			 }
			 
	     	registrarAuditoriaClient.registrarAuditoriaHana(oParamAuditoria);
     	}
     	res.json(oResponse) 
     } 
};