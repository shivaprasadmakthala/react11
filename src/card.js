import React from "react";

function Card(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className=" card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className=" card-title text-muted text Uppercase text-center">
              {props.card.plan}
            </h5>
            <h6 className=" card-price text-center">
              {props.card.price}
              <span className=" period">/month</span>
            </h6>
            <hr />
            <ul className=" fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                <span
                  style={
                    props.card.users === "Single User"
                      ? { fontWeight: "normal" }
                      : { fontWeight: "bold" }
                  }
                >
                  {props.card.users}
                </span>
              </li>
              {props.card.features.map((value) => {
                return (
                  <li className={`${value.isEnabled ? "" : "text-muted"}`}>
                    <span className="fa-li">
                      <i
                        className={`fa ${
                          value.isEnabled ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </span>
                    {value.feature}
                  </li>
                );
              })}
            </ul>
            <div classname="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
