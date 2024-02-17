import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "../assets/style/FormLinkRestringido.css";
import "../assets/style/Button.css";

function FormLinkRestringido() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        rfc: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        rfc: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        const newErrors = { ...formErrors };

        for (const key in formData) {
            if (formData[key] === '') {
                isValid = false;
                newErrors[key] = `Por favor ingresa tu ${key}.`;
            } else {
                newErrors[key] = '';
            }
        }

        if (!isValid) {
            setFormErrors(newErrors);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor llena todos los campos del formulario!',
            });
        } else {
            fetch('http://localhost:8080/api/user/nuevoFormulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formData.name,
                    email: formData.email,
                    telefono: formData.phone,
                    rfc: formData.rfc, 
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    Swal.fire(
                        '¡Datos verificados!',
                        'Tus datos han sido enviados.',
                        'success'
                    ).then(() => {
                        Swal.fire({
                            title: '¡Muy pronto nos comunicaremos contigo!',
                            showClass: 'animate__animated animate__fadeInUp animate__faster',
                            hideClass: 'animate__animated animate__fadeOutDown animate__faster',
                        });
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Hubo un error al enviar tus datos!',
                    });
                });
        }
    };

    return (
        <>
            <div id="contacto" />
            <div className="bg-info mb-3 p-1 text-center">
                <h1 className="mb-3 text-white">Registro para nuevos usuarios</h1>
            </div>
            <div className="col-12 col-lg-6 notifications-container">
                <div className="alert">
                    <div className="flex">
                        <div className="alert-prompt-wrap">
                            <h5 className="text-sm text-yellow-700" style={{ textAlign: "justify" }}>
                                <h3 className="alert-link text-center mb-5">
                                    AVISO DE PRIVACIDAD
                                </h3>
                                <strong>PredictionSoft</strong>
                                ® es el responsable del tratamiento de los datos personales que nos proporcione.<br/><br/>
                                Los datos personales recabados serán utilizados para las siguientes finalidades: <b>Otorgarle los accesos y registro para el
                                uso demo del sistema PredictionSoft</b>® Usted podrá consultar el aviso de privacidad en: <a href='https://predictionsoft.com.mx/' target='blank'>www.predictionsoft.com.mx</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {/* Form section */}
                    <div className="col-md-6 mt-5 m-3">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-12 mt-3 mb-4">
                                {/* Name */}
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-control ${formErrors.name && 'is-invalid'}`} placeholder="Nombre" required/>
                                {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                            </div>
                            <div className="col-12 mt-3 mb-4">
                                {/* Email */}
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-control ${formErrors.email && 'is-invalid'}`} placeholder="Correo electrónico." required/>
                                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                            </div>
                            <div className="col-12 mt-3 mb-4">
                                {/* Phone */}
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`form-control ${formErrors.phone && 'is-invalid'}`} placeholder="Número de teléfono." required/>
                                {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                            </div>
                            <div className="col-12 mt-3 mb-4">
                                {/* rfc */}
                                <input type="text" name="rfc" value={formData.rfc} onChange={handleChange} className={`form-control ${formErrors.rfc && 'is-invalid'}`} id="rfc" placeholder="RFC" required></input>
                                {formErrors.rfc && <div className="invalid-feedback">{formErrors.rfc}</div>}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn button text-bg-blue">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormLinkRestringido;