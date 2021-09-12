import React from "react";
import image from "../../assets/image/screenshot/memoapp-baner.jpg";
import "../styles/Modal.css";
const URL = "https://dbriceno10.github.io/memo-app/";

const Proyect04 = () => {
  return (
    <React.Fragment>
      <div className="modal-internal-container">
        <img src={image} alt="image" className="proyect-image" />
        <div className="">
          <p className="modal__title">Memo App</p>
          <p>
            A simple notes app, to organize quick tasks, made with bootstrap and
            fully responsive.
            <br />
            Technologies applied: HTML, CSS, JavaScript, Git/Github, Bootstrap.
          </p>
          <div className="link-container">
            <a href={URL} target="__blank" className="btn btn_primary">
              Visit Page
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Proyect04;
