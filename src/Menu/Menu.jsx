import React from "react";
import { Link, withRouter } from "react-router-dom";

const MainMenu = (props) => {
  return (
    <div className="my-3">
      <div className="card border-0 shadow right-side d-flex flex-column">
        <div className="card-header bg-transparent border-0" id="headingone">
          <h5 className="mb-0 d-block text-center">
            <button className="btn btn-link">ParsCart</button>
          </h5>
        </div>
        <div id="collapseone" className="show">
          <div className="card-body d-flex flex-column justify-content-between px-0">
            <ul className="list-group">
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/">
                  {" "}
                  <i
                    className="fa fa-home ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  خانه{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/tarakonesh">
                  {" "}
                  <i
                    className="fa fa-list ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  تراکنش{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/codegetter">
                  {" "}
                  <i
                    className="fa fa-qrcode ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  کد پذیرنده{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/cardbank">
                  {" "}
                  <i
                    className="fa fa-credit-card ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  کارت بانکی{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/karmozd">
                  {" "}
                  <i
                    className="fa fa-money ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  کارمزد{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/transfor">
                  {" "}
                  <i
                    className="fa fa-refresh ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  انتقال وجه{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/helpuser">
                  {" "}
                  <i
                    className="fa fa-cubes ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  راهنما{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/plagin">
                  {" "}
                  <i
                    className="fa fa-pie-chart ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  پلاگین{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/ehraz">
                  {" "}
                  <i
                    className="fa fa-street-view ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  احراز هویت{" "}
                </Link>
              </li>
              <li className="list-group-item border-0 py-2 rounded-0 mb-3 pr-4">
                <Link to="/support">
                  {" "}
                  <i
                    className="fa fa-life-ring ml-3 align-middle"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  پشتیبانی{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <small className="d-block text-center text-white mt-auto mb-3">
          {" "}
          Copy Right 2020 &copy;{" "}
        </small>
      </div>
    </div>
  );
};

export default withRouter(MainMenu);
