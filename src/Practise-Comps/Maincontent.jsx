import React from 'react'

const Maincontent = () => {
  return (
    <div>
        
                    {/* Favorite things */}
                    <button 
                      onClick={addFavoriteThings}
                   className='button'>Add Item</button>
                   <section aria-live='polite'>{thingsElements}</section>
        
                    {/* Toggle with state */}
                    <article className="card">
                    <img 
                    className='card-img'
                    src={avatar} 
                    alt="avatar-icon" />
                    <div className="card">
                    <button 
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button">
                        <img 
                        src={starIcon} 
                        alt="fav-icon" 
                        className="favorite" 
                        />
                    </button>
                    <h2 className="name">{contact.firstName} {contact.lastName}</h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="email">{contact.email}</p>
                    </div>
                   </article>
        
    </div>
  )
}

export default Maincontent
