import React from 'react';
import "../../css/Contact.css"
import FAQ from '../../components/reusecomponent/FAQ';

const Contact = () => {
  return (
    <div>
      <section className='contact'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-5 service-description position-relative">
              <h2>
                Contact Us
              </h2>
              <p className='lead'>We're here to promptly address any concerns or complaints you have and ensure your satisfaction with our dedicated support team.</p>
              <div className='container mt-5 align-items-center'>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-5'>
                    <button id="booknow">Contact Us</button>
                  </div>
                  <div className='col-5'>
                    <button id="learnmore">Learn More</button>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <div className='contact-location'>
                <h2>
                  <i className="fas fa-map-marker-alt"></i>
                  Location Map
                </h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122699.33141164703!2d120.23472666374433!3d16.04710409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167fe6bba4d67%3A0xf54b516c2c5d10b6!2sPHINMA-University%20of%20Pangasinan!5e0!3m2!1sen!2sph!4v1682083534817!5m2!1sen!2sph"
                  width="600"
                  height="450"
                  style={{ border: 0, marginRight: '5px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container contact-content">
          <div className='text-center my-5'>
            <h2 id="contact-title">Connect with us</h2>
            <p>We're here to promptly address any concerns or complaints you have and ensure your satisfaction with our dedicated support team.</p>
          </div>
          <div className="row">
            <div className="col-6 contact-information">
              <div className='contact-padding'>
                <h2>Contact Information</h2>
                <p>Say something about your concern</p>
                <div className="contact-icons">
                  <p><i className="fas fa-phone"></i> +63-9477402202</p>
                  <p><i className="fas fa-envelope"></i> lafa.flores.up@phinmaed.com</p>
                  <p><i className="fas fa-map-marker-alt"></i> 28WV+R2R, Arellano St, Downtown District, Dagupan, 2400 Pangasinan</p>
                </div>
                <img src="/src/assets/images/Ellipse 793.png" alt="Ellipse" />
                <div className='contact-icons-2'>
                  <a href=""><i className="fa-brands fa-facebook"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="col-6 contact-input">
              <div className='contact-input-2'>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="contact-first-name">First Name</label>
                    <input type="text" id="contact-first-name" placeholder='First Name' />
                  </div>
                  <div className="col-6">
                    <label htmlFor="contact-last-name">Last Name</label>
                    <input type="text" id="contact-last-name" placeholder='Last Name' />
                  </div>
                  <div className="col-6">
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" placeholder='Email' />
                  </div>
                  <div className="col-6">
                    <label htmlFor="contact-phone-number">Phone Number</label>
                    <input type="text" id="contact-phone-number" placeholder='Phone Number' />
                  </div>
                  <div className="col-12">
                    <label htmlFor="contact-message">Message</label>
                    <input type="text" id="contact-message" placeholder='Message' />
                  </div>
                  <div className="col-6"></div>
                  <div className="col-3"></div>
                  <div className="col-2">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  );
};

export default Contact;
