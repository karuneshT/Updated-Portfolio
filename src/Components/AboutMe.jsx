// import resume from "../images/resume.pdf"

export default function AboutMe() {
  return (
    <div
      className="container d-inline-flex justify-content-evenly align-items-center p-5 about"
      id="aboutus"
    >
      <h1 className="mt-4 about-title">About Me</h1>
      <span className="text-start my-5">
        <p>
          I am a Full Stack Web Developer ( primarily a Frontend Developer ) <br />looking for a role in an exciting company.
          <br />
          I focus on writing accessible HTML, using modern CSS practices and
          <br />
          JavaScript. When writing JavaScript, I prefer React, but I am open to
          <br />
          adapting whichever framework is required. <br />
          <br /> I believe Project Based Learning is the best approach to learn
          anything. <br /> Hence, I've got projects in all the different
          technologies that I've learnt <br /> over time.
          I'd love you to checkout my projects.
        </p>
        {/* <a 
          href="#portfolio"
          className="btn btn-warning btn-md text-white fw-bold py-3 px-4 me-4 mt-3 mb-5"
          role="button"
        >
          View Works
        </a> */}
        <a
          href="https://1drv.ms/b/s!AjzQwmywAP7YiFR7zotMP22aueQp"
          role="button"
          className="btn btn-outline-warning btn-md py-3 px-4 mt-3 mb-5"
        >
          See Resume
        </a>
      </span>
    </div>
  );
}
