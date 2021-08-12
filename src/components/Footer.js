import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo_monagence.png"

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-header">
          <Link to="/">
            <img src={logo} alt="Mon Agence" />
          </Link>
          <div>
          <p>Infos et réservation : 01 73 323 323 </p>
          </div>
      </div>
      <div className="footer-main">
      <div className="footer-left">   
        <div className="footer-links">
          <Link
            to="/"
            className="footer-link"
            activeClassName="active-link"
          >
            Accueil
          </Link>
          <Link
            to="/travels"
            className="footer-link"
            activeClassName="active-link"
          >
            voyages
          </Link>
          <Link
            to="/tags"
            className="footer-link"
            activeClassName="active-link"
          >
            catégorie
          </Link>
          <Link
            to="/about"
            className="footer-link"
            activeClassName="active-link"
          >
            MonAgence
          </Link>          
        </div>
      </div>
      <div className="footer-center">   
        <div className="footer-links">
          <Link
            to="/"
            className="footer-link"
          >
            Qui sommes nous?
          </Link>
          <Link
            to="/travels"
            className="footer-link"
          >
            CGV
          </Link>
          <Link
            to="/tags"
            className="footer-link"
          >
            Confidentialité et sécurité
          </Link>
          <Link
            to="/about"
            className="footer-link"
          >
            Assurance voyage
          </Link>
          <Link 
            to="/contact" 
            className="footer-link" >
            Pour nous contacter
          </Link>
        </div>
      </div>
      <div className="footer-right">   
        <div className="footer-img">
          <div className="footer-link contact-link">
            <h6>Veuillez scanner le QR-Code</h6>
            {/* IMAGE QR- COde */}
          </div>
        </div>
      </div>
      </div>
      <div className="footer-end">
        <p>
          &copy; {new Date().getFullYear()} <span>monagence</span>. Built by{" "}
          <a href="https://www.gatsbyjs.com/">AgenceNAE</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
