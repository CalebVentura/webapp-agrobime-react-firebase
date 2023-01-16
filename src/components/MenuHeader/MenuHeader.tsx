import './MenuHeader.scss';
import { MenuHeaderProps } from './MenuHeader.types';
import { Col, Row } from '../Grid/Grid';


const MenuHeader = ({
    menu,
    logo,
    contactUs
}: MenuHeaderProps) => {
    return (
        <Row
            data-testid="MenuHeader"
            className={'MenuHeader RQ-f-14'}
            noGutter
        >
                <ul className={"RQ-d-flex"}>
                    { menu.data.map((item, i)=>
                        <li key={i}>
                            <a href={item.goTo} className={`RQ-${menu.colorItem}`}>{item.name}
                            </a>
                        </li>
                    ) }
                    <a
                        href={contactUs.goTo}
                        target="_blank"
                        className={`contactUs RQ-border-${contactUs.color} RQ-white`}
                    >{ contactUs.name }</a>
                </ul>
        </Row>
    );
};

export default MenuHeader;
