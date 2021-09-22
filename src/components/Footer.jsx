import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo_monagenceCarre.png"
import membre from "../assets/images/footer/membre-de.png"
import paiement from "../assets/images/footer/mode-paiement.png"


const Footer = () => {
  return (
  <footer id="footer">
    <div className="sub-footer">
      <div className="footer-container">
        
        <div className="row footer-header">
          <span className="contact-us">
            <img src={logo} alt="Monagence.com agence de voyage pas chere"/>
          </span>

          {/* <div className="slogan">
            <p className="text-right">Monagence.com ... Ne rêvez plus, voyagez !</p>
          </div>
          <div className="col-lg-5 col-sm-6">
            <a href="tel:0173323323">
              <span className="icon icon-phone text-left"> Infos et réservations : 01 73 323 323</span>
            </a>
          </div> */}
        </div>

        <div className="row footer-content">
          <div className="footer-h5 about">
            <h5 className="footer-content" >A propos de Monagence</h5>
              <ul>
                <li>
                  <a href="/informations/qui-sommes-nous" rel="nofollow">Qui-sommes-nous ?</a>
                </li>
                <li>
                  <a href="/informations/cgv" rel="nofollow">CGV</a>
                </li>
                <li>
                  <a href="/informations/confidentialite" rel="nofollow">Confidentialité et sécurité</a>
                </li>
                <li>
                  <a href="/informations/assurances-voyages/" rel="nofollow">Assurance voyage</a>
                </li>
                <li>
                  <a href="/informations/contact" rel="nofollow">Pour nous contacter</a>
                </li>
              </ul>
          </div>

          <div className="footer-h5 travels">
            <h5 className="footer-content" >CE &amp; voyage en groupe</h5>
              <ul>
                <li>
                  <a href="https://ce.monagence.com" rel="nofollow">CE, devenir adhérent !</a>
                </li>
                <li>
                  <a href="/services/demande-par-email/" rel="nofollow">Préparez votre voyage en groupe !</a>
                </li>
              </ul>
          </div>

          <div className="footer-h5">
             <h5 className="footer-content-img">Mode de paiement</h5>
              <img src={paiement} alt="mode paiement sécurisé"/>
                <br/>
              <h5 className="footer-content-img" >Membre de :</h5>
                <img src={membre} alt="Monagence est membre de Sediv"/> 
          </div>
        </div>

          <div className="text-center copyright">
            <p>
              La vente de voyages sous la marque Monagence.com est assurée par SARL RF Distribution au capital de 100 000 euros.
              Garantie financière APST IM094120019 / R.C GENERALI N° AL813861 / LI 094090006 : 15 av. Carnot 75017 Paris -
              Agence de voyage agréée IATA  - Siège : 2 rue du Nouveau Bercy 94220 Charenton-le-Pont <br/> Hébergement du site : CLARANET 68 rue du Faubourg Saint Honoré - 75008 PARIS - ©2021 Monagence.com tous droits réservés
            </p>
          </div>

        </div>
      </div>
  </footer>
  )
}

export default Footer
