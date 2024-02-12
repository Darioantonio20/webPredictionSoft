import ImganeLogoFooter from "../../assets/img/logoSinFondo.svg";
import IconoLogoPequeno from "../../assets/img/iconoPequenoLogo.svg";
import IconoFacebook from "../../assets/img/iconoFacebook.svg";
import IconoTiktok from "../../assets/img/iconoTikTok.svg";
import IconoPhone from "../../assets/img/iconoPhone.svg";
import IconoLetter from "../../assets/img/iconoLetter.svg";
import IconoLocation from "../../assets/img/iconoLocation.svg";
import "../../assets/style/Footer.css";


function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start colorFondo">
                <div className="container p-4 ">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div>
                                <img className="img-fluid" alt="Logo" loading="lazy" src={ImganeLogoFooter} />
                            </div>
                            <ul className="list-unstyled mt-4 mb-0">
                                <li>
                                    <h5>
                                        <a href="tel:+529613662079"><img className="img-fluid" target="_blank" loading="lazy" src={IconoPhone} alt="Icono Teléfono" /> 961 366 2079</a>
                                    </h5>
                                </li>
                                <li>
                                    <p>
                                        <a href="mailto:ventas@predictionsoft"><img className="img-fluid" loading="lazy" src={IconoLetter} alt="Icono Correo" /> ventas@predictionsoft</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="https://www.google.com.mx/maps/place/Multillantas+de+Chiapas/@16.7290886,-93.1027877,19.26z/data=!4m9!1m2!2m1!1sCalzada+Zoomat+130.+Col.+Francisco+y+Madero.+Tuxtla+Guti%C3%A9rrez.+Chiapas.!3m5!1s0x85ecd8740a049a3b:0x57a5857763c34ad9!8m2!3d16.7286371!4d-93.1026817!16s%2Fg%2F11clssr4z_?entry=ttu" target="_blank" rel="noopener noreferrer"><img className="img-fluid" loading="lazy" src={IconoLocation} alt="Icono Ubicación" /> Calzada Zoomat 130. Col. Francisco <br /> y Madero. Tuxtla Gutiérrez. Chiapas.</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">POLÍTICAS Y TÉRMINOS</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><a href="#arriba"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Términos y condiciones.</a></p>
                                </li>
                                <li>
                                    <p><a href="#arriba"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Aviso de privacidad.</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">NUESTROS <br /> SERVICIOS</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><a href="#arriba"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Asesoría de sistemas.</a></p>
                                </li>
                                <li>
                                    <p><a href="#arriba"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Desarrollo de software.</a></p>
                                </li>
                                <li>
                                    <p><a href="#arriba"><img className="img-fluid" loading="lazy" src={IconoLogoPequeno} /> Soporte técnico especializado.</a></p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mt-3">
                            <h3 className="text-uppercase mb-4">NUESTRAS REDES SOCIALES</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <p><img className="img-fluid" alt="Incono Pequeño" loading="lazy" src={IconoLogoPequeno} /> Síguenos y forma parte de la comunidad Prediction.</p>
                                </li>
                                <li className="mt-4">
                                    <p><a href="https://www.facebook.com/Software.Prediction" target="_blank"><img className="img-fluid" alt="Icono Facebook" loading="lazy" src={IconoFacebook} /></a><img className="img-fluid" alt="Icono Tiktok" loading="lazy" src={IconoTiktok} />predictionsoft</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center p-3 colorCopyRight">
                © Copyright Prediction Software Todos los derechos reservados.
            </div>
        </>
    );
}

export default Footer;