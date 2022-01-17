import MyNavbar from "../components/MyNavbar.jsx"
import BigImage from "../components/BigImage.jsx"
//import DownCards from "../components/DownCards.jsx"
import Footer from "../components/Footer.jsx"
import FrontCards from "./FrontCards.jsx"
import EducationNews from "./news/EducationNews.jsx"
import Blogs from "./Blogs.jsx"
import Calender from "./Calender.jsx"
const Home=()=>{
    return(<>
    <MyNavbar/>
    <BigImage/>
    <EducationNews/>
    <FrontCards/>
    {/* <DownCards/> */}
    <Blogs/>
    <Footer/>
     <Calender/>  
    </>)
}
export default Home