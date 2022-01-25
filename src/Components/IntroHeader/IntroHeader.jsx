import img from "./images/karunesh.png";
import "./IntroHeader.styles.css";

import Navbar from "./NavBar";

function IntroHeader() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        id="home"
        className="container d-inline-flex align-items-center justify-content-between mt-5 pe-5"
      >
        <div className="intro-content text-start ps-5">
          <b>I'm Karunesh</b>
          <p className="fs-4">
            Freelance Web & Mobile UI/UX <br /> Designer
          </p>
          <button
            type="button"
            className="btn btn-warning btn-lg text-light mt-5 py-3 px-5"
          >
            <b>
              <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Hire Me</a>
            </b>
          </button>
        </div>
        <img src={img} alt="DevPhoto" />
      </div>
    </div>
  );
}

export default IntroHeader;
