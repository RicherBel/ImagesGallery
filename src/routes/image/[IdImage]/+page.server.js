import {Realizar_Query} from "$lib/server/mysql"
import {error}  from "@sveltejs/kit"

const ErrorMsg = {
    error1: "Campo incorrecto",
    error2: "No se ha enontrado nada"
};


export async function load({params}) { 

    if(isNaN(params.IdImage)) throw error (404,{message:ErrorMsg.error1});

    async function GetImage(id) {        
        if(isNaN(id)) throw redirect(404,"/") ; 

        let IdImageawait = await Realizar_Query(`select * from notas where id = ${id};`);

        // console.log("IdImageawait = ",IdImageawait);

        if(IdImageawait.length == 0) throw error (404,{message:ErrorMsg.error2});

        return IdImageawait;  
    };
    
    return {
        Product:GetImage(params.IdImage)
    };
};

