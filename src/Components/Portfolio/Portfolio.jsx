import "./Portfolio.styles.css";
import $ from "jquery";
import all from '../../images/all.png';
import brand from '../../images/brand.png';
import photo from '../../images/photo.png';
import perfect from '../../images/perfect.png';
import web from '../../images/web.png';

function clickHandler(e) {
  e.preventDefault();
  $(".content-container div").fadeOut("fast");
  $("#" + $(e.target).data("rel")).fadeIn("fast");
}

export default function Portfolio() {
  return (
    <div className="container portfolio py-5" id="portfolio">
      <h1 className="underline underline-yellow mb-5">Latest Works </h1>
      <p className="text-secondary pb-5">
        These are some of the projects/ work that I've completed recently.
        <br />
        Please have a look.
      </p>
      <span>
        <ul className="nav nav-menu justify-content-center">
          <li className="nav-item px-1">
            <a
              onClick={clickHandler}
              className="nav-link navigate-tabs px-2 fs-5"
              href="#all"
              data-rel="content1"
              
            >
              FrontEnd
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link navigate-tabs px-3 fs-5"
              href="#brand"
              data-rel="content2"
              onClick={clickHandler}
            >
              Full Stack
            </a>
          </li>
          {/* <li className="nav-item px-1">
            <a
              className="nav-link navigate-tabs px-2"
              href="#photography"
              data-rel="content3"
              onClick={clickHandler}
            >
              Photography
            </a>
          </li>
          <li className="nav-item px-1">
            <a
              className="nav-link navigate-tabs px-2"
              href="#true"
              data-rel="content4"
              onClick={clickHandler}
            >
              True Perfection
            </a>
          </li>
          <li className="nav-item px-1">
            <a
              className="nav-link navigate-tabs px-2"
              href="#web"
              data-rel="content5"
              onClick={clickHandler}
            >
              Web Design
            </a>
          </li> */}
        </ul>
      </span>
      <div className="content-container">
        <div
          id="content1"
          className="m-3 p-5"
        >
          <img src={all} alt="all" />
        </div>
        <div
          id="content2"
          className="m-3 p-5"
        >
          <img src={brand} alt="brand" />
        </div>
        <div
          id="content3"
          className="m-3 p-5"
        >
          <img src={photo} alt="photography" />
        </div>
        <div
          id="content4"
          className="m-3 p-5"
        >
          <img src={perfect} alt="perfect" />
        </div>
        <div
          id="content5"
          className="m-3 p-5"
        >
          <img src={web} alt="web" />
        </div>
      </div>
    </div>
  );
}
