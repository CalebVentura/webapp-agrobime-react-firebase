import { UserProvider } from "./context";
import { AppRouter } from "./routers/AppRouter";
import "./components/assets/scss/style.scss"

export const App = () => {
    return (
        <UserProvider>
            <AppRouter/>
        </UserProvider>
    );
};