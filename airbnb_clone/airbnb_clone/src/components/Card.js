import React from "react"

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} className='card--photo'/>
            <div className='card--stats'>
                <img src="./image/Star 1.png" className='card--icon' />
                <span className='gray'>{props.rating}</span> <span className='gray'>({props.reviewCount}) · {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p> 
        </div>
    )
}
