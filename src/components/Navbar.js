import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import { FaPhoneAlt,FaHeart,FaUserAlt,FaHome } from "react-icons/fa"
import { SiMailDotRu } from "react-icons/si"

import logo from "../assets/images/logo_monagence.png"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
         <div className="logo">
            <Link to="/">
            <img src={logo} alt="Mon Agence" />
          </Link>
         </div>
          {/* <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button> */}
        </div>
        <div className= "nav-links">
          {/* {show ? "nav-links show-links" : } */}
          <div className="header-infos">
            {/* <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Besoin d'aide ! 01 73 323 323
          </Link> */}
          <div className="info">
            <a href="tel:0173323323" title="une question! besoin d'aide ?">
            <span class="need-help">Besoin d'aide !  </span>
            {/* <span class="icon icon-phone">
            </span> */}
              <FaPhoneAlt color="#06526e" fontSize="1.1rem"/>
            <span class="text-phone"> 01 73 323 323</span></a>
            {/* <p>Lun-sam: 8h-22h - dim: 10h-19h - Numéro non surtaxé</p> */}
            <br />
            <span class="calender-phone"> Lun-sam: 8h-22h - dim: 10h-19h - Numéro non surtaxé</span>
          </div>

          <div className="info">
            <Link
              to="/travels"
              className="icon-link"
              activeClassName="active-link"
              // onClick={() => setShow(false)}
              >
              <SiMailDotRu color="#06526e" fontSize="1.1rem"/>
            <br />
              PAR EMAIL
            </Link>
          </div>
          <div className="info">
            <Link
              to="/tags"
              className="icon-link"
              activeClassName="active-link"
              // onClick={() => setShow(false)}
              >
              <FaHeart  color="#06526e" fontSize="1.1rem"/>
              <br />
              MA SELECTION
            </Link>
          </div>
          <div className="info">
            <Link
              to="/about"
              className="icon-link"
              activeClassName="active-link"
              // onClick={() => setShow(false)}
              >
              <FaUserAlt color="#06526e" fontSize="1.1rem" />
              <br />
              MON COMPTE
            </Link>
          </div>
          </div>
        </div>
      </div>
    </nav>

    <nav className="navbar2">
      <div className="nav-center">
          <button className="nav-btn" onClick={() => setShow(!show)}>
        <div className="nav-header">
          
            <FiAlignJustify />
          
            <div className="nav-icon">
              <Link
              to="/"
              className="nav-link2"
              activeClassName="active-link"
              onClick={() => setShow(false)}
                >
              <FaHome color="white" fontSize="1.1rem"/>
              </Link>
              <Link
                to="/"
                className="nav-link2"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                <FaPhoneAlt color="#fff" fontSize="1.1rem"/>
              </Link>
              <Link
                to="/"
                className="nav-link2"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                <FaHeart  color="white" fontSize="1.1rem"/>
              </Link>
              <Link
                to="/"
                className="nav-link2"
                activeClassName="active-link"
                onClick={() => setShow(false)}
              >
                <FaUserAlt color="#fff" fontSize="1.1rem"/>
              </Link>

          </div>

        </div>
        </button>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Accueil
          </Link>
          <Link
            to="/travels"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            voyages
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            catégorie
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            MonAgence
          </Link>
            <Link to="/contact" className="contact-link" onClick={() => setShow(false)}>
              contact
            </Link>
        </div>
      </div>
    </nav>
    </>
   
  )
}

export default Navbar
