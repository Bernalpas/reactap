
import React from 'react';
import { Link } from 'react-router-dom';



function sumar(a, b) {
    return a + b; 
}


const Navbar = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link to= '/' class= "m-4">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to= '/home' class= "m-4">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to= '/formulario' class= "m-4">Formulario</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/productos' class= "m-4">Productos</Link>
                            </li>
                            <li class="nav-item">
                                {sumar(50, 30)}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <a></a>
        </React.Fragment>

    );
}


export default Navbar;