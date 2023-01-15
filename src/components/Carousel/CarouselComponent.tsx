import { useEffect, useState } from 'react';
import './CarouselComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";

const CarouselComponent = () => {

    return (
        <div className="CarouselComponent RQ-text-center">
            <h2 className={"RQ-f-u24-o40"}>{data.carousel.title}</h2>
            <p className={"RQ-f-u14-o16"}>{data.carousel.comment}</p>
            <div className="carousel-list">
                {data.carousel.list.map((item, index) =>
                    <img
                        src={item.itemUrl}
                        alt={item.name}
                    />
                )}
            </div>
        </div>
    )
}
export default CarouselComponent