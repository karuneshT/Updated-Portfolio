import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Modal from './Modal';

export default function ContactMe() {
  
  const form = useRef();
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const successMsg = "Your message has been sent. You will receive a response soon. Thank You."
  const errorMsg = "There is an error."
  const waitMsg = " Please wait. Your message is being sent....."

  const sendEmail = async() => {
    
     await emailjs
      .sendForm(
        "service_snh83xb",
        "template_o41eq4j",
        form.current,
        "user_lW9yD6NUEjIeNiSX1yzse"
      )
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setModal(true);     
     }, function(error) {
        console.log('FAILED...', error);
        setModal(false);
     });
    
  };

  async function submitHandler (e){
    setShow(false);
    e.preventDefault();
    await sendEmail();
    setShow(true);
    e.target.reset();
  }

  return (
    <>
      {show ? (modal ? <Modal msg={successMsg}/> : <Modal msg={errorMsg}/>) : <Modal msg={waitMsg}/>}
      <div className="container my-5" id="contact">
        <h1 className="underline underline-yellow margin-0">Contact Me</h1>
        <div className="d-flex justify-content-around row">
          <div className="text-start col-4 row text-secondary p-5">
            <h4 className="text-light">Contact info</h4>
            <i className="fas fa-map-marker-alt col-1 pt-1 "></i>
            <p className=" col-11 fw-bold margin-0">
              Bengaluru, Karnataka, India
            </p>
            <i className="fas fa-envelope col-1 pt-1"></i>
            <a
              href="mailto:karunesh_@outlook.com"
              className=" col-11 fw-bold margin-0"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              karunesh_@outlook.com
            </a>
            <i className="fas fa-phone-alt col-1 pt-1"></i>
            <p className=" col-11 fw-bold margin-0">+91-8884883031</p>
            <i className="fas fa-globe-asia col-1 pt-1"></i>
            <a
              href="https://karunesh.netlify.app/"
              style={{ color: "inherit", textDecoration: "none" }}
              className=" col-11 fw-bold margin-0"
            >
              www.karunesh.netlify.app
            </a>
            <div>
              <h5 className="text-light">Follow Me</h5>
              <a href="https://twitter.com/karunesh__">
                <i className="fab fa-twitter fa-lg me-2"></i>
              </a>
              <a href="https://www.linkedin.com/in/karunesh-tripathi-89b2809b/">
                <i className="fab fa-linkedin-in fa-lg mx-2"></i>
              </a>
              <a href="https://www.instagram.com/karunesh__/">
                <i className="fab fa-instagram fa-lg mx-2"></i>
              </a>
              <a href="https://github.com/karuneshT">
                <i className="fab fa-github fa-lg mx-2"></i>
              </a>
              <a href="https://itenzyme.in/">
                <i className="fas fa-globe fa-lg mx-2"></i>
              </a>
            </div>
          </div>
          <div className=" col-8 p-5">
            <form
              ref={form}
              className="row text-start"
              method="post"
              onSubmit={submitHandler}
            >
              <div class="mb-4 col-12">
                <label className="form-label text-secondary">NAME</label>
                <input
                  type="text"
                  className="form-control ps-4"
                  placeholder="Type your name"
                  name="name"
                />
              </div>
              <br />
              <div className="row col-12">
                <div className="mb-4 col-6">
                  <label class="form-label text-secondary">PHONE NUMBER</label>
                  <input
                    type="text"
                    className="form-control ps-4"
                    placeholder="Type your phone number"
                    name="phone"
                  />
                </div>
                <div className="mb-4 col-6">
                  <label class="form-label text-secondary ms-4">EMAIL</label>
                  <input
                    type="text"
                    className="form-control ms-4 ps-4"
                    placeholder="Type your email address"
                    name="email"
                  />
                </div>
              </div>
              <div className="mb-4 col-12">
                <label class="form-label text-secondary">YOUR MESSAGE</label>
                <textarea
                  rows="6"
                  type="text"
                  className="form-control ps-4"
                  placeholder="Type your message here"
                  name="message"
                />
              </div>
              <button
                type="submit"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="btn btn-warning btn-sm fs-xs fw-bold text-white ms-3 py-3 px-3 col-3"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
