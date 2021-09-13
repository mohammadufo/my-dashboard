import React, { Fragment } from "react";

const EhrazHoviat = () => {
  return (
    <Fragment>
      <div className="fade show mb-3" id="ehraz">
        <div className="card border-0 shadow mt-3">
          <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
            <h5> ثبت گروه </h5>
          </div>
          <div className="card-body tarakoneshing cards-bank pb-0">
            <form>
              <div className="row">
                <div className="form-group col-12 col-lg-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent px-4">
                        <span> نام گروه : </span>
                      </div>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-group col-12 col-lg-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent px-4">
                        <span> شماره کارت : </span>
                      </div>
                    </div>
                    <select className="custom-select">
                      <option selected> انتخاب کنید . . . </option>
                      <option> تجارت </option>
                      <option> رفاه </option>
                      <option> صادرات </option>
                      <option> پارسیان </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center mt-5 search-btn">
              <a href="#" className="btn py-2 shadow-sm border-0">
                {" "}
                ثبت{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="card border-0 shadow mt-3">
          <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
            <h5> گروه های ثبت شده </h5>
          </div>
          <div className="card-body cards-bank2 tarakoneshing">
            <div className="row justify-content-center">
              <div className="form-group col-12 col-lg-6 d-lg-flex justify-content-between">
                <div className="input-group ml-3 mb-2 mb-lg-0">
                  <div className="input-group-prepend">
                    <div
                      className="input-group-text bg-light px-4 border-0"
                      style={{ borderRadius: "10px" }}
                    >
                      <span> نمایش بر اساس </span>
                    </div>
                  </div>
                  <select className="custom-select bg-light border-0">
                    <option selected> کارت </option>
                    <option> حساب </option>
                    <option> شبا </option>
                  </select>
                </div>
                <div className="input-group mr-lg-3 finger-gr position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="جستجو  . . . "
                  />
                  <a href="#" className="btn position-absolute shadow">
                    {" "}
                    <i className="fa fa-search align-middle"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="card border-0 bg-light mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 d-lg-flex justify-content-between align-items-center finger-gr2">
                    <div className="card border-0 bg-warning flex-grow-1 ml-lg-2 mb-2 mb-lg-0">
                      <div className="card-body text-center py-3">
                        <p className="mb-0">
                          <small>
                            {" "}
                            نام طراح : <strong> محمد </strong>{" "}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="card border-0 bg-warning flex-grow-1 ml-lg-2 mb-2 mb-lg-0">
                      <div className="card-body text-center py-3">
                        <p className="mb-0">
                          <small>
                            {" "}
                            شماره کارت : <strong> 585983115032412 </strong>{" "}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="card border-0 ml-lg-2 mb-2 mb-lg-0">
                      <div className="card-body text-center py-3">
                        <a href="#">
                          {" "}
                          <i className="fa fa-edit align-middle"></i>{" "}
                        </a>
                      </div>
                    </div>
                    <div className="card border-0 mb-2 mb-lg-0">
                      <div className="card-body text-center py-3">
                        <a href="#">
                          {" "}
                          <i className="align-middle fa fa-trash-o"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0 finger-gr3 mt-3">
                  <div className="card-body py-3 d-lg-flex justify-content-between align-items-center text-center">
                    <p style={{ fontSize: "24px" }}>
                      <small style={{ fontWeight: "100px" }}>
                        {" "}
                        گروه های ثبت شده تا کنون :{" "}
                        <strong style={{ fontWeight: "800" }}>
                          {" "}
                          198{" "}
                        </strong>{" "}
                      </small>
                    </p>
                    <a
                      href="#viwe-cards"
                      data-toggle="modal"
                      className="btn shadow border-0 py-2"
                    >
                      {" "}
                      مشاهده گروه ها{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="viwe-cards">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: "25px" }}>
            <div className="modal-header d-block text-center border-0">
              <h5> گروه های ثبت شده </h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 d-lg-flex justify-content-between align-items-center finger-gr2">
                  <div className="card border-0 bg-warning flex-grow-1 ml-lg-2 mb-2 mb-lg-0">
                    <div className="card-body text-center py-3">
                      <p className="mb-0">
                        <small>
                          {" "}
                          نام طراح: <strong> محمد زنگنه </strong>{" "}
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card border-0 bg-warning flex-grow-1 ml-lg-2 mb-2 mb-lg-0">
                    <div className="card-body text-center py-3">
                      <p className="mb-0">
                        <small>
                          {" "}
                          شماره کارت : <strong> 5047061068150081 </strong>{" "}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 my-4 offset-lg-4">
                  <div className="input-group mr-lg-3 finger-gr finger-gr4 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="جستجو  . . . "
                    />
                    <a href="#" className="btn position-absolute shadow">
                      {" "}
                      <i className="fa fa-search align-middle"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="card border-0 rounded-pill bg-light">
                <div className="card-body d-flex justify-content-between align-items-center py-3">
                  <p className="mb-0">
                    <small>
                      {" "}
                      نام : <strong> محمد زنگنه </strong>{" "}
                    </small>
                  </p>
                  <p className="mb-0">
                    <small>
                      {" "}
                      شناسه : <strong> 123641 </strong>{" "}
                    </small>
                  </p>
                  <div className="custom-control custom-radio pl-2">
                    <input
                      type="radio"
                      id="cur3"
                      name="cur3"
                      className="custom-control-input custom-control-input2"
                    />
                    <label
                      className="custom-control-label custom-control-label2"
                      for="cur3"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="card border-0 rounded-pill bg-light">
                <div className="card-body d-flex justify-content-between align-items-center py-3">
                  <p className="mb-0">
                    <small>
                      {" "}
                      نام : <strong> محمد زنگنه </strong>{" "}
                    </small>
                  </p>
                  <p className="mb-0">
                    <small>
                      {" "}
                      شناسه : <strong> 123641 </strong>{" "}
                    </small>
                  </p>
                  <div className="custom-control custom-radio pl-2">
                    <input
                      type="radio"
                      id="cur2"
                      name="cur3"
                      className="custom-control-input custom-control-input2"
                    />
                    <label
                      className="custom-control-label custom-control-label2"
                      for="cur2"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="card border-0 rounded-pill bg-light">
                <div className="card-body d-flex justify-content-between align-items-center py-3">
                  <p className="mb-0">
                    <small>
                      {" "}
                      نام : <strong> محمد زنگنه </strong>{" "}
                    </small>
                  </p>
                  <p className="mb-0">
                    <small>
                      {" "}
                      شناسه : <strong> 123641 </strong>{" "}
                    </small>
                  </p>
                  <div className="custom-control custom-radio pl-2">
                    <input
                      type="radio"
                      id="cur1"
                      name="cur3"
                      className="custom-control-input custom-control-input2"
                    />
                    <label
                      className="custom-control-label custom-control-label2"
                      for="cur1"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="card border-0 rounded-pill bg-light">
                <div className="card-body d-flex justify-content-between align-items-center py-3">
                  <p className="mb-0">
                    <small>
                      {" "}
                      نام : <strong> محمد زنگنه </strong>{" "}
                    </small>
                  </p>
                  <p className="mb-0">
                    <small>
                      {" "}
                      شناسه : <strong> 123641 </strong>{" "}
                    </small>
                  </p>
                  <div className="custom-control custom-radio pl-2">
                    <input
                      type="radio"
                      id="cur4"
                      name="cur3"
                      className="custom-control-input custom-control-input2"
                    />
                    <label
                      className="custom-control-label custom-control-label2"
                      for="cur4"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EhrazHoviat;
