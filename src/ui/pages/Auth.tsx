import { useContext, useState, FormEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";
import { NavbarAuth } from "../components/NavbarAuth";
import { Footer } from "../components/Footer";

export const Auth = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const handleRegister = async (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault()
    const lastPath = localStorage.getItem('lastPath') || '/dashboard'
    try {
      await userContext?.register(userCredentials)
      navigate(lastPath, { replace: true })
    } catch (e: any) {
      switch (e.message) {
        case 'auth/weak-password':
          setErrorMessage('El password debe tener al menos 6 caracteres')
          break;
        case 'auth/email-already-in-use':
          setErrorMessage('El email ya está registrado')
          break;
        case 'auth/invalid-email':
          setErrorMessage('El email no es válido')
          break;
        default:
          setErrorMessage('Hubo un error al iniciar sesión')
          break;
      }
    }
  }

  const handleLogin = async (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault()
    const lastPath = localStorage.getItem('lastPath') || '/dashboard'
    try {
      await userContext?.login(userCredentials)
      navigate(lastPath, { replace: true })
    } catch (e: any) {
      console.log(e.message)
      switch (e.message) {
        case 'auth/weak-password':
          setErrorMessage('El password debe tener al menos 6 caracteres')
          break;
        case 'auth/wrong-password':
          setErrorMessage('La contraseña es incorrecta')
          break;
        case 'auth/user-not-found':
          setErrorMessage('El usuario no existe')
          break;
        case 'auth/invalid-email':
          setErrorMessage('El email no es válido')
          break;
        default:
          setErrorMessage('Hubo un error al iniciar sesión')
          break;
      }
    }
  }

  return (
    <>
      <NavbarAuth />

      <section className="mt-4">
        <div className="container-fluid text-center">
          <h1>Autorización de usuario</h1>
        </div>
      </section>

      <section className="mt-4">
        <div className="container">
          {errorMessage ? <p className="fw-bold text-danger">{errorMessage}</p> : ''}
          <div className="card">
            <div className="card-body">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name='email'
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@agrobime.com"
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Correo electrónico</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="mt-3">
                <button className="me-2 btn btn-primary" type="button" onClick={handleLogin}>
                  Iniciar Sesión
                </button>
                <button className="me-2 btn btn-success" type="button" onClick={handleRegister}>
              Registrarme
            </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
};
