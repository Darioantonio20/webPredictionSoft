import NavBar from "../components/atoms/NavBar";
import Carrousel from "../components/atoms/Carrousel";
import CircleCard from "../components/atoms/CircleCard";
import PorQuePrediction from "../components/atoms/PorQuePrediction";
import MomentoERP from "../components/atoms/MomentoERP";
import ImplementacionPrediction from "../components/atoms/ImplementacionPrediction";

function LandingPage() {
    return ( 
        <>
            <NavBar/>
            <Carrousel/>
            <CircleCard/>
            <PorQuePrediction/>
            <MomentoERP/>
            <ImplementacionPrediction/>
        </>
     );
}

export default LandingPage;