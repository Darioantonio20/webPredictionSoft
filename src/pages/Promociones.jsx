import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoPredictionSoft from "../assets/img/logoPredictionSoft.svg";
import ImgPlanAnual from "../../src/assets/img/planAnual.jpeg";
import ImgPlanMensual from "../../src/assets/img/planMensual.jpeg";
import Footer from "../components/atoms/Footer";
import "../assets/style/NavBar.css";

function Promociones() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    const handleClickProximamente = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Próximamente',
        });
    };

    return ( 
        <>
            <nav className="navbar navbar-expand-md navbar-light" data-aos="fade-up">
                <div id="arriba" />
                <div className="container-fluid">
                    <Link to="/"><a className="navbar-brand" href="#">
                        <img src={LogoPredictionSoft} className="img-fluid" loading="lazy" alt="Img Prediction Soft" width={200} height={200} />
                    </a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="nav nav-underline">
                            <li className="nav-item mx-2">
                                <Link to="/"><a className="nav-link" href="#">INICIO</a></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/"><a className="nav-link" href="#nosotros">NOSOTROS</a></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" onClick={handleClickProximamente}>MÓDULOS ERP</a>  {/*download="imgNosotros.jpg"*/}
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/"><a className="nav-link" href="#cotizar">COTIZAR</a></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/promociones"><a className="nav-link">PROMOCIONES</a></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/"><a className="nav-link" href="#contacto">CONTACTO</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-5 mb-5 text-center">
                        <img src={ImgPlanAnual} loading="lazy" className="img-fluid" alt="Imagen 1 Section 2" style={{ width: "60%" }} />
                    </div>
                </div>
            </div>
            <div className="container-fluid" data-aos="fade-up">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-5 mb-5 text-center">
                        <img src={ImgPlanMensual} loading="lazy" className="img-fluid" alt="Imagen 1 Section 2" style={{ width: "60%" }}/>
                    </div>
                </div>
            </div>
            <Footer data-aos="fade-up"/>
        </>
     );
}

export default Promociones;