import React from "react";
import "./Footer.css";
import { CDBBox } from "cdbreact";
import { MDBFooter } from "mdb-react-ui-kit";
import github from "../../assets/Footer/github-logo.png";
import linkedin from "../../assets/Footer/linkedin.png";
import facebook from "../../assets/Footer/facebook.png";

export const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a
                href="https://github.com/GEN7232"
                className="d-flex align-items-center p-0 text-dark"
                target="_blank" rel='noreferrer'
              >
                <img alt="github logo" src={github} width="80px" />
              </a>
            </CDBBox>
            <CDBBox>
              <a
                href="https://www.linkedin.com/in/genevieve-nelson-b13b65186/"
                target="_blank" rel='noreferrer'
                className="d-flex align-items-center p-0 text-dark"
              >
                <img alt="Linkedin" src={linkedin} width="50px" />
              </a>
            </CDBBox>
            <CDBBox>
              <a
                href="https://www.facebook.com/genevieveelizabeth"
                target="_blank" rel='noreferrer'
                className="d-flex align-items-center p-0 text-dark"
              >
                <img alt="Facebook" src={facebook} width="80px" />
              </a>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">
            &copy; Genevieve Nelson 2024
          </small>
        </CDBBox>
      </MDBFooter>
    </div>
  );
};

export default Footer;
