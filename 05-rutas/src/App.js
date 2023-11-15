import { Routes, Route } from 'react-router-dom'
import React from './componentes/React.jsx'
import Navegacion from './componentes/Navegacion.jsx'
import ImagenesWeb from './componentes/Imagenes.jsx';



function App() {
  return (
    <>

      <Navegacion />

      <Routes>
        <Route path='/react' element= { <React /> } />
        <Route path='/imagenes' element= { <ImagenesWeb /> }/>
        
      </Routes>

      
    
    </>
  );
}

export default App;
