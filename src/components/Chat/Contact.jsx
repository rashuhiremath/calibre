import { Row ,Col, Button} from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import {MdForwardToInbox} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
import {ImBlog} from "react-icons/im"
import {BiLogIn} from "react-icons/bi"
import { useTranslation } from 'react-i18next'
import {showFormAction} from "../../Redux-store/actions/signup/index.js"
import SignUp from "./SignUp";
import { useState } from "react";

//import {useSelector,useDispatch } from "react-redux";



  
const Contact = () => {
    // const signUp = useSelector(state => state.signup.showForm)
    // const dispatch = useDispatch()
   
    const { t} = useTranslation();
    const [show,setShow]=useState(false)
    const clickToShow =()=>{
        setShow(true)
    }


  return (
    <>
      <h1>{t("chat")}</h1>
      <p>{t("chat1")}
       {" "}
      </p>
      <h6>{t("chat2")}</h6>
      <div>
        <Row>
          <Col>
            <FaUserGraduate size={50} />
            <p>{t("chat3")}</p>
          </Col>
          <Col>
          <BsFillPersonFill size={50}/>
          <p>{t("staff")}</p>
          </Col>
          <Col>
          <ImBlog size={50}/>
          <p>{t("blog")}</p>
          </Col>
         <Col>
         <MdForwardToInbox size={50}onClick={clickToShow}/>
         <p>{t("inbox")}</p>
         </Col>
         <Col>
         <div >
         <BiLogIn size={50} onClick={clickToShow}/> 
         <p>{t("signup")}</p>
         
         </div>
         </Col>
        </Row>
      </div>

      <h3>{t("chat3")}</h3>
      { show ? <SignUp /> : null }
    </>
  );
};


export default Contact
