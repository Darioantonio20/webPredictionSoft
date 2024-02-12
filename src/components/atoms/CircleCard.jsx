import ImgSection2 from "../../assets/img/imgHeroPrediction.png";

function CircleCard() {
    return (
        <>
           <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-5 mb-5">
                        <img src={ImgSection2} loading="lazy" className="img-fluid" alt="Imagen 1 Section 2"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CircleCard;