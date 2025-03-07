import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id="section">
         <h2 className="section_title">Get in touch</h2>
         <span className="section_subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">

                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">tebogo1686@gmail.com</span>

                        <a href="mailto:tebogo1686@gmail.com.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+27-67-149-9983</span>

                        <a href="https://api.whatsapp.com/send?phone=+27671499983&text=Hello, more information!" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Insert your name'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Insert your email'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='Write your project'></textarea>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
