import { Col, Container, Row, ListGroup, Tab } from "react-bootstrap";
import BigImage from "../BigImage";
import Contact from "./Contact";
import "../../styles/ChatWithUs.css"
import MyNavbar from "../MyNavbar.jsx";
import { useTranslation } from 'react-i18next'

 

const ChatWithUs = () => {
  const { t} = useTranslation();
  return (
    <>
    <MyNavbar/>
      <Container >
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
          <Row>
            <Col sm={4} >
              <ListGroup>
                <ListGroup.Item action href="#link1" className="chat">
                  {t("education")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" className="chat">
                 {t("list1")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" className="chat">
                {t("list2")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" className="chat">
                {t("list3")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" className="chat">
                {t("list4")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link6" className="chat">
                {t("list5")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link7" className="chat">
                {t("list6")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link8"className="chat">
                {t("list7")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link9" className="chat">
                {t("list8")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link10" className="chat">
                {t("list9")}
                </ListGroup.Item>
                <ListGroup.Item action href="#link11" className="chat">
                {t("list10")}
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
