import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, ListGroup } from "react-bootstrap";
import "../../src/styles/calender.css";
import { fetchTheEvents } from "../Redux-store/actions/signup/index.js";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  events: state.calender.events,
});

const mapDispatchToProps = (dispatch) => ({
    
  getEvents: () => {
    console.log("i am here to run")
    dispatch(fetchTheEvents());
  },
});
const Calender = ({ events, getEvents }) => {
  const { t } = useTranslation();
  console.log(events);

  useEffect(() => {
    // fetchTheCalender()
    getEvents();
  }, []);

  return (
    <>
     <Card style={{ width: "22rem" }} className=" mt-4">
        <Card.Header>{t("calender")}</Card.Header>
        <ListGroup variant="flush">
          {events.map((cal) => (
            <ListGroup.Item>
              <Card border="light">
                <Card.Header className="calender">{cal.date}</Card.Header>
                <Card.Body>
                  <Card.Title>{cal.event}</Card.Title>
                  <Card.Text>
                    <small>{cal.type}</small>
                    <br />
                    <small>{cal.time}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card> 
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Calender);
/* export default Calender */

// const [calender, setCalnder] = useState([])

/* const event = useSelector(state=>state.calender.events)
const dispatch = useDispatch()
 
 */

/* const fetchTheCalender = async()=>{
    let response = await fetch("http://localhost:3005/calender")
    let data = await response.json()
    setCalnder(data)
 } */
