import { Container,Card,Col,Row,ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../styles/bigimage.css"
import { useTranslation } from 'react-i18next'

  
const FrontCards =()=>{
  const { t} = useTranslation();

  
return(
    <>
    <Container className="big-image pt-4">
        <Row>
        <Col md={4}>
    <Card className=" big-image bg-dark text-dark">
  <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXNQK0r-PzTzIskZjaAP1FjPvfx_DhrkITg&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{t("card1")}</Card.Title>
  </Card.ImgOverlay>
</Card>
</Col>
<Col md={4}>
<Link to={"/chat-with-us"}>
<Card className=" big-image bg-dark text-dark">
   
  <Card.Img src="https://image.freepik.com/free-photo/teenager-student-sitting-floor-with-laptop-pointing-side-present-product_1368-89446.jpg" alt="Card image" />
 
  <Card.ImgOverlay>
    <Card.Title>{t("card2")}</Card.Title>
    
  </Card.ImgOverlay>
</Card>
</Link>
</Col>
<Col md={4}>
<Card style={{ width: '22rem' }} className="ml-2">
  <Card.Header>{t("news")}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>
</Card>
</Col>
</Row>
<Row className="pt-4">
<Col md={4}>
<Card className="big-image bg-dark text-dark ">
  <Card.Img src="https://media.istockphoto.com/photos/happy-smiling-woman-reading-paper-letter-receive-good-news-at-home-picture-id1137821412?k=20&m=1137821412&s=612x612&w=0&h=VEKq9OWnc_cKmxEqdmuU81bvfSbbTiIYpaBCEl43qd4=" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{t("card3")}</Card.Title>
  </Card.ImgOverlay>
</Card>

</Col>
<Col md={4}>
<Card className="big-image bg-dark text-dark">
  <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pHvEI7dZIWvHyEFRRKTBKTPFnVt0PvLXWU1GEWd08z981IdRTnWDkrbktFR4voSEotE&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{t("card4")}</Card.Title> 
  </Card.ImgOverlay>
</Card>
</Col>   
</Row>
<Row>
<Col md={8}>
<Card className=" big-image bg-dark text-dark mt-4">
  <Card.Img src="https://image.freepik.com/free-photo/portrait-young-university-student-woman-with-graduation-cap-violet-background_33799-8049.jpg" alt="Card image" height="200" />
  <Card.ImgOverlay>
    <Card.Title>{t("card5")}</Card.Title>  
  </Card.ImgOverlay>
</Card>
</Col>
<Col md={4}>
<Card style={{ width: '22rem' }} className=" mt-4" >
  <Card.Header>{t("calender")}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>
</Card>
</Col>
</Row>
</Container>
    </>
)
}
export default FrontCards