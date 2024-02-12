import React, { useState, useEffect } from 'react';
import IconoLocation from "../../assets/img/iconoLocation.svg";
import IconoPhone from "../../assets/img/iconoPhone.svg";
import IconoLetter from "../../assets/img/iconoLetter.svg";
import Swal from 'sweetalert2';
import "../../assets/style/Button.css";

function ContactUs() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5fea4770df060f156a914ea6/1eqlie40g';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
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
      fetch('https://backendpredictionsoft-production.up.railway.app/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.name,
          titulo: formData.subject,
          telefono: formData.phone,
          mensaje: formData.message,
          email: formData.email,
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
      <div className="bg-info mt-2 mb-2 text-center">
        <h1 className="mb-3 text-white">INICIA TU COTIZACIÓN AQUÍ</h1>
        <h3 className="text-light">
          Déjanos tus datos y nos pondremos en contacto a la brevedad.
        </h3>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 mb-5 mt-5">
            {/* Location */}
            <div className="row justify-content-center">
              <div className="col-1 mt-5 text-end">
                <a href="https://www.google.com.mx/maps/place/Multillantas+de+Chiapas/@16.7290886,-93.1027877,19.26z/data=!4m9!1m2!2m1!1sCalzada+Zoomat+130.+Col.+Francisco+y+Madero.+Tuxtla+Guti%C3%A9rrez.+Chiapas.!3m5!1s0x85ecd8740a049a3b:0x57a5857763c34ad9!8m2!3d16.7286371!4d-93.1026817!16s%2Fg%2F11clssr4z_?entry=ttu" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid" src={IconoLocation} alt="Location" />
                </a>
              </div>
              <div className="col-5">
                <h2>UBICACIÓN:</h2>
                <p>
                  <a href="https://www.google.com.mx/maps/place/Multillantas+de+Chiapas/@16.7290886,-93.1027877,19.26z/data=!4m9!1m2!2m1!1sCalzada+Zoomat+130.+Col.+Francisco+y+Madero.+Tuxtla+Guti%C3%A9rrez.+Chiapas.!3m5!1s0x85ecd8740a049a3b:0x57a5857763c34ad9!8m2!3d16.7286371!4d-93.1026817!16s%2Fg%2F11clssr4z_?entry=ttu" target="_blank" rel="noopener noreferrer">
                    Calzada Zoomat 130. Col. Francisco <br />y Madero. Tuxtla Gutiérrez. Chiapas.
                  </a>
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="row justify-content-center">
              <div className="col-1 mt-5 text-end">
                <a href="mailto:ventas@predictionsoft">
                  <img className="img-fluid" src={IconoLetter} alt="Email" />
                </a>
              </div>
              <div className="col-5">
                <h2>EMAIL:</h2>
                <a href="mailto:ventas@predictionsoft">
                  <p>ventas@predictionsoft</p>
                </a>
              </div>
            </div>
            {/* WhatsApp */}
            <div className="row justify-content-center">
              <div className="col-1 mt-5 text-end">
                <a href="tel:+529613662079">
                  <img className="img-fluid" src={IconoPhone} alt="WhatsApp" />
                </a>
              </div>
              <div className="col-5">
                <h2>WHATSAPP:</h2>
                <a href="tel:+529613662079">
                  <p>961 366 2079</p>
                </a>
              </div>
            </div>
          </div>
          {/* Form section */}
          <div className="col-md-6 m-3">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                {/* Name */}
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-control ${formErrors.name && 'is-invalid'}`} placeholder="Tu nombre." required/>
                {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
              </div>
              <div className="col-md-6">
                {/* Email */}
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-control ${formErrors.email && 'is-invalid'}`} placeholder="Email." required/>
                {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
              </div>
              <div className="col-md-6">
                {/* Subject */}
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={`form-control ${formErrors.subject && 'is-invalid'}`} placeholder="Asunto." required/>
                {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
              </div>
              <div className="col-md-6">
                {/* Phone */}
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`form-control ${formErrors.phone && 'is-invalid'}`} placeholder="Teléfono." required/>
                {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
              </div>
              <div className="col-12 mt-4">
                {/* Message */}
                <textarea className={`form-control ${formErrors.message && 'is-invalid'}`} id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Mensaje." required></textarea>
                {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
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

export default ContactUs;
