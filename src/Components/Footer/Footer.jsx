import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Tebogo</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#services" className="footer__link">Services</a>
            </li>

            <li>
                <a href="#" className="footer__link">Projects</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/tebza_fx/" className="footer__social-link" target='_blank'>
        <i class="uil uil-instagram"></i>
        </a>

        <a href="https://github.com/Selfmade20" className="footer__social-link" target='_blank'>
        <i class="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/tebogo-selamolela-a86090159/" className="footer__social-link" target='_blank'>
        <i class="uil uil-linkedin-alt"></i>
        </a>
        </div>

        <span className="footer__copy">&#169; Tebogo Selamolela. All rights reserved</span>
    </div>
  </footer>
  )
}

export default Footer
