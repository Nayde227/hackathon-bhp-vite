import '../css/card.css';

export default function Card({ operario }) {

  // console.log(operario)

  const nombre = operario.operAlineado
  const busNumber = operario.bus;
  const ubicacion = operario.ubicacion;

  return <article className="cardClass">
    <h3 id="operarioId">{nombre}</h3>
    <div id='locationData'>
      <h4 id="busId">{busNumber}</h4>
      <h4 id="locationId">{ubicacion}</h4>
    </div>
  </article>
}



