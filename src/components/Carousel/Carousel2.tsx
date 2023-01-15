import { useEffect, useState } from 'react';
import './CarouselComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";

const Carousel2 = () => {

    const data = ['1', '2', '3', '4']
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselInfiniteScroll = () => {
        if(currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
        //clean up function
        return () => clearInterval(interval)
    })

    return (
        <div className="Carousel2Component">
            <div className="carousel2-container">
                {data.map((item, index) => {
                    return <h1
                        className="carousel2-itemx"
                        style={{transform: `translate(-${currentIndex * 100}%)`}}
                        key={index}
                    >{item}</h1>
                })}
            </div>
        </div>
    )
}
export default Carousel2