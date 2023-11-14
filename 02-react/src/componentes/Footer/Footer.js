




function imprimirNombre() {
    console.log('Hola Mundo');
    alert('Hola Mundo');
}





function Footer() {
    return (

        <>


            <button onClick={imprimirNombre} type="button" class="btn btn-danger">Imprimir Nombre</button>

        


        </>
    );
}

export default Footer;