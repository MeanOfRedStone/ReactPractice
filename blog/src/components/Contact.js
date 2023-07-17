import React from "react"


export default function Contact(props){
    return(
        <div className='contact-card'>
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className='info-group'>
                <img src="./image/phone_icon.png" alt="phone_icon" />
                <p>{props.phone}</p>
            </div>
            <div className='info-group'>
                <img src="./image/mail_icon.png" alt="email_icon" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}
