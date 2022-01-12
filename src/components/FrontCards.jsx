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
  <Card.Img src="https://assets.teenvogue.com/photos/5c8959170ebdf32d57b96bf3/16:9/w_2560%2Cc_limit/00-hero-fieldston-students.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{t("card1")}</Card.Title>
  </Card.ImgOverlay>
</Card>
</Col>
<Col md={4}>
<Link to={"/chat-with-us"}>
<Card className=" big-image bg-dark text-dark">
   
  <Card.Img src="https://st2.depositphotos.com/4297569/11095/i/950/depositphotos_110950900-stock-photo-student-sitting-in-front-of.jpg" alt="Card image" />
 
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
<Card className="big-image bg-dark text-dark pt-4">
  <Card.Img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2020/08/A1607-10-Things-to-remember-while-designing-a-university-campus.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{t("card3")}</Card.Title>
  </Card.ImgOverlay>
</Card>

</Col>
<Col md={4}>
<Card className="big-image bg-dark text-dark">
  <Card.Img src="https://i2.cdn.turner.com/money/dam/assets/121024025354-90-best-jobs-assistant-professor-postsecondary-higher-education-gallery-horizontal.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{t("card4")}</Card.Title> 
  </Card.ImgOverlay>
</Card>
</Col>   
</Row>
<Row>
<Col md={8}>
<Card className="bg-dark text-dark">
  <Card.Img src="https://st2.depositphotos.com/4297569/11095/i/950/depositphotos_110950900-stock-photo-student-sitting-in-front-of.jpg" alt="Card image" height="200" />
  <Card.ImgOverlay>
    <Card.Title>{t("card5")}</Card.Title>  
  </Card.ImgOverlay>
</Card>
</Col>
<Col md={4}>
<Card style={{ width: '22rem' }} >
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