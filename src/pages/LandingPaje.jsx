import React, { useEffect, useState } from 'react';
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
import "../assets/style/LandingPage.css";
import Card from '../components/atoms/Card';

function LandingPage() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
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
            <NavBar/>
            <Carrousel/>
            <CircleCard/>
            <PorQuePrediction/>
            <MomentoERP/>
            <ImplementacionPrediction/>
            <Nosotros/>
            <Beneficios/>
            <PruebaDeSistema/>
            <VideoPrediction/>
            <Card/>
            <ContactUs/>
            <Footer/>
            {showScrollButton && (
                <button className="scroll-button" onClick={scrollToTop}>
                    /\
                </button>
            )}
        </>
     );
}

export default LandingPage;