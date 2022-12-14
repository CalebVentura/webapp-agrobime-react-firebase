import TestComponent from '../../components/TestComponent'
import HeaderComponent from '../../components/Header'
import FooterComponent from '../../components/Footer'
import './Home.scss'

const HomeView = () => {
    return (
        <div className="homeView">
            <HeaderComponent/>
            <div id={"main-content"}>
            </div>
            <FooterComponent/>
        </div>
    )
}
export default HomeView