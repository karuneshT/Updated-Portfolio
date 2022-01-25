export default function Services() {
  return (
    <div className="container my-5 p-5" id="services">
      <h1 className="underline underline-yellow mb-5">Services</h1>
      <p className="text-secondary pb-5">
        I provide two services, listed below, in which <br /> I have expertise.
      </p>
      <div className="row px-5 mx-5">
        {/* <div className="service-pallete service-background-blue m-3 p-5">
          <i class="fal fa-3x fa-mobile-android-alt"></i>
          <h5 className="fs-3 fw-bold my-3">UX Research</h5>
          <p className="fw-bold">
            Duis aute irure dolor in reprehenderit in voluptate
            <br />
            velit esse cillum dolore eu fugiat
          </p>
        </div> */}
        <div className="service-pallete service-background-yellow m-3 p-5">
          <i class="far fa-3x fa-browser"></i>
          <h5 className="fs-3 fw-bold my-3">Full Stack Web Development</h5>
          <p className="fw-bold">
            Web Applications including both the FrontEnd and the Backend. 
            <br /><br />
            My preferred tech stack:<br />
            ❇️ HTML, CSS <br />
            ❇️ React (Redux, Flux, Redux Toolkit) <br />
            ❇️ JavaScript <br />
            ❇️ Client Side Dynamic Routing (React Router)<br />
            ❇️ CSS frameworks ( Bootstrap, Material UI, Tailwind) <br />
            ❇️ MongoDB<br />
            ❇️ NodeJS<br />
            ❇️ Authentication (JWT, OAuth)
          </p>
        </div>
        {/* <div className="service-pallete service-background-pink m-3 p-5">
          <i class="fal fa-3x fa-lg fa-mobile-android-alt"></i>
          <h5 className="fs-3 fw-bold my-3">App Development</h5>
          <p className="fw-bold">
            Duis aute irure dolor in reprehenderit in voluptate
            <br />
            velit esse cillum dolore eu fugiat
          </p>
        </div> */}
        <div className="service-pallete service-background-green m-3 p-5">
          <i class="fal fa-3x fa-box"></i>
          <h5 className="fs-3 fw-bold my-3">FrontEnd Web Development </h5>
          <p className="fw-bold">
            Web Application including only the FrontEnd,i.e, User Interface.
            <br /><br />
            My preferred tech stack:<br />
            🔸 HTML, CSS <br />
            🔸 React (Redux, Flux, Redux Toolkit) <br />
            🔸 JavaScript <br />
            🔸 Client Side Dynamic Routing (React Router)<br />
            🔸 CSS frameworks ( Bootstrap, Material UI, Tailwind) <br />
          </p>
        </div>
      </div>
    </div>
  );
}
