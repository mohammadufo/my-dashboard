import React from "react";

const CodeGetter = () => {
  return (
    <div className="fade show mb-3" id="getter-code">
      <div className="card border-0 shadow mt-3">
        <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5> ثبت برای دریافت کد پذیرنده </h5>
        </div>
        <div className="card-body tarakoneshing card-bank pb-0">
          <form>
            <div className="row">
              <div className="form-group col-12 col-lg-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> آدرس سایت </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group col-12 col-lg-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> آی پی سایت </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12 col-lg-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> عنوان سایت </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group col-12 col-lg-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> موضوع فعالیت سایت </span>
                    </div>
                  </div>
                  <select className="custom-select">
                    <option selected> انتخاب کنید . . . </option>
                    <option> فروشگاهی </option>
                    <option> خدماتی </option>
                    <option> نرم افزار و بازی </option>
                    <option> صنایع دستی </option>
                    <option> آموزش آنلاین </option>
                    <option> فروشگاه فرهنگی خاص </option>
                    <option> بلاگ اعضای ویژه </option>
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
        <div className="card-body tarakoneshing card-bank pb-0">
          <div
            className="card border-0 bg-light mb-3"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body d-lg-flex justify-content-between pb-2">
              <div
                className="card border-0 flex-grow-1 ml-lg-2 mb-2 mb-lg-0 text-center"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body">
                  <p className="mb-0">
                    <small>
                      {" "}
                      آدرس سایت :{" "}
                      <strong style={{ fontSize: "10px" }}>
                        {" "}
                        muhammad.UFO.com
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
              <div
                className="card border-0 flex-grow-1 ml-lg-2 mb-2 mb-lg-0 text-center"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body">
                  <p className="mb-0">
                    <small>
                      {" "}
                      آی پی سایت :{" "}
                      <strong style={{ fontSize: "17px" }}>
                        {" "}
                        192.168.1.7{" "}
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body d-lg-flex justify-content-between pb-2">
              <div
                className="card border-0 flex-grow-1 ml-lg-2 mb-2 mb-lg-0 text-center"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body">
                  <p className="mb-0">
                    <small>
                      {" "}
                      API_Token : &nbsp; &nbsp;{" "}
                      <strong style={{ fontSize: "17px" }}>
                        {" "}
                        pjrwninviwrhdipowqvbmnbmvbklbnnq{" "}
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
              <div
                className="card border-0 flex-grow-2 px-5 text-center"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body py-3">
                  <p className="mb-0">
                    <small>
                      {" "}
                      وضعیت :{" "}
                      <strong
                        className="text-success"
                        style={{ fontSize: "17px" }}
                      >
                        {" "}
                        <i className="fa fa-check"></i> فعال{" "}
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card border-0 bg-light mb-3"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body d-lg-flex justify-content-between pb-2">
              <div
                className="card border-0 flex-grow-1 ml-lg-2 mb-2 mb-lg-0 text-center"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body">
                  <p className="mb-0">
                    <small>
                      {" "}
                      آدرس سایت :{" "}
                      <strong style={{ fonsSize: "17px" }}>
                        {" "}
                        muhammad.UFO.com{" "}
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
              <div
                className="card border-0 flex-grow-1 ml-lg-2 mb-2 mb-lg-0 text-center"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body">
                  <p className="mb-0">
                    <small>
                      {" "}
                      آی پی سایت :{" "}
                      <strong style={{ fonsSize: "17px" }}>
                        {" "}
                        192.168.1.7{" "}
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body d-lg-flex justify-content-between pb-2">
              <div className="card border-0 flex-grow-1 ml-lg-2 mb-2 mb-lg-0 text-center">
                <div className="card-body">
                  <p className="mb-0">
                    <small>
                      {" "}
                      API_Token : &nbsp; &nbsp;{" "}
                      <strong style={{ fonsSize: "17px" }}>
                        {" "}
                        pjrwninviwrhdipowqvbmnbmvbklbnnq{" "}
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
              <div
                className="card border-0 flex-grow-2 px-5 text-center"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body py-3">
                  <p className="mb-0">
                    <small>
                      {" "}
                      وضعیت :{" "}
                      <strong
                        className="text-danger"
                        style={{ fonsSize: "17px" }}
                      >
                        {" "}
                        <i className="fa fa-times"></i> غیرفعال{" "}
                      </strong>{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGetter;
