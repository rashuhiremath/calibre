import { Col, Container, Row, ListGroup, Tab } from "react-bootstrap";
import BigImage from "../BigImage";
import Contact from "./Contact";
import "../../styles/ChatWithUs.css"
import MyNavbar from "../MyNavbar.jsx";

const ChatWithUs = () => {
  return (
    <>
    <MyNavbar/>
      <Container >
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
          <Row>
            <Col sm={4} >
              <ListGroup>
                <ListGroup.Item action href="#link1" className="chat">
                  Education
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" className="chat">
                  Master's Studies
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" className="chat">
                  Application and admission
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" className="chat">
                  Fees and Scholarships
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" className="chat">
                  Bachelor's Studies
                </ListGroup.Item>
                <ListGroup.Item action href="#link6" className="chat">
                  Student Mobility
                </ListGroup.Item>
                <ListGroup.Item action href="#link7" className="chat">
                  Studying at Chalmers
                </ListGroup.Item>
                <ListGroup.Item action href="#link8"className="chat">
                  Before your arrival
                </ListGroup.Item>
                <ListGroup.Item action href="#link9" className="chat">
                  Meet us online and talk about studies
                </ListGroup.Item>
                <ListGroup.Item action href="#link10" className="chat">
                  Corona updates for prospective students
                </ListGroup.Item>
                <ListGroup.Item action href="#link11" className="chat">
                  Contact Chalmers regarding studies
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                <Contact/>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link6">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link7">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link8">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link9">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link10">
                  <BigImage />
                </Tab.Pane>
                <Tab.Pane eventKey="#link11">
                  <BigImage />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};

export default ChatWithUs;
