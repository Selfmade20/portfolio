import React, { useState } from 'react'
import './Services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
   <section className="services section" id="services">
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What I Offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className='uil uil-arrow services__icon'></i>
                <h3 className="services__title">Front End <br/> Developer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Front End Developer</h3>
                    <p className="services__modal-description">Services with more than 3 years of professional experience, providing quality work to clients and companies</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Building User Interfaces (UIs).
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                               Ensuring Cross-Browser and Device Compatibility.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Improving User Experience (UX).
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className="services__title">Back End <br/> Developer</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Back End Developer</h3>
                    <p className="services__modal-description">Services with more than 3 years of professional experience, providing quality work to clients and companies</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Managing Databases and APIs.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Implementing Server-Side Logic.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Ensuring Security and Performance.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className='uil uil-mobile-android services__icon'></i>
                <h3 className="services__title">Cybersecurity <br/> Analyst</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>View More 
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Cybersecurity Analyst</h3>
                    <p className="services__modal-description">Services with more than 3 years of professional experience, providing quality work to clients and companies</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Yet To Come......
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Yet To Come.......
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Yet To Come......
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
