import ImgMomentoERP from "../../assets/img/imgMomentosERP.png";

function MomentoERP() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <img src={ImgMomentoERP} loading="lazy" className="img-fluid" alt="Imagen Nosotros" />
        </div>
      </div>
    </div>
  );
}

export default MomentoERP;