import data from '../../config/data.json'
import './Auth.scss'
import { Col, Row } from "../../components/Grid/Grid";
import Typewriter from "typewriter-effect";
import { useState } from "react";

const TextInput = ({label, name, type}: {label?: string, name: string, type?: string}) => {
    type = type ?? 'text'
    const [value, setValue] = useState('');

    function handleChange(e: any) {
        setValue(e.target.value);
    }

    return (
        <div className="input-container">
            <input type={type} value={value} onChange={handleChange} name={name}/>
            <label className={value && 'filled'} htmlFor={'name'}>
                {label}
            </label>
        </div>
    );
}

const Form = () => {
    return (
        <form action={data.login.content.form.action} className={"form-login"}>
            <TextInput label={data.login.content.placeHolder.mail} type={'email'} name={'mail'} />
            <TextInput label={data.login.content.placeHolder.password} type={'password'} name={'password'} />
            <div className={"RQ-mt-5 RQ-mx-3 RQ-text-sm-center"}>
                <a href="" className="RQ-button RQ-background-theme3 RQ-hover-text-white RQ-hover-backgroud-button">{data.login.content.sign.name}</a>
                <a href="" className="RQ-button RQ-background-theme3 RQ-hover-text-white RQ-hover-backgroud-button RQ-ml-3">{data.login.content.signUp.name}</a>
            </div>
        </form>
    )
}

const LoginDesktop = () => {
    return (
        <div className="AuthView">
            <div className={"auth-container"}>
                <Row className={""} noGutter flex>
                    <Col xs={18} sm={18} md={9} other={7} className={"auth-img"}>
                        <img src={data.login.img.src} alt={data.login.img.name}/>
                    </Col>
                    <Col xs={18} sm={18} md={9} other={11} className={"RQ-d-flex RQ-justify-center RQ-align-center RQ-text-center"}>
                        <div>
                            <h2 className={"RQ-theme4"}>{data.login.content.title}</h2>
                            <Form/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const LoginAuthMobile = () => {
    return (
        <div className={"AuthView-mobile"}>
            <div className="background-img">
                <div className="img-shadow-inside">
                    <img src={data.login.img.src} alt={data.login.img.name}/>

                </div>
                <div className="form-mobile">
                    <div className="form-container-mobile">
                        <h2 className={"RQ-white"}>{data.login.content.title}</h2>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AuthView = () => {
    return (
        <div className={"AuthComponent"}>
            <LoginAuthMobile/>
            <LoginDesktop/>
        </div>
    )
}


export default AuthView