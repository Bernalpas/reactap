import logo from '../../assets/logo.svg';
import '../../css/App.css';

function imprimirNombre() {
    console.log('Hola Mundo');
    alert('Hola Mundo');
}

const Home = () => {

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>

                    <button onClick={imprimirNombre} type="button" class="btn btn-success">Imprimir Nombre</button>
                </header>
            </div>
        </>
    )

}

export default Home;