import React from "react"


export default function Contact({img, name, phone, email}){
    return(
        <div className='contact-card'>
            <img src={img}/>
            <h3>{name}</h3>
            <div className='info-group'>
                <img src="./image/phone_icon.png" alt="phone_icon" />
                <p>{phone}</p>
            </div>
            <div className='info-group'>
                <img src="./image/mail_icon.png" alt="email_icon" />
                <p>{email}</p>
            </div>
        </div>
    )
}