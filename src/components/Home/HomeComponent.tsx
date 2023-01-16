import './HomeComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";
import Typewriter from 'typewriter-effect';

const HomeComponent = () => {
    return (
        <div className="HomeComponent" id={"Home"}>
            <Row className={""} noGutter flex>
                <Col xs={18} sm={18} md={9} other={7} className={"home-content RQ-d-flex RQ-align-center RQ-text-center"}>
                    <div className={"RQ-mx-4"}>
                        <div className="type-writer RQ-text-center">
                            <Typewriter
                                options={{
                                    strings: ['<h2 class="RQ-f-u24-i28-o40 RQ-f-bold">Innovamos en el monitoreo de cultivos agrícolas.</h2>', '<h2 class="RQ-f-u24-i28-o40 RQ-f-bold">Para mejorar la producción de nuestros clientes.</h2>'],
                                    autoStart: true,
                                    deleteSpeed: 30,
                                    delay: 50,
                                    loop: true,
                                }}
                            />
                        </div>
                        <p className={"RQ-f-u14-o16"}>{data.home.content}</p>
                    </div>
                </Col>
                <Col xs={18} sm={18} md={9} other={11} className={"home-img RQ-text-center RQ-d-flex RQ-align-center"}>
                    <img src={data.home.img.src} alt={data.home.img.name}/>
                </Col>
            </Row>
        </div>
    )
}
export default HomeComponent