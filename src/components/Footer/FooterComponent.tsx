import './FooterComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";

const FooterComponent = () => {
    return (
        <div className="FooterComponent">
            <Row className={"RQ-d-flex RQ-justify-center"} noGutter flex>
                <Col omd={6} umd={18} className={"column1 RQ-white"}>
                    <p className={"RQ-f-bold"}>AGROBIME</p>
                    <p>{data.footer.mail}</p>
                    <p>{data.footer.number}</p>
                </Col>
                <Col omd={6} umd={18} className={"column2 RQ-white"}>
                    <p className={"RQ-f-bold"}>{data.footer.menu.title}</p>
                    <ul>
                        {data.footer.menu.content.map((item, index) => (
                            <li key={index}>
                                <a href={item.goTo}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col omd={6} umd={18} className={"column3 RQ-white"}>
                    <p className={"RQ-f-bold"}>{data.footer.support.title}</p>
                    <ul>
                        {data.footer.support.content.map((item, index) => (
                            <li key={index}>
                                <a href={item.goTo}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
export default FooterComponent