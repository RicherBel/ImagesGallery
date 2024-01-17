import mysql from "mysql2/promise"

import {env} from "$env/dynamic/private"

//var MySQL = require('./modulos/mysql'); //Añado el archivo mysql.js presente en la carpeta módulos
//let notDeportes = await MySQL.Realizar_Query("select * from textos where categoria = 'Deporte';");

const SQL_Config_Data ={

	host:env.MYSQL_HOST,
	user:env.MYSQL_USER,
	password:env.MYSQL_PW,
	database:env.MYSQL_DB, 
	port:env.PORT_DB,
	charset: 'utf8mb4',
	ssl:{
		rejectUnauthorized:false
	}
};

export async function Realizar_Query(query){
	var String_A_Devolver;
	var connection;
	try
	{
		connection = await mysql.createConnection(SQL_Config_Data);
		String_A_Devolver = await connection.execute(query);
	}
	catch(err)
	{
		console.log(err);	
		return String_A_Devolver = [];
	}
	finally
	{
		if(connection && connection.end) connection.end();
	}
	return String_A_Devolver[0];
};