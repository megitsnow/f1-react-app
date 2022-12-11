import {React, useState} from 'react'
import './Carousel.css'
import { images } from "./CarouselData.js";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function Carousel() {
    const [currentImg, setCurrentImg] = useState(0);
    return (
        <div className = "carousel">
            <div className = "carouselInner" style = {{backgroundImage: `url(${images[currentImg].img})`}}>
            <div className = "left" onClick = {()=>{
                currentImg > 0 && setCurrentImg(currentImg-1)
            }}>
                <ArrowBackIosIcon/>
            </div>
            <div className = "center"></div>
                <h1>{images[currentImg].title}</h1>
                <h1>{images[currentImg].subtitle}</h1>
            </div>
            <div className = "right" onClick = {()=>{
                currentImg < images.length - 1 && setCurrentImg(currentImg+1)
            }}>
                <ArrowForwardIosIcon/>
            </div>

        </div>
    )
}

export default Carousel;