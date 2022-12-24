import { UserProvider } from "./context";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
    return (
        <UserProvider>
            <AppRouter/>
        </UserProvider>
    );
};