import React from "react"
import { Link } from "gatsby"
// import logo from "../assets/images/logo_monagence.png"
// import qrcode from "../assets/images/qrcode.png"
// BiCheckCircle FaCheck FaLock FaHeadphonesAlt
import {  FaCheck, FaLock, FaHeadphonesAlt } from 'react-icons/fa';


const Reassurance = () => {
  return (
  <>
    <div className="why-container why-monagence d-none d-md-block">
      <h2 className="h2">Pourquoi voyager avec Monagence ?</h2>

      <div className="row">

        <div className="col-md-3 col-sm-6 text-center">
          <div
          //  style="font-weight: bold" 
          className="why-icon icon text-center">3X</div>
            <span>Flexibilité  de paiement<br/> 3X ou 4X sans frais</span>
        </div>

        <div className=" text-center">
        
          <div className="why-icon text-center icon">
             <br/>
             <FaLock />
          </div> 
          <span > Paiement <br/>sécurisé</span>
        </div>
        <div className=" text-center">
            <div className="why-icon text-center icon "> 
            <br/>
            <FaCheck/>
            </div>
            <span>Des produits au meilleur <br/>rapport qualité/prix</span>
        </div>
        <div className="text-center">
            <div className="why-icon text-center icon">
              <br/>
              <FaHeadphonesAlt />
            </div>
            <span>Des vrais conseillers voyage<br/> à votre écoute</span>
        </div>
      </div>
    </div>

    <section>
      <div className="form-container">
        <div className="row form-news">
          <div className="col-md-6  b-news">
            <h4 className="h4">
              <i className="far fa-paper-plane">
                </i> Restez informés ! <span>Bon plan &amp; promo</span>
            </h4>
            <p>Recevez en avant première les nouveautés et les bonnes affaires de 
              voyages.</p>
            <form action="/services/newsletter/" method="GET" id="form-news-home">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text icon icon-envelope"></span>
                </div>
                <input type="email" id="email" name="email" placeholder="Entrez votre e-mail ici" required=""/>
                <button type="submit" className="btn-submit-ok" aria-label="Envoyer">Envoyer</button>
              </div>
            </form>
          </div>
          <div className="b-social">
            <div className="col-md-4 b-network text-center">
              <h4 className="h5">Restez connectés et suivez-nous !</h4>
              <p>Rejoingez la communauté de notre agence de voyage sur
                les réseaux sociaux</p>
              <span>
                <a href="https://www.facebook.com/Monagence" className="fab icon-facebook" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                  </a>
                </span>
              <span>
                <a href="https://www.instagram.com/monagencedevoyages/?hl=fr" className="fab icon-instagram" target="_blank" aria-label="Instagram" rel="noopener noreferrer"></a></span>
              <span><a href="https://twitter.com/MonAgence" className="fab icon-twitter" target="_blank" aria-label="Twitter" rel="noopener noreferrer"></a></span>
              <span><a href="https://www.youtube.com/user/monagence1" className="fab icon-youtube" target="_blank" aria-label="Youtube" rel="noopener noreferrer"></a></span>
            </div>
            <div className="col-md-2 b-blog text-center">
              <h4 className="h5">Besoin de + d'infos ?</h4>
              <Link href="/faq/" className="d-block">F.A.Q</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Reassurance
