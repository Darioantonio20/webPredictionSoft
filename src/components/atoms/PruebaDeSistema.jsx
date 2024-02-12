import React from 'react';
import Swal from 'sweetalert2';

function PruebaDeSistema() {
    const handleClick = () => {
        Swal.fire({
            icon: 'info',
            title: 'Por favor contáctanos',
            text: 'Por favor llena el formulario de contacto en la parte inferior de la página.',
        }).then(() => {
            const contactoElement = document.getElementById('contacto');
            if (contactoElement) {
                contactoElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    return (
        <>
            <div id="cotizar" />
            <div style={{backgroundColor: '#244464'}} className="text-center mt-5 mb-5">
                <h1 style={{color: '#0e95c1'}}>PRUEBA NUESTRO SISTEMA COMO PRUEBA DEMO</h1>
                <h3 style={{color: '#eaf0f3'}}>Ingrese su correo eléctronico si deseas recibir una demostración</h3>
                <h3 style={{color: '#eaf0f3'}}>TOTALMENTE GRATIS</h3>
                <div className="row justify-content-center m-0 p-0">
                    <div className="col-12 col-md-10 d-sm-flex d-block align-items-end justify-content-center m-0 p-0 mb-4">
                        <div className="form-outline mb-2 mb-sm-0 m-0 p-0 flex-grow-1 mr-2">
                            <input type="text" id="form3Example2" className="form-control text-center m-0 p-0 mb-3" style={{width: '100%'}} />
                        </div>
                        <div className='m-0 p-0'>
                            <button className="button text-bg-dark" onClick={handleClick}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PruebaDeSistema;

