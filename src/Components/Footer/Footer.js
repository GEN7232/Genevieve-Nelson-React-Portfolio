import React from 'react';
// import './Footer.css';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import github from "../../assets/Footer/github-logo.png";
import linkedin from "../../assets/Footer/linkedin.png";
import facebook from "../../assets/Footer/facebook.png";

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="https://github.com/GEN7232" className="d-flex align-items-center p-0 text-dark">
              <img alt="github logo" src={github} width="80px" />
            </a>
          </CDBBox>
          <CDBBox>
            <a href="https://www.linkedin.com/in/genevieve-nelson-b13b65186/" className="d-flex align-items-center p-0 text-dark">
              <img alt="Linkedin" src={linkedin} width="50px" />
            </a>
          </CDBBox>
          <CDBBox>
            <a href="https://www.facebook.com/genevieveelizabeth" className="d-flex align-items-center p-0 text-dark">
              <img alt="Facebook" src={facebook} width="80px" />
            </a>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Genevieve Nelson 2022</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;