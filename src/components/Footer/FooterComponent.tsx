import './FooterComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";
import FacebookLogo from '../assets/icons/facebook'
import TwitterLogo from '../assets/icons/twitter'
import InstagramLogo from '../assets/icons/instagram'

const FooterComponent = () => {
    return (
        <div className="FooterComponent RQ-pt-6">
            <div className="footer-content">
                <Row className={"RQ-d-flex RQ-justify-center RQ-my-4"} noGutter flex>
                    <Col usm={18} osm={8} className={"column1 RQ-white"}>
                        <Row className={"RQ-mb-3 RQ-justify-xs-center"} noGutter flex>
                            <Col className={"RQ-d-flex RQ-justify-center RQ-align-center logo-agrobime"}>
                                <img src={data.footer.logoUrl} alt="agrobime"/>
                            </Col>
                            <Col className={"RQ-d-flex RQ-justify-center RQ-align-center"}>
                                <p className={"RQ-f-bold RQ-mb-0"}>AGROBIME</p>
                            </Col>
                        </Row>
                        <p className={"RQ-text-xs-center RQ-my-3"}>{data.footer.mail}</p>
                        <p className={"RQ-text-xs-center RQ-my-3"}>{data.footer.number}</p>
                        <ul className="social_media RQ-justify-xs-center">
                            <li>
                                <a href="#" className={"RQ-d-flex RQ-justify-center RQ-align-center"}>
                                    <FacebookLogo/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={"RQ-d-flex RQ-justify-center RQ-align-center"}>
                                    <TwitterLogo/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={"RQ-d-flex RQ-justify-center RQ-align-center"}>
                                    <InstagramLogo/>
                                </a>
                            </li>
                        </ul>
                    </Col >
                    <Col usm={18} osm={8} className={"column2 RQ-white"}>
                        <p className={"RQ-f-bold RQ-text-xs-center"}>{data.footer.menu.title}</p>
                        <ul>
                            {data.footer.menu.content.map((item, index) => (
                                <li key={index} className={"RQ-text-xs-center"}>
                                    <a href={item.goTo}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col usm={18} osm={2} className={"column3 RQ-white"}>
                        <p className={"RQ-f-bold RQ-text-xs-center"}>{data.footer.support.title}</p>
                        <ul>
                            {data.footer.support.content.map((item, index) => (
                                <li key={index} className={"RQ-text-xs-center"}>
                                    <a href={item.goTo}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="footer-sign RQ-py-3">
                <div className={"content-sign"}>
                    <Row
                        className={"footer-signature RQ-d-flex RQ-white"}
                        noGutter
                        flex
                    >
                        <Col umd={18} omd={9}  className="column-left">
                            <p className={'RQ-f-bold RQ-f-13 RQ-text-sm-center'}>{data.footer.sign.copyright}</p>
                        </Col>
                        <Col umd={18} omd={9} className="column-right">
                            <p className={"RQ-f-13 RQ-text-sm-center"}>{data.footer.sign.author}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default FooterComponent