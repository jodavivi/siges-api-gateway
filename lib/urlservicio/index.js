 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {};
	
	//Servicios de AuditoriaBaseService
	var sHostAuditoriaBase  = 'http://localhost:3002';
	oUrl["P-/auditoria"]					= [sHostAuditoriaBase + '/auditoria' , 'RegistrarAuditoria']; 
	oUrl["G-/auditoria/aplicacion"]			= [sHostAuditoriaBase + '/auditoria/aplicacion' , 'ConsultarAuditoriaAplicacion']; 
	oUrl["G-/auditoria/aplicacion/proceso"]	= [sHostAuditoriaBase + '/auditoria/aplicacion/proceso' , 'ConsultarAuditoriaProceso']; 
	oUrl["G-/auditoria"]					= [sHostAuditoriaBase + '/auditoria' , 'ConsultarAuditoria']; 
	
	//Servicios de Maesto de Configuracion
	var sHostMaestoBase      	= 'http://localhost:3000';
	oUrl["P-/maestra/tabla"]	= [sHostMaestoBase + '/maestra/tabla' , 'RegistrarMaestra'];
	oUrl["U-/maestra/tabla"]	= [sHostMaestoBase + '/maestra/tabla' , 'ActualizarTabla'];
	oUrl["D-/maestra/tabla"]	= [sHostMaestoBase + '/maestra/tabla' , 'EliminarTabla'];
	oUrl["G-/maestra/tabla"]	= [sHostMaestoBase + '/maestra/tabla' , 'ConsultarTabla'];
	oUrl["P-/maestra/tabla/parametro"]	= [sHostMaestoBase + '/maestra/tabla/parametro' , 'RegistrarParametro'];  
	oUrl["U-/maestra/tabla/parametro"]	= [sHostMaestoBase + '/maestra/tabla/parametro' , 'ActualizarParametro'];
	oUrl["D-/maestra/tabla/parametro"]	= [sHostMaestoBase + '/maestra/tabla/parametro' , 'EliminarParametro'];
	oUrl["G-/maestra/tabla/parametro"]	= [sHostMaestoBase + '/maestra/tabla/parametro' , 'ConsultarParametro'];
	oUrl["G-/maestra/tabla/parametro/filtro"]	= [sHostMaestoBase + '/maestra/tabla/parametro/filtro' , 'ConsultarParametroxFiltro'];
	
	//Servicios de Seguridad
	var sHostSeguridadBase      		 = 'http://localhost:3001';
	oUrl["G-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'ConsultarAplicacion'];
	oUrl["P-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'CrearAplicacion'];
	oUrl["U-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'ActualizarAplicacion']; 
	oUrl["D-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'EliminarAplicacion']; 
	oUrl["G-/seguridad/grupo"]			 = [sHostSeguridadBase + '/seguridad/grupo' , 'ConsultarGrupo']; 
	oUrl["G-/seguridad/grupoaplicacion"] = [sHostSeguridadBase + '/seguridad/grupoaplicacion' , 'ConsultarGrupoAplicacion']; 
	oUrl["G-/seguridad/rol"] 			 = [sHostSeguridadBase + '/seguridad/rol' , 'ConsultarRoles']; 
	oUrl["G-/seguridad/rol/aplicacion"]  = [sHostSeguridadBase + '/seguridad/rol/aplicacion' , 'ConsultarRolAplicacion']; 
    return oUrl;
      
};