import { Col, Row } from "../Grid/Grid";
import './TestComponent.scss'

const TestComponent = () => {
    return (
        <div className="TestComponent">
            <p>
                Hello everyone!
            </p>
            <Row className={"test RQ-d-flex RQ-justify-center"} noGutter flex>
                {/*omd : over md*/}
                {/*umd: under md*/}
                <Col omd={10} umd={18} className={"RQ-mx-1 RQ-theme1"}>
                    <p>column 1</p>
                </Col>
                <Col omd={8} umd={18} className={"RQ-mx-1 RQ-theme4"}>
                    <p>column 2</p>
                </Col>
            </Row>
        </div>
    )
}
export default TestComponent