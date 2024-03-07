import React from 'react'
import TopBar from '../Common/TopBar'
import Navbar from '../Common/Header';
import { NavLink } from 'react-router-dom';

function ContactTopbar() {
  return (
    <TopBar />
  )
}

function ContactNavbar() {
  return (
    <Navbar />
  );
}

function ContactBread() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <NavLink className="breadcrumb-item text-dark" to="/">Home</NavLink>
              <span className="breadcrumb-item active">Contact</span>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactFormMap() {
  return (
    <>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form bg-light p-30">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div className="control-group">
                  <input type="text" className="form-control" id="name" placeholder="Your Name"
                    required="required" data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="email" className="form-control" id="email" placeholder="Your Email"
                    required="required" data-validation-required-message="Please enter your email" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject"
                    required="required" data-validation-required-message="Please enter a subject" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea className="form-control" rows="8" id="message" placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                    Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
              <iframe style={{width: "100%", height: "250px", border: "0"}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6108889991774!2d72.55657724970443!3d23.038055018442176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ff3a38c353%3A0xdabe316634ef7e5e!2sInfoLabz!5e0!3m2!1sen!2sin!4v1709807811532!5m2!1sen!2sin" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title='mytitle'></iframe>
            </div>
            <div className="bg-light p-30 mb-3">
              <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
              <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactTopbar;
export { ContactNavbar, ContactBread, ContactFormMap }