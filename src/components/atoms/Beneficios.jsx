import Img4Section2 from "../../assets/img/img4Section2.svg";

function Beneficios() {
    return (
        <>
            <div className="bg-info pt-2 pb-2 mt-5 mb-5">
                <h1 className="text-center text-light animate__animated animate__bounceInDown">BENEFICIOS</h1>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-3 mb-3">
                        <img src={Img4Section2} loading="lazy" className="img-fluid max-width-img" alt="Imagen 3 Section 2" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Beneficios;