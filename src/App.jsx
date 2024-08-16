import { Routes , Route, useLocation} from 'react-router-dom'
import { useState } from 'react'

import { Header } from './componentes/Header.jsx'
import { Footer } from './componentes/Footer.jsx'

import serviciosImg from './assets/menu/servicios.svg'
import productosImg from './assets/menu/productos.svg'

function App() {
  //Shopping Cart states
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  //Login states
  const [loginAdmin, setLoginAdmin] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  let location=useLocation();
  let rutaHeader, rutaFooter=null;

  //Show header and footer only when needed
  if (location.pathname!='/login' & location.pathname!='/carrito' & !/admin/.test(location.pathname) & location.pathname!='/register'){
    rutaHeader=comprobarRuta(countProducts, loggedIn, setLoggedIn);
    rutaFooter=<Footer />
  }

  return (
    <>
      {rutaHeader}
      
      {rutaFooter}
    </>
  )
  
}
  


// Makes if is on products section, the icon and text of first button is Services, else the icon and text was Products.
  const comprobarRuta = (countProducts, loggedIn, setLoggedIn) =>{
  if (location.pathname=="/"){
      return <Header 
      ruta="/servicios" 
      image={serviciosImg} 
      nombre="Servicios" 
      countProducts={countProducts} 
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn} />
  }else{
    return <Header 
    ruta="/" 
    image={productosImg} 
    nombre="Productos" 
    countProducts={countProducts}
    loggedIn={loggedIn}
    setLoggedIn={setLoggedIn} />
  }
}
export default App
