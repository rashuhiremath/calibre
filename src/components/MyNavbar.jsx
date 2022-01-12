import { Navbar,Nav, Form, FormControl, Container } from "react-bootstrap";
import "../styles/mynavbar.css"
import { useTranslation } from 'react-i18next'
import i18next from "i18next";
import { useEffect } from "react";


const MyNavbar = () => {

 const { t, i18n } = useTranslation();

 useEffect(()=>{
   if(localStorage.getItem("i18nextlng")?.length>2){
     i18next.changeLanguage("en")
   }
 },[]) 

 const handleChange =(e)=>{
   i18n.changeLanguage(e.target.value)
 }
  return (
    <>
    
  <div >
  <Navbar bg="light" expand="lg" >
  <Container >
  <Navbar.Brand href="#home">{t("calibre")}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">{t("education")}</Nav.Link>
      <Nav.Link href="#link">{t("research")}</Nav.Link>
      <Nav.Link href="#link">{t("collaboration")}</Nav.Link>
      <Nav.Link href="#link">{t("aboutcalibre")}</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <Form inline>
      <FormControl type="text" placeholder={t("search")} className="mr-sm-2" />
     
    </Form>
    
   {/*  {Object.keys(lngs).map((lng) => (
 
 
 <span key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
 {lngs[lng].nativeName}{">"}In English</span>))}</div> */}
<select value={localStorage.getItem("i18nextlng")} onChange={handleChange} >
  <option value="en" className="lang">In English</option>
  <option value="de" className="lang">{t("de")}</option>
</select>

 </Container>
</Navbar>
</div>
      
    </>
  )
}

export default MyNavbar;
