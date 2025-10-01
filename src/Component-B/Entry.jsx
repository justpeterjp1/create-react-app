
const ninjaTurtles = [ <h2>Donatello</h2>, <h2>Leonardo</h2>, <h2>Michelangelo</h2>, <h2>Raphael</h2> ]

const Entry = (props) => {
  return (
    <section className='entry'>
      <img
        src={props.img.src} alt={props.img.alt}
        className='entry-img' />
      <div className="entry-details">
        <div className='location'>
          <h4>{props.location}</h4>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="entry-text">
          <h2>{props.title}</h2>
          <h4>{props.startDate} - {props.endDate}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Entry