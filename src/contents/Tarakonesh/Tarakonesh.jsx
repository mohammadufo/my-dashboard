import React from "react";

const Tarakonesh = () => {
  return (
    <div className="fade show mb-3">
      <div className="card border-0 shadow mt-3">
        <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5> جستجو </h5>
        </div>
        <div className="card-body tarakoneshing pb-0">
          <form>
            <div className="row">
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> کارت مبدا </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> کارت مقصد </span>
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
                      <span> فاکتور </span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-12 col-lg-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-transparent px-4">
                      <span> شناسه بانکی</span>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 form-group">
                <a href="#" className="btn btn-light btn-block py-2">
                  <i className="fa fa-times align-middle ml-2 text-danger"></i>{" "}
                  تراکنش ناموفق
                </a>
              </div>
              <div className="col-12 col-lg-6 form-group">
                <a href="#" className="btn btn-light btn-block py-2">
                  <i className="fa fa-check align-middle ml-2 text-success"></i>{" "}
                  تراکنش موفق
                </a>
              </div>
            </div>
          </form>
          <div className="text-center mt-5 search-btn">
            <a href="#" className="btn shadow-sm border-0">
              {" "}
              جستجو{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="card border-0 shadow mt-4">
        <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5 className="mt-3"> تراکنش های یافت شده : </h5>
        </div>
        <div className="card-body tarakoneshing pb-0">
          <table className="table text-center table-trac border-0 table-borderless table-responsive-md">
            <thead>
              <tr>
                <th> مبلغ (تومان) </th>
                <th>فاکتور </th>
                <th>کارت مبدا </th>
                <th>شناسه بانکی </th>
                <th>کارت مقصد </th>
                <th> زمان تراکنش </th>
                <th> وضعیت تراکنش </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> 200.000 </td>
                <td> 22151502016 </td>
                <td> 440510890909909959 </td>
                <td> 5909480999 </td>
                <td> 501809909087515058 </td>
                <td> 98/05/15 01:15 </td>
                <td className="text-success">
                  <i className="fa fa-check align-middle ml-2"></i> موفق{" "}
                </td>
              </tr>
              <tr>
                <td> 200.000 </td>
                <td> 22151502016 </td>
                <td> 440510890909909959 </td>
                <td> 5909480999 </td>
                <td> 501809909087515058 </td>
                <td> 98/05/15 01:15 </td>
                <td className="text-danger">
                  <i className="fa fa-times align-middle ml-2"></i> ناموفق{" "}
                </td>
              </tr>
              <tr>
                <td> 200.000 </td>
                <td> 22151502016 </td>
                <td> 440510890909909959 </td>
                <td> 5909480999 </td>
                <td> 501809909087515058 </td>
                <td> 98/05/15 01:15 </td>
                <td className="text-success">
                  <i className="fa fa-check align-middle ml-2"></i> موفق{" "}
                </td>
              </tr>
              <tr>
                <td> 200.000 </td>
                <td> 22151502016 </td>
                <td> 440510890909909959 </td>
                <td> 5909480999 </td>
                <td> 501809909087515058 </td>
                <td> 98/05/15 01:15 </td>
                <td className="text-success">
                  <i className="fa fa-check align-middle ml-2"></i> موفق{" "}
                </td>
              </tr>
              <tr>
                <td> 200.000 </td>
                <td> 22151502016 </td>
                <td> 440510890909909959 </td>
                <td> 5909480999 </td>
                <td> 501809909087515058 </td>
                <td> 98/05/15 01:15 </td>
                <td className="text-danger">
                  <i className="fa fa-times align-middle ml-2"></i> ناموفق{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tarakonesh;
