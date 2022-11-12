import React, { useState } from 'react';
import "./Banner.css"
import { carusel } from "../../static/static"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

function Banner() {
    let [imageId, setImageId] = useState(0)
    if (imageId === 4) {
        imageId = 0
    }
    else if (imageId === -1) {
        imageId = 3
    }
    return <div className='banner'>
        <img className='carusel__img' src={carusel[imageId].img} alt="" />
        <button className='carusel__btn__inc' onClick={() => setImageId(imageId + 1)}><BsChevronRight /></button>
        <button className='carusel__btn__dic' onClick={() => setImageId(imageId - 1)}><BsChevronLeft /></button>
    </div>;
}

export default Banner;
