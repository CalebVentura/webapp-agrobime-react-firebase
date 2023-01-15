import TestComponent from '../../components/TestComponent'
import HeaderComponent from '../../components/Header'
import FooterComponent from '../../components/Footer'
import CarouselTest from '../../components/Carousel'
import HomeComponent from '../../components/Home'
import TeamComponent from '../../components/Team'
import './Home.scss'

const HomeView = () => {
    return (
        <div className="homeView">
            <HeaderComponent/>
            <HomeComponent/>
            <CarouselTest/>
            <TeamComponent/>
            <FooterComponent/>
        </div>
    )
}
export default HomeView