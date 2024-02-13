import { Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import LogoPredictionSoft from "../../assets/img/logoPredictionSoft.svg";
import "../../assets/style/NavBar.css";

function NavBar() {
    const navigate = useNavigate();
    const handleClickProximamente = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Próximamente',
        });
    };
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div id="arriba"/>
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => handleNavigation('/')}>
                        <img src={LogoPredictionSoft} className="img-fluid" loading="lazy" alt="Img Prediction Soft" width={200} height={200} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" onClick={() => handleNavigation('/')}>INICIO</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href="#nosotros">NOSOTROS</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" onClick={handleClickProximamente}>MÓDULOS ERP</a>  {/*download="imgNosotros.jpg"*/}
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href="#cotizar">COTIZAR</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" onClick={() => handleNavigation('/promociones')}>PROMOCIONES</a>
                            </li>
                            <li className="nav-item mx-2 nav-hover">
                                <a className="nav-link" href="#contacto">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;