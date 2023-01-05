import { useEffect } from "react"


function ListaCartas({datosCartas, setEditCarta, eliminarCarta}){

    //Distroctiorin de datosCartas para no tener que colocar en {datosCartas.nombre} en el HTML, solo colocariamos {nombre}
    const {nombre, titulo, comentario, id} = datosCartas

    const handleEliminar = ( ) => {
        const respuesta = confirm("Deseas eliminar esta carta?");

        if(respuesta){
            eliminarCarta(id)
        }
    }

    return(

        <>
        <div>
            <div className="bg-white m-2 borde p-3 rounded-lg ">
                <p>
                    {comentario}
                </p>   
                <p className="bg-blue-300 mt-4 p-2 rounded-md px-4 flex justify-between font-semibold "><span className="font-medium">Para: {titulo}</span> -{nombre}</p>       


                <div></div>
            </div>
            <div className="flex justify-center mb-5 ">

                <button type="button" className=" m-2 p-2 bg-green-200 w-full border rounded-md"
                onClick={ () => setEditCarta(datosCartas) }> Editar</button>

                <button type="button" className=" m-2 p-2 bg-red-300 w-full border rounded-md"
                onClick={ handleEliminar}> Eliminar</button>      
                          
            </div>


        </div>
        </>
    )
    
        //handleEliminar puesto asi en el onCLick, sin los () de la funcion, significa que esperara a que se mande llamar osea que hasta que se le de el click funcionara. que es lo que queremos, que al dar click en eliminar se mande a llamar la funcion

  
}




export default ListaCartas;
