import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import NavBar from "../components/atoms/NavBar";
import Carrousel from "../components/atoms/Carrousel";
import CircleCard from "../components/atoms/CircleCard";
import PorQuePrediction from "../components/atoms/PorQuePrediction";
import MomentoERP from "../components/atoms/MomentoERP";
import ImplementacionPrediction from "../components/atoms/ImplementacionPrediction";
import Nosotros from "../components/atoms/Nosotros";
import Beneficios from "../components/atoms/Beneficios";
import Footer from "../components/atoms/Footer";
import ContactUs from "../components/atoms/ContactUs";
import PruebaDeSistema from "../components/atoms/PruebaDeSistema";
import VideoPrediction from '../components/atoms/VideoPrediction';
import Card from '../components/atoms/Card';
import "../assets/style/LandingPage.css";
import 'aos/dist/aos.css';

function LandingPage() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return ( 
        <>
            <div data-aos="fade-up">
                <NavBar/>
            </div>
            <div data-aos="fade-up">
                <Carrousel/>
            </div>
            <div data-aos="fade-up">
                <CircleCard/>
            </div>
            <div data-aos="fade-up">
                <PorQuePrediction/>
            </div>
            <div data-aos="fade-up">
                <MomentoERP/>
            </div>
            <div data-aos="fade-up">
                <ImplementacionPrediction/>
            </div>
            <div data-aos="fade-up">
                <Nosotros/>
            </div>
            <div data-aos="fade-up">
                <Beneficios/>
            </div>
            <div data-aos="fade-up">
                <PruebaDeSistema/>
            </div>
            <div data-aos="fade-up">
                <VideoPrediction/>
            </div>
            <div data-aos="fade-up">
                <Card/>
            </div>
            <div data-aos="fade-up">
                <ContactUs/>
            </div>
            <div data-aos="fade-up">
                <Footer/>
            </div>
            {showScrollButton && (
                <button className="scroll-button" onClick={scrollToTop}>
                    /\
                </button>
            )}
        </>
     );
}

export default LandingPage;