import React, { useState } from 'react'
import './Qualification.css'


const Qualifications = () => {

        const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index)
        }

  return (
   <section className="qualification section">
    <h2 className="section_title">Qualification</h2>
    <span className="section_subtitle">My Personal Journey</span>


    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} onClick={() => toggleTab(1)}>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Matric National Senior Certificate</h3>
                        <span className="qualification__subtitle">Diepsloot Combined School</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2018 - 2018
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">  </span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Full Stack Developer Learnership</h3>
                        <span className="qualification__subtitle">The Coding Ground</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2019 - 2021
                        </div>
                    </div>
                </div>


               {/* <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Junior Software Developer</h3>
                        <span className="qualification__subtitle">Zero1 Solutions PTY LTD</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2021 - 2024
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line">  </span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Web Developer Intern</h3>
                        <span className="qualification__subtitle">HexSoftwares</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2025 - 2025
                        </div>
                    </div>
                </div> */}


            </div>

        
        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"} onClick={() => toggleTab(2)}>

        <div className="qualification__data">
        <div>
            <h3 className="qualification__title">Junior Software Developer</h3>
            <span className="qualification__subtitle">Zero1 Solutions PTY LTD</span>
        <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> 2021 - 2024
        </div>
    </div>
        <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
        </div>
    </div>

<div className="qualification__data">
    <div></div>

    <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line">  </span>
    </div>
    <div>
        <h3 className="qualification__title">Web Developer Intern</h3>
        <span className="qualification__subtitle">HexSoftwares</span>
        <div className="qualification__calender">
            <i className="uil uil-calendar-alt"></i> 2025 - 2025
        </div>
    </div>
</div>


            </div>

        </div>

    </div>
   </section>
  )
}

export default Qualifications
