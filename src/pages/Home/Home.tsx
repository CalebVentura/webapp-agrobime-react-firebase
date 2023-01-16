import data from '../../config/data.json'
import TestComponent from '../../components/TestComponent'
import HeaderComponent from '../../components/Header'
import FooterComponent from '../../components/Footer'
import CarouselTest from '../../components/Carousel'
import HomeComponent from '../../components/Home'
import TeamComponent from '../../components/Team'
import DescriptionComponent from '../../components/Description'
import YoutubeComponent from '../../components/Youtube'
import './Home.scss'

const HomeView = () => {
    return (
        <div className="HomeView">
            <HeaderComponent logo={data.header.logo} menuHeader={data.header.menuHeader}/>
            <div className="agrobime-main">
                <HomeComponent/>
                <CarouselTest/>
                <DescriptionComponent/>
                <YoutubeComponent/>
                <TeamComponent/>
            </div>
            <FooterComponent/>
        </div>
    )
}
export default HomeView