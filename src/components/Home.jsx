import MyNavbar from "../components/MyNavbar.jsx"
import BigImage from "../components/BigImage.jsx"
import DownCards from "../components/DownCards.jsx"
import Footer from "../components/Footer.jsx"
import FrontCards from "./FrontCards.jsx"

const Home=()=>{
    return(<>
    <MyNavbar/>
    <BigImage/>
    <FrontCards/>
    <DownCards/>
    <Footer/>
    </>)
}
export default Home