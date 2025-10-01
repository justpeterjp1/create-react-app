import React from 'react'

const Contact = ({img, name, phone, email}) => {
  return (
    <div className='contacts'>
      <article className='contact-card'>
        <img src={img} alt="profile" className='entry-img' />
        <h3 className='contact-name'>{name}</h3>
        <p className='contact-phone'>{phone}</p>
        <p className='contact-email'>{email}</p>
       
      </article>

    </div>
  )
}

export default Contact