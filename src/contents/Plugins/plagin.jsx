import React from "react";

const Plagins = () => {
  return (
    <div className="fade show mb-3">
      <div className="card border-0 shadow mt-3">
        <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5> پلاگین </h5>
        </div>
        <div className="card-body plugin-box">
          <p> راهنمای استفاده از اسکریپت : </p>
          <p>
            برای اتصال به سایت ، شما باید از اسکریپت آسان پرداخت بر پایه ی php
            یا asp یا node.js استفاده کنید . این پلاگین ها طراحی شده و شما
            میتوانید بر حسب نیاز خود هرکدام را از باکس ها زیر دانلود کنید !!
            لازم به ذکر است که شما باید در قسمت کد پذیرنده ، کد پذیرنده ی خود را
            که از بخش سمت راست منو قابل دسترس هست تهیه کنید .
          </p>
          <p>
            <i className="fa fa-bell-o ml-3 align-middle"></i> کد پذیرنده شما :
            api_123635 است و کارت آیدی شما : card_id856321 است{" "}
          </p>
          <div className="bg-light p-3 plugin-box">
            <div className="card border-0 mb-3">
              <div className="card-body">
                <p className="mb-0 text-center"> اسکریپت آسان پرداخت </p>
              </div>
            </div>
            <div className="d-lg-flex justify-content-between">
              <div
                className="card mb-0 border-0 mb-lg-0 flex-grow-1 mx-3"
                style={{ cursor: "pointer" }}
              >
                <div className="card-body justify-content-center align-items-center d-flex">
                  <span className="ml-2"> PHP </span>
                  <img src="img/zip.png" className="img-fluid" alt="dlzip" />
                </div>
              </div>
              <div
                className="card mb-0 border-0 mb-lg-0 flex-grow-1 mx-3"
                style={{ cursor: "pointer" }}
              >
                <div className="card-body justify-content-center align-items-center d-flex">
                  <span className="ml-2"> Asp.Net </span>
                  <img src="img/zip.png" className="img-fluid" alt="dlzip" />
                </div>
              </div>
              <div
                className="card mb-0 border-0 mb-lg-0 flex-grow-1 mx-3"
                style={{ cursor: "pointer" }}
              >
                <div className="card-body justify-content-center align-items-center d-flex">
                  <span className="ml-2"> Node.Js </span>
                  <img src="img/zip.png" className="img-fluid" alt="dlzip" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plagins;
