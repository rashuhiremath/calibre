import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Container>
      {/* <Container className="footerBody"> */}
      ;<div className="container Footer-ascx">
  {/* Breadcrumb start */}
  <div className="row breadcrumbs BreadcrumbBottom-ascx">
    <div className="col-xs-12">
      <ul className="breadcrumbs">
        <li className="home">
          <a href="https://www.chalmers.se/en">Start</a>
        </li>
        <span id="ctl00_ctl49_ctl00_SiteMapPath" />
        <div
          id="social-icons"
          className="pull-right"
          style={{ display: "inherited" }}
        >
          <span id="follow-us">Follow us</span>
          <a
            href="https://www.facebook.com/chalmersuniversityoftechnology"
            target="_blank"
          >
            <img
              width={30}
              height={30}
              id="facebook"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1024px-Facebook_icon_2013.svg.png"
              alt="Chalmers university of technology official facebook page"
            />
          </a>
          <a
            href="https://www.instagram.com/chalmers.university/"
            target="blank"
          >
            <img
              width={30}
              height={30}
              id="instagram"
              src="/_layouts/Chalmers.Core.UI.Responsive/images/instagram.svg"
              alt="Chalmers university official instagram account"
            />
          </a>
          <a href="https://twitter.com/chalmersuniv" target="_blank" className>
            <img
              width={30}
              height={30}
              id="twitter"
              src="/_layouts/Chalmers.Core.UI.Responsive/images/twitter.svg"
              alt="Chalmers university official twitter account for science news"
            />
          </a>
          <a href="https://www.youtube.com/ChalmersUniversity" target="_blank">
            <img
              width={30}
              height={30}
              id="youtube"
              src="/_layouts/Chalmers.Core.UI.Responsive/images/youtube.svg"
              alt="Chalmers university official youtube account"
            />
          </a>
          <a
            href="https://www.linkedin.com/edu/chalmers-university-of-technology-17091"
            target="_blank"
          >
            <img
              width={30}
              height={30}
              id="linkedin"
              src="/_layouts/Chalmers.Core.UI.Responsive/images/linkedin.svg"
              alt="Chalmers university official LinkedIn account"
            />
          </a>
        </div>
      </ul>
    </div>
  </div>
  
  <span className="PageFooter-ascx" />
  <div className="row">
    <span className="UsefulLinks-ascx" />
    <div className="col-sm-4">
      <ul className="list footer ">
        <h4>Areas of Advance</h4>
        <li>
          <a
            href="https://www.chalmers.se/en/areas-of-advance/energy/Pages/default.aspx"
            target="_self"
          >
            Energy
          </a>
        </li>
        <li>
          <a
            href="https://www.chalmers.se/en/areas-of-advance/health/Pages/default.aspx"
            target="_self"
          >
            Health Engineering
          </a>
        </li>
        <li>
          <a
            href="https://www.chalmers.se/en/areas-of-advance/ict/Pages/default.aspx"
            target="_self"
          >
            Information and Communication Technology
          </a>
        </li>
        <li>
          <a
            href="https://www.chalmers.se/en/areas-of-advance/materials/Pages/default.aspx"
            target="_self"
          >
            Materials Science
          </a>
        </li>
        <li>
          <a
            href="https://www.chalmers.se/en/research/strong/nano/Pages/default.aspx"
            target="_self"
          >
            Nano
          </a>
        </li>
        <li>
          <a
            href="https://www.chalmers.se/en/areas-of-advance/production/Pages/default.aspx"
            target="_self"
          >
            Production
          </a>
        </li>
        <li>
          <a
            href="https://www.chalmers.se/en/areas-of-advance/Transport/Pages/default.aspx"
            target="_self"
          >
            Transport
          </a>
        </li>
      </ul>
    </div>
    <span className="UsefulLinksCol2-ascx" />
    <div className="col-sm-4">
      <ul className="list footer">
        <h4>Study at Chalmers</h4>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/education/programmes/masters-info/Pages/default.aspx"
            target="_self"
          >
            Master's Degree Programmes
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/education/Pages/contact.aspx"
            target="_self"
          >
            Study guidance and Admissions
          </a>
        </li>
        <li className="t">
          <a
            href="https://student.portal.chalmers.se/en/Pages/default.aspx"
            target="_blank"
          >
            Student Portal
          </a>
        </li>
        <li className="t">
          <a href="https://chalmersstudentkar.se/" target="_blank">
            Student Union
          </a>
        </li>
        <h4>Organisation</h4>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/departments/Pages/default.aspx"
            target="_self"
          >
            Departments
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/centres/Pages/centres.aspx"
            target="_self"
          >
            Centres
          </a>
        </li>
        <li className="t">
          <a href="http://www.lib.chalmers.se/en/" target="_blank">
            Library
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/researchinfrastructure/oso/Pages/default.aspx"
            target="_self"
          >
            Onsala Space Observatory
          </a>
        </li>
        <li className="t">
          <a href="https://intranet.chalmers.se/en/" target="_self">
            Chalmers intranet
          </a>
        </li>
      </ul>
    </div>
    <span className="UsefulLinksCol3-ascx" />
    <div className="col-sm-4">
      <ul className="list footer">
        <h4>Shortcuts</h4>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/about-chalmers/contact/Pages/default.aspx"
            target="_self"
          >
            Contact
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/news/presscontact/Pages/default.aspx"
            target="_self"
          >
            Press contacts
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/collaboration/alumni/Pages/default.aspx"
            target="_self"
          >
            Alumni
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/collaboration/friendsofchalmers/Pages/index.aspx"
            target="_self"
          >
            Support Chalmers
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/about-chalmers/Pages/find-your-way-to-chalmers.aspx"
            target="_self"
          >
            Find us
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/about-chalmers/Working-at-Chalmers/Vacancies/Pages/default.aspx"
            target="_self"
          >
            Vacancies
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/about-chalmers/contact/supplier-information/Pages/default.aspx"
            target="_self"
          >
            Supplier information
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/about-chalmers/Pages/about-wwwchalmersse.aspx"
            target="_self"
          >
            About chalmers.se / Cookies
          </a>
        </li>
        <li className="t">
          <a
            href="https://www.chalmers.se/en/about-chalmers/processing-of-personal-data/Pages/default.aspx"
            target="_self"
          >
            Processing of personal data
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="row">
    <div className="disclaimer PageFooter-ascx">
      <p>
        CALIBRE UNIVERSITY OF TECHNOLOGY - SE-412 96 GOTHENBURG, SWEDEN -
        PHONE: +46 (0)31-772 10 00 - WWW.CALIBRE.SE
      </p>
      <p className="logo">
        <img
          src="data:image/png;base64,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"
          alt
          height="150"
 width="150"        />
      </p>
    </div>
  </div>
</div>

      {/* </Container> */}
    </Container>
  );
};


export default Footer;