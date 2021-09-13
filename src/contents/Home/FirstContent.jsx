import React from "react";
import Chart from "./Example";

const FirstContent = () => {
  return (
    <div className="tab-pane fade active show  mb-3" id="home">
      <div className="alert my-4 custom-alert">
        <Chart />
      </div>
      <div className="card border-0 shadow chart">
        <div className="card-header text-center bg-transparent border-0 mb-3">
          <h5> فروش ماه های اخیر </h5>
        </div>
        <div className="card-body">
          <ul className="nav pr-0 flex-column flex-lg-row text-center justify-content-around last-sale-btn">
            <li className="nav-item">
              <a href="#far" data-toggle="tab" className="btn px-4 py-2 active">
                {" "}
                فروردین{" "}
              </a>
              <a href="#ord" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                اردیبهشت{" "}
              </a>
              <a href="#khr" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                خرداد{" "}
              </a>
              <a href="#tir" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                تیر{" "}
              </a>
              <a href="#mor" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                مرداد{" "}
              </a>
              <a href="#shr" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                شهریور{" "}
              </a>
              <a href="#mhr" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                مهر{" "}
              </a>
              <a href="#abn" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                آبان{" "}
              </a>
              <a href="#azr" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                آذر{" "}
              </a>
              <a href="#dy" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                دی{" "}
              </a>
              <a href="#bhm" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                بهمن{" "}
              </a>
              <a href="#esf" data-toggle="tab" className="btn px-4 py-2">
                {" "}
                اسفند{" "}
              </a>
            </li>
          </ul>
          <div className="card border-0 mt-4">
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane active show fade" id="far">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="ord">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="khr">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="mor">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="tir">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="shr">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="mhr">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="abn">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="azr">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="dy">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="bhm">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane show fade" id="esf">
                  <table className="table text-center border-0 table-borderless table-responsive-md table-trac">
                    <thead className="bg-light">
                      <tr>
                        <th> ردیف : </th>
                        <th> مبلغ (تومان) : </th>
                        <th> نمره : </th>
                        <th> وضعیت تسویه : </th>
                        <th> بهترین این ماه : </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> 200.000 </td>
                        <td> 6.8 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (1).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> 390.000 </td>
                        <td> 8.5 از 10 </td>
                        <td className="text-danger">
                          <i className="fa fa-times"></i> تسویه نشده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/medal (2).png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> 96.000 </td>
                        <td> 3.2 از 10 </td>
                        <td className="text-success">
                          <i className="fa fa-check"></i> تسویه شده{" "}
                        </td>
                        <td>
                          {" "}
                          <img
                            src="img/third.png"
                            className="img-fluid d-block mx-auto"
                            alt="medal2"
                          />{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
