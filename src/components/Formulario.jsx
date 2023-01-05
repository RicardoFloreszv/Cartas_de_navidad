import ListaCartas from "./ListaCartas";
import { useState, useEffect } from "react";
import Error from "./Error";



function Formulario({cartas, setCartas, setEditCarta, editCarta, eliminarCarta}){
    //JS
    const [nombre, setNombre] = useState("");
    const [titulo, setTitulo] = useState("");
    const [comentario, setComentario] = useState("");
    const [error, setError] = useState(false);

    //UseEffect
    useEffect(() => {
        if(Object.keys(editCarta).length > 0){

            setNombre(editCarta.nombre)
            setTitulo(editCarta.titulo)
            setComentario(editCarta.comentario)
        }
       
    }, [editCarta])
    
    
    
    //Validacion de Formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Validacion
        if([nombre, titulo, comentario].includes("")){
            

            setError(true)
            return
        }

        setError(false)

        //Creando el Objeto de setCartas. Aqui vamos a generar un objeto por cada que el usuario cree una carta.
        const objetoCartas ={
            nombre, 
            titulo, 
            comentario
        }

        if(editCarta.id){
            //Editando el Registro
            objetoCartas.id = editCarta.id
            const cartaActualizada = cartas.map( cartaState => cartaState.id === editCarta.id ? objetoCartas : cartaState)

            setCartas(cartaActualizada)
            setEditCarta({})

        }else{
            //Nuevo registro
            objetoCartas.id = generarID();
            setCartas([...cartas, objetoCartas]);

        }

        
        

        setNombre("");
        setTitulo("");
        setComentario("")
    }

    const generarID = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }



    //HTML
    return(
        <>
        <div className="mx-5 md:mx-0">
            
        {error && <Error
                    mensaje="Todos los campos son obligatorios" />}

            <div className="   w-full lg:w-2/3 xl:w-3/4 2xl:w-1/2  mx-auto bg-cartas border border-black rounded-lg">

                <form className="p-5" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-5 mx-auto ">
                        <div className="flex flex-col xl:mx-5 md:my-5 order-2 md:order-1">
                                <label htmlFor="Nombre" className="my-3 font-bold">De parte de:</label>
                                <input id="nombre" type="text" placeholder="Escribe tu nombre" className="w-full p-3 rounded-lg"
                                value={nombre}
                                onChange = {(e) => setNombre(e.target.value)} />

                                <label htmlFor="Titulo" className="my-3 font-bold">Para:</label>
                                <input id="titulo" type="text" placeholder="Escribe un titulo" className="w-full p-3 rounded-lg"
                                value={titulo}
                                onChange = {(e) => setTitulo(e.target.value)} />

                                <input id="enviar" type="submit" className="m-5 bg-white mx-auto px-4 py-2 rounded-lg hover:bg-pink-300 cursor-pointer" 
                                       value={editCarta.id ? "Confirmar la edición" : "Agregar carta"}  />
                        </div>

                        <div className="md:mt-4 order-1 md:order-2">
                            <textarea  id="comentario" type="text" placeholder="Escribe tus pensamientos" rows="10" cols="70"  
                            className="w-full p-4 rounded-lg"
                            value={comentario}
                            onChange = { (e) => setComentario(e.target.value)} />
                        </div>

                    </div>

                    
                    {cartas && cartas.length ? (

                        <h1 className="font-bold pb-10 ml-5 text-center md:text-left">Lista de Cartas</h1>
                    ): (
                        <h1 className="font-bold pb-10 ml-5 text-center md:text-left">Crea tu primer carta, aqui se guardaran.</h1>
                    )}
                    



                    <div className="sm:px-5   ">
                        <div className="grid      sm:grid-cols-2   md:grid-cols-2   lg:grid-cols-2    xl:grid-cols-2   2xl:grid-cols-3    "> 

                        

                        {cartas.map( datosCartas => (
                                <ListaCartas 
                                    key={datosCartas.id}
                                    datosCartas={datosCartas}
                                    setEditCarta = {setEditCarta}
                                    eliminarCarta= {eliminarCarta}
                                />  
                            )
                         ) }                        


                        
                        </div>

                    </div>  
    
                </form>


            </div>
        </div>
        
        
        
        
        
        </>

    )
}









export default Formulario;
