import React from "react";

function PorQuePrediction() {
    const cards = [
        {
          title: 'COMPRAS E INVENTARIOS',
          description: 'Facilita la integración de tus procesos de ventas, compras, inventarios, multialmacenes, cuentas por cobrar, cuentas por pagar en un ambiente multiusuario.'
        },
        {
          title: 'ALTA DISPONIBILIDAD',
          description: 'Operatividad continúa con nuestro sistema 24X7X365 al estar operando en la nube olvídate de tiempos improductivos por caídas de sistemas. ALL Time Prediction SOFTware MR. Conecta desde MAC, Linux, Windows, Tablet Android, etc.'
        },
        {
            title: 'FÁCIL INTEGRACIÓN CON BI',
            description: 'Conecta con potentes motores de Bussines Inteligence en tiempo real gracias a su respaldo en línea a base de datos propios de terceros proveedores de BI. Obtén el máximo beneficio de información en línea y confiable para toma de decisiones para gerentes/directores.'
          },
          {
            title: 'FACTURACIÓN ELECTRÓNICA 4.0',
            description: 'Facturas, complementos de pago, notas de crédito, carta porte 3.0 todo en v4.0 timbrados con Sifei, un PAC autorizado por el SAT.'
          },
          {
            title: 'ESTABILIDAD, CONSISTENCIA, TRANSACCIONAL, ESCALABLE',
            description: 'Sistema super estable libre de errores de programación, no se pierden los datos gracias a nuestra base de datos de alta gama 100% transaccional y gratuita, escalable a futuros cambios que demande el entorno empresarial y tecnológico.'
          },
          {
            title: 'RESPALDO EN LÍNEA',
            description: 'Olvídate por hacer respaldos diarios/semanales/mensuales Prediction SOFTware MR respalda a una base de datos en paralelo a otra nube en tiempo real sin afectar tu performance de velocidad delegando como un proceso alterno ajeno al núcleo del sistema, puedes estar tranquilo el sistema lo hará por ti por cualquier contingencia tu información está en modo espejo.'
          },
      ];
      
  return (
    <>
        <div className="bg-info p-0 pt-2 pb-2 mt-1 mb-5">
            <h1 className="text-center text-light animate__animated animate__bounceInDown">¿POR QUÉ ELEGIR PREDICTION SOFTWARE?</h1>
        </div>
        <div className="row mb-5 p-0 m-5">
            {cards.map((card, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center">
                    <div className="card text-center hoverable-card" onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} style={{ transition: 'transform 0.3s', borderRadius: '1.2rem', backgroundColor: '#f2f2f2', width: '80%', height: 'auto' }}>
                        <div className="container">
                            <p className="card__title mb-4 mt-3" style={{ textAlign: 'center' }}>
                                <b>{card.title}</b>
                            </p>
                            <p className="card__description" style={{ textAlign: 'justify', color: '#777'}}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  );
}

export default PorQuePrediction;
