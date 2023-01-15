import TestComponent from '../../components/TestComponent'
import HeaderComponent from '../../components/Header'
import FooterComponent from '../../components/Footer'
import CarouselTest from '../../components/Carousel'
import './Home.scss'

const HomeView = () => {
    return (
        <div className="homeView">
            <HeaderComponent/>
            <CarouselTest/>
            <FooterComponent/>
        </div>
    )
}
export default HomeView