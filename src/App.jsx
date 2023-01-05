//Pagina princial.

//Importar Componentes
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListaCartas from "./components/ListaCartas"





function App() {

  //JavaScript

  const [cartas, setCartas] = useState([]);
  const [editCarta, setEditCarta] = useState({});

  useEffect(() => {
    const ObtenerLS = () =>{
      const cartasLS = JSON.parse(localStorage.getItem("cartas")) ?? [];
      setCartas(cartasLS)
    }
    ObtenerLS();
    
  }, [])
  

  useEffect(() => {
    localStorage.setItem("cartas", JSON.stringify(cartas));

  }, [cartas])
  

  const eliminarCarta = (id) => {
    const cartasActualizadas = cartas.filter( editCarta => editCarta.id !== id);
    setCartas(cartasActualizadas)

  }





  //HTML
  return (
    <>
      <div className="">
        <Header />
      
        <div className=" mt-10  " >
          <Formulario 
          cartas= {cartas}
          setCartas={setCartas}
          setEditCarta={setEditCarta}
          editCarta={editCarta}
          eliminarCarta={eliminarCarta}
          />




        </div>
      </div>
      

    </>
  )
}



export default App
