import { Row ,Col} from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import {MdForwardToInbox} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
import {ImBlog} from "react-icons/im"
const Contact = () => {
  return (
    <>
      <h1>Chat with us</h1>
      <p>
        Here are our international student ambassadors, and your new buddies!
        All buddies listed below are current students at one of our Master's
        programmes and at their personal contact card you will find information
        about them such as where they come from, spoken languages, their
        interests and hobbies and which programme they are in. The Chalmers
        buddies can answer questions regarding the programme they pursue, the
        courses they have taken, student life and more, all based on their
        personal experience. Additionally, staff from the university are also on
        hand to answer your questions.{" "}
      </p>
      <h6>Create an account and get in touch with us now!</h6>
      <div>
        <Row>
          <Col>
            <FaUserGraduate size={70} />
            <p>Students</p>
          </Col>
          <Col>
          <BsFillPersonFill size={70}/>
          </Col>
          <Col>
          <ImBlog size={70}/>
          </Col>
         <Col>
         <MdForwardToInbox size={70}/>
         </Col>
        </Row>
      </div>

      <h3>Students</h3>
    </>
  );
};

export default Contact;
