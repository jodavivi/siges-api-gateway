 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {};
	
	//Servicios de AuditoriaBaseService
	var sHostAuditoriaBase  = 'http://localhost:3001';
	oUrl["P-/auditoria"]					= [sHostAuditoriaBase + '/auditoria' , 'RegistrarAuditoria']; 
	oUrl["G-/auditoria/aplicacion"]			= [sHostAuditoriaBase + '/auditoria/aplicacion' , 'ConsultarAuditoriaAplicacion']; 
	oUrl["G-/auditoria/aplicacion/proceso"]	= [sHostAuditoriaBase + '/auditoria/aplicacion/proceso' , 'ConsultarAuditoriaProceso']; 
	oUrl["G-/auditoria"]					= [sHostAuditoriaBase + '/auditoria' , 'ConsultarAuditoria']; 
	
	//Servicios de Maesto de Configuracion
	var sHostMaestoBase      	= 'http://localhost:3002';
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
	var sHostSeguridadBase      		 = 'http://localhost:3003';
	oUrl["G-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'ConsultarAplicacion'];
	oUrl["P-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'CrearAplicacion'];
	oUrl["U-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'ActualizarAplicacion']; 
	oUrl["D-/seguridad/aplicacion"]		 = [sHostSeguridadBase + '/seguridad/aplicacion' , 'EliminarAplicacion']; 
	oUrl["G-/seguridad/grupo"]			 = [sHostSeguridadBase + '/seguridad/grupo' , 'ConsultarGrupo']; 
	oUrl["P-/seguridad/grupo"]			 = [sHostSeguridadBase + '/seguridad/grupo' , 'CrearGrupo']; 
	oUrl["U-/seguridad/grupo"]			 = [sHostSeguridadBase + '/seguridad/grupo' , 'ActualizarGrupo']; 
	oUrl["D-/seguridad/grupo"]			 = [sHostSeguridadBase + '/seguridad/grupo' , 'EliminarGrupo']; 
	oUrl["G-/seguridad/grupoaplicacion"] = [sHostSeguridadBase + '/seguridad/grupoaplicacion' , 'ConsultarGrupoAplicacion'];
	oUrl["P-/seguridad/grupoaplicacion"] = [sHostSeguridadBase + '/seguridad/grupoaplicacion' , 'RegistrarGrupoAplicacion'];  
	oUrl["G-/seguridad/grupoaplicacion/faltante"] = [sHostSeguridadBase + '/seguridad/grupoaplicacion/faltante' , 'ConsultarGrupoAplicacionFaltante']; 
	oUrl["D-/seguridad/grupoaplicacion"] = [sHostSeguridadBase + '/seguridad/grupoaplicacion' , 'EliminarGrupoAplicacionAsignado'];  
	oUrl["G-/seguridad/rol"] 			 = [sHostSeguridadBase + '/seguridad/rol' , 'ConsultarRoles']; 
	oUrl["P-/seguridad/rol"] 			 = [sHostSeguridadBase + '/seguridad/rol' , 'RegistrarRol']; 
	oUrl["U-/seguridad/rol"] 			 = [sHostSeguridadBase + '/seguridad/rol' , 'ActualizarRol']; 
	oUrl["D-/seguridad/rol"]			 = [sHostSeguridadBase + '/seguridad/rol' , 'EliminarRol'];
	oUrl["G-/seguridad/rol/aplicacion"]  = [sHostSeguridadBase + '/seguridad/rol/aplicacion' , 'ConsultarRolAplicacion']; 
    oUrl["G-/seguridad/rol/aplicacionsinasignar"]  = [sHostSeguridadBase + '/seguridad/rol/aplicacionsinasignar' , 'ConsultarRolAplicacionSinAsignar']; 
	oUrl["P-/seguridad/rol/aplicacion"]  = [sHostSeguridadBase + '/seguridad/rol/aplicacion' , 'RegistrarRolAplicacion']; 
	oUrl["D-/seguridad/rol/aplicacion"]  = [sHostSeguridadBase + '/seguridad/rol/aplicacion' , 'EliminarRolAplicacion']; 
	
	//Servicios para Usuarios
	var sHostUsuarioBase  = 'http://localhost:3003';
	oUrl["G-/seguridad/usuario"]			= [sHostUsuarioBase + '/seguridad/usuario' , 'ConsultarUsuario']; 
	oUrl["G-/seguridad/usuario/all"]		= [sHostUsuarioBase + '/seguridad/usuario/all' , 'ConsultarUsuarioEmpresaAll']; 
	oUrl["G-/seguridad/usuario/rol/noasigando"]	= [sHostUsuarioBase + '/seguridad/usuario/rol/noasigando' , 'ConsultarRolUsuarioNoAsignado']; 
	oUrl["G-/seguridad/usuario/rol"]		= [sHostUsuarioBase + '/seguridad/usuario/rol' , 'ConsultarRolUsuario']; 
	
	
	
	oUrl["U-/seguridad/usuario"]			= [sHostUsuarioBase + '/seguridad/usuario' , 'ActualizarUsuario']; 
	oUrl["U-/seguridad/usuario/asignarempresa"]			= [sHostUsuarioBase + '/seguridad/usuario/asignarempresa' , 'AsignarEmpresaUsuario']; 
	oUrl["D-/seguridad/usuario"]			= [sHostUsuarioBase + '/seguridad/usuario' , 'EliminariaUsuario']; 
	oUrl["G-/seguridad/usuario/validaestadoclave"]	= [sHostUsuarioBase + '/seguridad/usuario/validaestadoclave' , 'ValidaEstadoClave']; 
	oUrl["G-/seguridad/usuario/estadoclave"]	= [sHostUsuarioBase + '/seguridad/usuario/estadoclave' , 'ConsultaEstadoClave']; 
	oUrl["U-/seguridad/usuario/clave"]			= [sHostUsuarioBase + '/seguridad/usuario/clave' , 'ActualizarClaveUsuario']; 
	oUrl["U-/seguridad/usuario/clave/reset"]			= [sHostUsuarioBase + '/seguridad/usuario/clave/reset' , 'ReiniciarClaveUsuario']; 
	
	//Servicio compuesto de Usuarios 
	var sHostUsuarioConpuesto = "http://localhost:4001"; 
	oUrl["P-/seguridad/usuario"]			= [sHostUsuarioConpuesto + '/ms-com-usuario/usuario' , 'RegistrarUsuario']; 
	
	//Servicios para Productos categoria
	var sHostProductoBase  = 'http://localhost:3004';
	oUrl["G-/producto/categoria"]			= [sHostProductoBase + '/producto/categoria' , 'ConsultarProductoCategoria']; 
	oUrl["P-/producto/categoria"]			= [sHostProductoBase + '/producto/categoria' , 'RegistrarProductoCategoria']; 
	oUrl["U-/producto/categoria"]			= [sHostProductoBase + '/producto/categoria' , 'ActualizarProductoCategoria']; 
	oUrl["D-/producto/categoria"]			= [sHostProductoBase + '/producto/categoria' , 'EliminarProductoCategoria']; 

	//Servicios para Marcas
	oUrl["G-/producto/marca"]			= [sHostProductoBase + '/producto/marca' , 'ConsultarProductoMarca'];
	oUrl["P-/producto/marca"]			= [sHostProductoBase + '/producto/marca' , 'RegistrarProductoMarca']; 
	oUrl["U-/producto/marca"]			= [sHostProductoBase + '/producto/marca' , 'EditarProductoMarca']; 
	oUrl["D-/producto/marca"]			= [sHostProductoBase + '/producto/marca' , 'EliminarProductoMarca']; 
	oUrl["G-/producto/marca/categoria"]	= [sHostProductoBase + '/producto/marca/categoria' , 'ConsultarProductoMarcaCategoria']; 
	oUrl["G-/producto/marca/categoria/filtro"]	= [sHostProductoBase + '/producto/marca/categoria/filtro' , 'ConsultarProductoMarcaxCategoriaId']; 
	oUrl["P-/producto/marca/categoria"]	= [sHostProductoBase + '/producto/marca/categoria' , 'RegistrarProductoMarcaCategoria']; 
	oUrl["D-/producto/marca/categoria"]	= [sHostProductoBase + '/producto/marca/categoria' , 'EliminarProductoMarcaCategoria']; 
	
	//Servicios para Producto 
	oUrl["G-/producto"]			= [sHostProductoBase + '/producto' , 'ConsultarProducto'];
	oUrl["P-/producto"]			= [sHostProductoBase + '/producto' , 'RegistrarProducto'];
	oUrl["U-/producto"]			= [sHostProductoBase + '/producto' , 'ActualizarProducto'];
	oUrl["D-/producto"]			= [sHostProductoBase + '/producto' , 'EliminarProducto'];

	//Servicios para Producto_Imagen
	oUrl["G-/producto/imagen"]			= [sHostProductoBase + '/producto/imagen' , 'ConsultarImagenProducto']; 
	oUrl["P-/producto/imagen"]			= [sHostProductoBase + '/producto/imagen' , 'RegistrarImagenProducto']; 
	oUrl["U-/producto/imagen"]			= [sHostProductoBase + '/producto/imagen' , 'ActualizarImagenProducto']; 
	oUrl["D-/producto/imagen"]			= [sHostProductoBase + '/producto/imagen' , 'EliminarImagenProducto']; 
	
	//Servicios para Producto Inventario
	oUrl["G-/producto/inventario/disponibilidad"]	= [sHostProductoBase + '/producto/inventario/disponibilidad' , 'ConsultarProductoDisponible']; 

	//Servicios para Asignacion de caja
	var sHostAsignacionCajaBase  = 'http://localhost:3005';
	oUrl["G-/asignacioncaja/verificar"]	= [sHostAsignacionCajaBase + '/asignacioncaja/verificar' , 'VerificarAsignacionCajero']; 

	//Servicios para mantemiento de cliente
	var sHostMantClienteBase  = 'http://localhost:3007';
	oUrl["G-/cliente"]	= [sHostMantClienteBase + '/cliente' , 'consultarCliente']; 


	return oUrl;
      
};