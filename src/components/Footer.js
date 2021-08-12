import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo_monagence.png"
import qrcode from "../assets/images/qrcode.png"


const Footer = () => {
  return (
    <footer className="page-footer">
    <div className="footer-header">
      <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Mon Agence" />
          </Link>

          <p><span>Infos et réservation:</span>
          <br /> 01 73 323 323 </p>
          
      </div>
      <div className="footer-qrcode">
          <p><span>Scanner le QR Code</span></p>
         
            <img src={qrcode} alt="Mon Agence" />
                  
      </div>
    </div>
      <p>
        &copy; {new Date().getFullYear()} <span>monagence</span>. Built by{" "}
        <a href="https://www.gatsbyjs.com/">AgenceNAE</a>
      </p>
    </footer>
  )
}

export default Footer
