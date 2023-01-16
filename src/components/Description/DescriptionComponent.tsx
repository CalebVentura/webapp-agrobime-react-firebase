import { useEffect, useState } from 'react';
import './DescriptionComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";

const DescriptionComponent = () => {

    return (
        <div className="DescriptionComponent" id={"Description"}>
            <Row className={"RQ-justify-center"} noGutter flex>
                <Col xs={18} sm={18} md={9} other={9} className={"desc-img RQ-text-center"}>
                    <img src={data.description.img.src} alt={data.description.img.name}/>
                </Col>
                <Col xs={18} sm={18} md={9} other={9} className={"RQ-d-flex RQ-align-center"}>
                    <div className="desc-content">
                        <h2 className={"RQ-mx-2 RQ-mb-3 RQ-f-bold RQ-hover-text-theme3"}>{data.description.content.title}</h2>
                        <p className={"RQ-mx-3 RQ-f-u14-o16 RQ-hover-text-gray"}>{data.description.content.content}</p>
                        <div className={"RQ-mt-5 RQ-mx-3 RQ-text-sm-center"}>
                            <a href="" className="RQ-button RQ-background-theme3 RQ-hover-text-white RQ-hover-backgroud-button">{data.description.buttons[0].name}</a>
                            <a href="" className="RQ-button RQ-background-theme3 RQ-hover-text-white RQ-hover-backgroud-button RQ-ml-3">{data.description.buttons[1].name}</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default DescriptionComponent