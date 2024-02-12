import ImgNosotros from "../../assets/img/imgNosotros.jpg";

function Nosotros() {
    return (
        <>
            <div id="nosotros" />
            <div className="bg-info pt-2 pb-2">
                <h1 className="text-center text-light animate__animated animate__bounceInDown">NOSOTROS</h1>
            </div>
            <div className="container-fluid mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center d-flex justify-content-center align-items-center">
                        <img src={ImgNosotros} loading="lazy" className="img-fluid" alt="Imagen Nosotros" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nosotros;