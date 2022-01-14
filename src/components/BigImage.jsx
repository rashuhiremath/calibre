import { Card, Container } from "react-bootstrap"
//import "../styles/mynavbar.css"
import "../styles/bigimage.css"
import { useTranslation } from 'react-i18next'
const BigImage =()=>{
  const { t} = useTranslation();

return(
    <>
    <Card className="big-image bg-dark text-dark ">
     
  {/* <Card.Img src="https://universitybusiness.com/wp-content/uploads/2021/05/STOCK1-700x200.jpeg" alt="Card image" height="250"   object-fit="cover" /> */}
  <Card.Img src="https://as1.ftcdn.net/v2/jpg/03/45/50/06/1000_F_345500615_brXkGwghKeRIx6FKb4bBzI2cebg9VY0x.jpg"alt="Card image" height="250"   object-fit="cover" />
  <Card.ImgOverlay >
  <Container>
    <Card.Title><h1>{t("CalibreUniversityofTechnology")}</h1></Card.Title>
    <Card.Text>
     {t("subtitle")}<br/>{t("subtitle1")}<br/>{t("subtitle2")}
    </Card.Text>
    </Container> 
  </Card.ImgOverlay>
  
  
</Card>
   
    </>
)
}
export default BigImage