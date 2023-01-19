 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {};
	
	//Servicios de AuditoriaBaseService
	var sHostApiGatewayMulticanal  = 'http://localhost:1001';
	oUrl["P-/auditoria"]					= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/auditoria' , 'RegistrarAuditoria']; 
	oUrl["G-/auditoria/aplicacion"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/auditoria/aplicacion' , 'ConsultarAuditoriaAplicacion']; 
	oUrl["G-/auditoria/aplicacion/proceso"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/auditoria/aplicacion/proceso' , 'ConsultarAuditoriaProceso']; 
	oUrl["G-/auditoria"]					= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/auditoria' , 'ConsultarAuditoria']; 
	
	//Servicios de Maesto de Configuracion 
	oUrl["P-/maestra/tabla"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla' , 'RegistrarMaestra'];
	oUrl["U-/maestra/tabla"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla' , 'ActualizarTabla'];
	oUrl["D-/maestra/tabla"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla' , 'EliminarTabla'];
	oUrl["G-/maestra/tabla"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla' , 'ConsultarTabla'];
	oUrl["P-/maestra/tabla/parametro"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla/parametro' , 'RegistrarParametro'];  
	oUrl["U-/maestra/tabla/parametro"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla/parametro' , 'ActualizarParametro'];
	oUrl["D-/maestra/tabla/parametro"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla/parametro' , 'EliminarParametro'];
	oUrl["G-/maestra/tabla/parametro"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla/parametro' , 'ConsultarParametro'];
	oUrl["G-/maestra/tabla/parametro/filtro"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/maestra/tabla/parametro/filtro' , 'ConsultarParametroxFiltro'];
	
	//Servicios de Seguridad 
	oUrl["G-/seguridad/aplicacion"]		 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/aplicacion' , 'ConsultarAplicacion'];
	oUrl["P-/seguridad/aplicacion"]		 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/aplicacion' , 'CrearAplicacion'];
	oUrl["U-/seguridad/aplicacion"]		 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/aplicacion' , 'ActualizarAplicacion']; 
	oUrl["D-/seguridad/aplicacion"]		 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/aplicacion' , 'EliminarAplicacion']; 
	oUrl["G-/seguridad/grupo"]			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupo' , 'ConsultarGrupo']; 
	oUrl["P-/seguridad/grupo"]			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupo' , 'CrearGrupo']; 
	oUrl["U-/seguridad/grupo"]			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupo' , 'ActualizarGrupo']; 
	oUrl["D-/seguridad/grupo"]			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupo' , 'EliminarGrupo']; 
	oUrl["G-/seguridad/grupoaplicacion"] = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupoaplicacion' , 'ConsultarGrupoAplicacion'];
	oUrl["P-/seguridad/grupoaplicacion"] = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupoaplicacion' , 'RegistrarGrupoAplicacion'];  
	oUrl["G-/seguridad/grupoaplicacion/faltante"] = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupoaplicacion/faltante' , 'ConsultarGrupoAplicacionFaltante']; 
	oUrl["D-/seguridad/grupoaplicacion"] = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/grupoaplicacion' , 'EliminarGrupoAplicacionAsignado'];  
	oUrl["G-/seguridad/rol"] 			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol' , 'ConsultarRoles']; 
	oUrl["P-/seguridad/rol"] 			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol' , 'RegistrarRol']; 
	oUrl["U-/seguridad/rol"] 			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol' , 'ActualizarRol']; 
	oUrl["D-/seguridad/rol"]			 = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol' , 'EliminarRol'];
	oUrl["G-/seguridad/rol/aplicacion"]  = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol/aplicacion' , 'ConsultarRolAplicacion']; 
    oUrl["G-/seguridad/rol/aplicacionsinasignar"]  = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol/aplicacionsinasignar' , 'ConsultarRolAplicacionSinAsignar']; 
	oUrl["P-/seguridad/rol/aplicacion"]  = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol/aplicacion' , 'RegistrarRolAplicacion']; 
	oUrl["D-/seguridad/rol/aplicacion"]  = [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/rol/aplicacion' , 'EliminarRolAplicacion']; 
	
	//Servicios para Usuarios 
	oUrl["G-/seguridad/usuario"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario' , 'ConsultarUsuario']; 
	oUrl["G-/seguridad/usuario/all"]		= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/all' , 'ConsultarUsuarioEmpresaAll']; 
	oUrl["G-/seguridad/usuario/rol/noasigando"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/rol/noasigando' , 'ConsultarRolUsuarioNoAsignado']; 
	oUrl["G-/seguridad/usuario/rol"]		= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/rol' , 'ConsultarRolUsuario']; 
	
	
	
	oUrl["U-/seguridad/usuario"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario' , 'ActualizarUsuario']; 
	oUrl["U-/seguridad/usuario/asignarempresa"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/asignarempresa' , 'AsignarEmpresaUsuario']; 
	oUrl["D-/seguridad/usuario"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario' , 'EliminariaUsuario']; 
	oUrl["G-/seguridad/usuario/validaestadoclave"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/validaestadoclave' , 'ValidaEstadoClave']; 
	oUrl["G-/seguridad/usuario/estadoclave"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/estadoclave' , 'ConsultaEstadoClave']; 
	oUrl["U-/seguridad/usuario/clave"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/clave' , 'ActualizarClaveUsuario']; 
	oUrl["U-/seguridad/usuario/clave/reset"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/seguridad/usuario/clave/reset' , 'ReiniciarClaveUsuario']; 
	
	
	//Servicios para Productos categoria 
	oUrl["G-/producto/categoria"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/categoria' , 'ConsultarProductoCategoria']; 
	oUrl["P-/producto/categoria"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/categoria' , 'RegistrarProductoCategoria']; 
	oUrl["U-/producto/categoria"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/categoria' , 'ActualizarProductoCategoria']; 
	oUrl["D-/producto/categoria"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/categoria' , 'EliminarProductoCategoria']; 

	//Servicios para Marcas
	oUrl["G-/producto/marca"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca' , 'ConsultarProductoMarca'];
	oUrl["P-/producto/marca"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca' , 'RegistrarProductoMarca']; 
	oUrl["U-/producto/marca"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca' , 'EditarProductoMarca']; 
	oUrl["D-/producto/marca"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca' , 'EliminarProductoMarca']; 
	oUrl["G-/producto/marca/categoria"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca/categoria' , 'ConsultarProductoMarcaCategoria']; 
	oUrl["G-/producto/marca/categoria/filtro"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca/categoria/filtro' , 'ConsultarProductoMarcaxCategoriaId']; 
	oUrl["P-/producto/marca/categoria"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca/categoria' , 'RegistrarProductoMarcaCategoria']; 
	oUrl["D-/producto/marca/categoria"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/marca/categoria' , 'EliminarProductoMarcaCategoria']; 
	
	//Servicios para Producto 
	oUrl["G-/producto"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto' , 'ConsultarProducto'];
	oUrl["P-/producto"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto' , 'RegistrarProducto'];
	oUrl["U-/producto"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto' , 'ActualizarProducto'];
	oUrl["D-/producto"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto' , 'EliminarProducto'];

	//Servicios para Producto_Imagen
	oUrl["G-/producto/imagen"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/imagen' , 'ConsultarImagenProducto']; 
	oUrl["P-/producto/imagen"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/imagen' , 'RegistrarImagenProducto']; 
	oUrl["U-/producto/imagen"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/imagen' , 'ActualizarImagenProducto']; 
	oUrl["D-/producto/imagen"]			= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/imagen' , 'EliminarImagenProducto']; 

	//Servicios para Producto Inventario
	oUrl["G-/producto/inventario/disponibilidad"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/producto/inventario/disponibilidad' , 'ConsultarProductoDisponible']; 

	//Servicios para Asignacion de caja 
	oUrl["G-/asignacioncaja/verificar"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/asignacioncaja/verificar' , 'VerificarAsignacionCajero']; 

	//Servicios para mantemiento de cliente 
	oUrl["G-/cliente"]	= [sHostApiGatewayMulticanal + '/api-gateway-multicanal/cliente' , 'consultarCliente']; 


	//Servicio compuesto de Usuarios 
	var sHostUsuarioConpuesto = "http://localhost:4001"; 
	oUrl["P-/seguridad/usuario"]			= [sHostUsuarioConpuesto + '/ms-com-usuario/usuario' , 'RegistrarUsuario']; 
		
	//Servicio compuesto de Ventas y generacion de docuemtos 
	var sHostVentaConpuesto = "http://localhost:4003"; 
	oUrl["P-/facturacion/ventarapida"]			= [sHostVentaConpuesto + '/ms-com-venta/facturacion/ventarapida' , 'FacturacionVentaRapida']; 

	//Servicio para consultar las ventas
	var sHostVenta = "http://localhost:3006";
	oUrl["G-/venta"]			= [sHostVenta + '/venta' , 'ConsultaVenta']; 

	//Servicio compuesto para reporte de ventas
	var sHostVentaReporte = "http://localhost:5003";
	oUrl["G-/consultaventacaja"]			= [sHostVentaReporte + '/ms-com-docventa/venta' , 'ConsultaReporteVenta']; 
 
	//Servicio compuesto para consuelta el detale de la empresa
	var sHostComEmpresa = "http://localhost:5004";
	oUrl["G-/configuracion/empresa"]			= [sHostComEmpresa + '/ms-com-empresa/empresa' , 'ConsultarEmpresa']; 

	return oUrl;
      
};