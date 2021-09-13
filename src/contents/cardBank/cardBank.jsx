import React from "react";

const CardBank = () => {
  return (
    <div className="fade show mb-3" id="card-bank">
      <div className="card border-0 shadow mt-3">
        <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5> ثبت کارت </h5>
        </div>
        <div className="card-body tarakoneshing pb-0">
          <form>
            <div className="row">
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span>نام بانک </span>
                    </div>
                  </div>
                  <select className="custom-select">
                    <option selected> انتخاب کنید . . . . </option>
                    <option> تجارت </option>
                    <option> رفاه </option>
                    <option> کشاورزی </option>
                    <option> شهر </option>
                    <option> آینده </option>
                    <option> ملی </option>
                    <option> ملت </option>
                    <option> صادرات </option>
                    <option> پاسارگاد </option>
                    <option> انصار </option>
                    <option> پارسیان </option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> نام کامل صاحب حساب </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> شماره کارت </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> شماره حساب </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span>شماره شبا </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> سرور درگاه شما </span>
                    </div>
                  </div>
                  <select className="custom-select">
                    <option> انتخاب کنید . . . </option>
                    <option> درگاه آپ </option>
                    <option> درگاه زرین پال </option>
                    <option> درگاه پارس کارت </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span>کد دسترسی خصوصی : </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </form>
          <div className="text-center mt-5 search-btn">
            <a href="#" className="btn shadow-sm border-0">
              {" "}
              ثبت{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="card mt-3 border-0 shadow">
        <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5> کارت های ثبت شده </h5>
        </div>
        <div className="card-body tarakoneshing card-bank2 pb-0">
          <div className="row justify-content-center">
            <div className="form-group col-12 col-lg-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-light px-4 rounded-pill border-0">
                    <span> نمایش </span>
                  </div>
                </div>
                <select className="custom-select bg-light">
                  <option selected> کارت های غیرفعال </option>
                  <option> کارت های فعال </option>
                  <option> سایر </option>
                </select>
              </div>
            </div>
          </div>
          <div className="card border-0 bg-light mb-5">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="d-lg-flex justify-content-between">
                    <div className="card border-0 rounded-pill bg-white flex-grow-1 ml-lg-2 mb-2 mb-lg-0">
                      <div className="card-body text-center py-4">
                        <p className="mb-0">
                          {" "}
                          <span> نام : </span> &nbsp;{" "}
                          <strong> محمد زنگنه </strong>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="card border-0 rounded-pill bg-white flex-grow-1">
                      <div className="card-body text-center py-4">
                        <p className="mb-0">
                          {" "}
                          <span> نام بانک : </span> &nbsp;{" "}
                          <strong> شهر </strong>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-flex justify-content-between mt-3">
                    <div className="card border-0 rounded-pill bg-white flex-grow-1 ml-lg-2 mb-2 mb-lg-0">
                      <div className="card-body text-center py-4">
                        <p className="mb-0">
                          {" "}
                          <span> شماره کارت : </span> &nbsp;{" "}
                          <strong> 5047061068150081 </strong>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="card border-0 rounded-pill bg-white flex-grow-1">
                      <div className="card-body text-center py-4">
                        <p className="mb-0">
                          {" "}
                          <span> Api_Card_Id : </span> &nbsp;{" "}
                          <strong> 1336_tej </strong>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 rounded-pill bg-white flex-grow-1 my-3">
                    <div className="card-body text-center py-4">
                      <p className="mb-0">
                        {" "}
                        <span> دکمه پرداخت : </span> &nbsp;{" "}
                        <strong className="text-danger">
                          {" "}
                          cvwpcqhqueblnvrucqyhzqazuvjvrwbu{" "}
                        </strong>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 border-lg-right left-card-bank">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0"> فعال </p>
                    <div className="custom-control custom-switch custom-switch1 pl-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="custom-Switch1"
                      />
                      <label
                        className="custom-control-label"
                        for="custom-Switch1"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0"> وضعیت کارت </p>
                    <p className="mb-0 text-danger"> مسدود </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0"> حذف کارت </p>
                    <a href="#delete_card" data-toggle="modal">
                      <i className="mb-0 text-muted fa fa-angle-left align-middle">
                        {" "}
                      </i>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0"> نمایش موجودی کارت </p>
                    <a href="#total_card" data-toggle="modal">
                      <i className="mb-0 text-muted fa fa-angle-left align-middle">
                        {" "}
                      </i>
                    </a>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0"> نمایش واریزی های کارت </p>
                    <a href="#transfers_card" data-toggle="modal">
                      <i className="mb-0 text-muted fa fa-angle-left align-middle">
                        {" "}
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBank;
