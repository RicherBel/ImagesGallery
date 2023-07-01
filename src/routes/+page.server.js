import {Realizar_Query} from "$lib/server/mysql"

export async function load(event) { //{fetch}
    async function GetAllImage() {       
        let IdImageawait = await Realizar_Query(`select * from paints ORDER BY id DESC;`); 
        // IdImageawait = []
        return IdImageawait;  
    };
    
    return {
        Product:GetAllImage()
    };
};