import { useContext } from "react"
import { UserContext } from "../../context"

export const Header = () => {
    const { user } : any = useContext(UserContext)

    return (
        <>
            <div className="container-lg text-center">
                <h2>Bienvenido <span className="text-success">{user?.email}</span>!</h2>
            </div>
        </>
    )
}
