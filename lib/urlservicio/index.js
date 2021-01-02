 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {};
	
	//Servicios de AuditoriaBaseService
	var sHostAuditoriaBase  = 'http://www.consulting-tic.com:3002';
	oUrl["P-/auditoria"]		= [sHostAuditoriaBase + '/auditoria' , 'RegistrarAuditoria']; 
	
	//Servicios de UsuarioBaseService
	var sHostUsuarioBase      	= 'http://www.consulting-tic.com:3001';
	oUrl["G-/usuario"]			= [sHostUsuarioBase + '/usuario' , 'ConsultarUsuario'];  
	
    return oUrl;
      
};