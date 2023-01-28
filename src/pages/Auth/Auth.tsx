import data from '../../config/data.json'
import './Auth.scss'
import { Col, Row } from "../../components/Grid/Grid";
import Typewriter from "typewriter-effect";
import { MouseEvent, useContext, useState } from "react";
import { UserContext } from "../../context";

const Form = () => {
    const userContext = useContext(UserContext);
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })


    const handleChange = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    const handleLogin = async (ev: any) => {
        ev.preventDefault()
        try {
            await userContext?.login(userCredentials)
        } catch (e: any) {
            console.log(e.message)
            // switch (e.message) {
            //     case 'auth/weak-password':
            //         setErrorMessage('El password debe tener al menos 6 caracteres')
            //         break;
            //     case 'auth/wrong-password':
            //         setErrorMessage('La contraseña es incorrecta')
            //         break;
            //     case 'auth/user-not-found':
            //         setErrorMessage('El usuario no existe')
            //         break;
            //     case 'auth/invalid-email':
            //         setErrorMessage('El email no es válido')
            //         break;
            //     default:
            //         setErrorMessage('Hubo un error al iniciar sesión')
            //         break;
            // }
        }
    }

    const handleRegister = async (ev: any) => {
        ev.preventDefault()
        try {
            await userContext?.register(userCredentials)
        } catch (e: any) {
            console.log(e.message)
            // switch (e.message) {
            //     case 'auth/weak-password':
            //         setErrorMessage('El password debe tener al menos 6 caracteres')
            //         break;
            //     case 'auth/email-already-in-use':
            //         setErrorMessage('El email ya está registrado')
            //         break;
            //     case 'auth/invalid-email':
            //         setErrorMessage('El email no es válido')
            //         break;
            //     default:
            //         setErrorMessage('Hubo un error al iniciar sesión')
            //         break;
            // }
        }
    }


    return (
        <form className={"form-login"}>
            <div className="input-container">
                <input type={'email'} value={userCredentials.email} onChange={handleChange} name={'email'}/>
                <label className={userCredentials.email && 'filled'} htmlFor={'name'}>
                    {data.login.content.placeHolder.mail}
                </label>
            </div>
            <div className="input-container">
                <input type={'password'} value={userCredentials.password} onChange={handleChange} name={'password'}/>
                <label className={userCredentials.password && 'filled'} htmlFor={'name'}>
                    {data.login.content.placeHolder.password}
                </label>
            </div>
            <div className={"RQ-mt-5 RQ-mx-3 RQ-text-sm-center"}>
                <a onClick={handleLogin} href="#" className="RQ-button RQ-background-theme3 RQ-hover-text-white RQ-hover-backgroud-button">{data.login.content.sign.name}</a>
                <a onClick={handleRegister} href="#" className="RQ-button RQ-background-theme3 RQ-hover-text-white RQ-hover-backgroud-button RQ-ml-3">{data.login.content.signUp.name}</a>
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