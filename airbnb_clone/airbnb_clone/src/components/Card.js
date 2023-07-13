import React from "react"
import image12 from "../image/image 12.png";
import star from "../image/Star 1.png";


// Challenge: Build the Card component
// For now, hard-code in the data (like 
// the rating, title, price, etc.)

// Notes:
// - Only render 1 instance (I already did this for you)
// - The star icon and photo (katie-zaferes.png) are in the images 
//   folder for your use
// - Make sure to include:
//     - image
//     - star icon (star.png), rating, and review count
//     - title
//     - cost/person
// - The main purpose of this challenge is to show you where our limitations
//   currently are, so don't worry about the fact that you're hard-coding all
//   this data into the component.


export default function Card() {
    return (
        <section className='card'>
            <img src={image12} className='card--photo'/>
            <div>
                <div>
                    <img src={star} className='card--icon' />
                    <span>5.0</span> <span>(6) · USA</span>
                </div>
                <div>Life lessons with Katie Zaferes</div>
            </div>
        </section>
    )
}