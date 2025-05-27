import React from "react";
import html5 from "./img/logoh.png";
import css3 from "./img/logoc.png";
import bootstrap from "./img/logob.png";

function Ex4() {
  return (
    <div className="container text-center mt-5">
      <div className="bg-light p-4">
        <h2>My First Bootstrap Page</h2>
      </div>

      <div className="row justify-content-center align-items-center mt-4">
        <div className="col-md-4">
          <img src={html5} alt="HTML5 Logo" className="img-fluid" style={{ height: "150px", objectFit: "contain" }} />
        </div>
        <div className="col-md-4">
          <img src={css3} alt="CSS3 Logo" className="img-fluid" style={{ height: "150px", objectFit: "contain" }} />
        </div>
        <div className="col-md-4">
          <img src={bootstrap} alt="Bootstrap Logo" className="img-fluid" style={{ height: "150px", objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

export default Ex4;
