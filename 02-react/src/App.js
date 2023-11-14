import { Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Formulario from './componentes/Form/Form';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import Producto from './componentes/Productos/Productos'


function App() {
  return (    
    <> 

      <Navbar />
      <Routes>
        <Route path='/home' element= { <Home /> } />
        <Route path='/formulario' element= { <Formulario /> }/> 
        <Route path='/productos' element= { <Producto /> }/>     
      </Routes>
    </>
  );
}

export default App;
