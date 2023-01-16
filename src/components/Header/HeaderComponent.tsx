import "./HeaderComponent.scss";
import { HeaderComponentProps } from "./HeaderComponent.types";
import { Col, Row } from "../Grid/Grid";
import MenuHeader from "../MenuHeader/MenuHeader";
import { useState } from "react";
import data from '../../config/data.json'

const HeaderComponent = ({ logo, menuHeader }: HeaderComponentProps) => {
    const [showSideBar, setShowSideBar] = useState<Boolean>(false);

    const changeStateSideBar = () => {
        setShowSideBar(!showSideBar);
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    };

    return (
        <div className={"main-menu"}>
            <Row
                data-testid="HeaderComponent"
                className={`HeaderComponent RQ-d-flex`}
                noGutter
            >
                <Col xs={18} other={5} className="">
                    <img className={"header-logo-img"} src={data.header.logo.pathImage} alt={data.header.logo.altImage} />
                </Col>
                <Col xs={18} other={13} className="navigation-menu">
                    <MenuHeader
                        menu={menuHeader.menu}
                        logo={menuHeader.logo}
                        contactUs={menuHeader.contactUs}
                    />
                    <a onClick={() => changeStateSideBar()} className={"icon-side-bar"}>
                        <svg
                            className={""}
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g data-name="Layer 2">
                                <g data-name="menu-2">
                                    <rect
                                        width="24"
                                        height="24"
                                        transform="rotate(180 12 12)"
                                        opacity="0"
                                    />
                                    <circle cx="4" cy="12" r="1" />
                                    <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
                                    <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
                                    <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
                                </g>
                            </g>
                        </svg>
                    </a>
                </Col>
            </Row>
            <div
                className="side-bar"
                style={{ display: `${showSideBar ? "block" : "none"}` }}
            >
                <a
                    href="#"
                    className="sideBar-close"
                    onClick={() => changeStateSideBar()}
                >
                    <svg
                        className={""}
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.7929 7.49998L1.14645 1.85353L1.85356 1.14642L7.50001 6.79287L13.1465 1.14642L13.8536 1.85353L8.20711 7.49998L13.8536 13.1464L13.1465 13.8535L7.50001 8.20708L1.85356 13.8535L1.14645 13.1464L6.7929 7.49998Z"
                        />
                    </svg>
                </a>
                <ul className="">
                    {menuHeader.menu.data.map((item, i) => (
                        <li key={i} className="RQ-d-flex RQ-justify-center RQ-align-center">
                            <a
                                href={item.goTo}
                                className={"RQ-white"}
                                onClick={() => changeStateSideBar()}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="sideBar-download RQ-d-flex RQ-justify-center RQ-align-center">
                    <a
                        href={menuHeader.contactUs.goTo}
                        target="_blank"
                        className={
                            "RQ-white RQ-border-theme4 RQ-d-flex RQ-justify-center"
                        }
                    >
                        {data.header.menuHeader.contactUs.name}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
