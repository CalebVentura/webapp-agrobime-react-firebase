import './TeamComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";
import Typewriter from "typewriter-effect";

const TeamComponent = () => {
    return (
        <div className="TeamComponent">
            <h2 className={"RQ-text-center RQ-f-bold"}>Agrobime's team</h2>
            <Row className={"RQ-justify-center"} noGutter flex>
                {data.team.map((item, index) =>
                    <Col xs={18} sm={18} md={4} other={4} className={"team-item RQ-my-3"}>
                        <div className="team-item-content RQ-text-center">
                            <img src={item.source} alt={item.name}/>
                            <h3 className={"RQ-f-u16-o18 RQ-mt-2 RQ-mb-0 RQ-hover-theme"}>{item.name}</h3>
                            <p className={"RQ-f-u14-o16 RQ-hover-theme"}>{item.career}</p>
                        </div>
                    </Col>
                )}
            </Row>
        </div>
    )
}
export default TeamComponent