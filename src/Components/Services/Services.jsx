import React from 'react'
import './Services.css'

const Services = () => {
  return (
   <section className="services section" id="services">
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What I Offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className='uil uil-arrow services__icon'></i>
                <h3 className="services__title">Website <br/> Developer</h3>
            </div>

            <span className="services__button">View More
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Services with more than 3 years of professional experience, providing quality work to clients and companies</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop user interfaces.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Webpage Development.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                IT customer support.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className="services__title">Application <br/> Developer</h3>
            </div>

            <span className="services__button">View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services_modal-close"></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Services with more than 3 years of professional experience, providing quality work to clients and companies</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop user interfaces.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Webpage Development.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                IT customer support.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className='uil uil-mobile-android services__icon'></i>
                <h3 className="services__title">Application <br/> Developer</h3>
            </div>

            <span className="services__button">View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className="services__modal">
                <div className="services__modal-content">
                    <i className="uil uil-times services_modal-close"></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">Services with more than 3 years of professional experience, providing quality work to clients and companies</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop user interfaces.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Webpage Development.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                IT customer support.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
    </div>
   </section>
  )
}

export default Services
