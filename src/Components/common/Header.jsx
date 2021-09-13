import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="card border-0 shadow left-side">
      <div className="card-body d-lg-flex justify-content-between text-center align-items-center py-3">
        <div>
          <div
            className="card border-0 bg-light"
            style={{ borderRadius: "25px , 0, 0, 0" }}
          >
            <div className="card-body d-flex justify-content-between py-3 info">
              <p className="mb-0">
                <i className="fa fa-angle-left align-middle text-muted"></i>{" "}
                &nbsp; &nbsp; روز جاری : ریال
              </p>
              <p className="mb-0 mx-4">
                <i className="fa fa-angle-left align-middle text-muted"></i>{" "}
                &nbsp; &nbsp; ماه جاری : ریال
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <NavLink
              to="/login"
              activeStyle={{ color: "#000" }}
              className="btn btn-link"
              style={{ color: " #cdcdcd", textDecoration: "none" }}
            >
              {" "}
              ورود{" "}
            </NavLink>
            /
            <NavLink
              to="/register"
              activeStyle={{ color: "#000" }}
              className="btn btn-link"
              style={{ color: " #cdcdcd", textDecoration: "none" }}
            >
              {" "}
              ثبت نام{" "}
            </NavLink>
            <img
              src="img/businessman.png"
              className="img-fluid mt-3 mt-lg-0"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
