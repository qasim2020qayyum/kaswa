import React from "react";

function Projects(props) {
  return (
    <div className="card">
      <ul className="cards">
        <li>
          <a href="" className="card">
            <img src={props.img} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src={props.avatar} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">{props.title}</h3>
                  <span className="card__status">{props.status}</span>
                </div>
              </div>
              <hr className="line" />
              <p className="card__description">{props.description}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
