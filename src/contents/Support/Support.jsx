import React from "react";

const Support = () => {
  return (
    <div class="fade show mb-3" id="helper">
      <div class="card border-0 shadow mt-3">
        <div class="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5> پشتیبانی </h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-lg-6 offset-lg-3">
              <form class="helper">
                <div class="form-group">
                  <label> عنوان تیکت : </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label> اهمیت تیکت : (زیاد ، متوسط ، کم ) </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label> شماره سفارش : </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label> شرح مشکل : </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    class="d-block w-100"
                    placeholder="شرح مشکل خود را به صورت کامل بنویسید "
                  ></textarea>
                </div>
                <div class="form-group d-flex justify-content-center mt-5">
                  <a href="#" class="btn px-4">
                    {" "}
                    ارسال{" "}
                  </a>
                  <a href="#" class="btn mx-3 px-4">
                    {" "}
                    پاک کردن{" "}
                  </a>
                  <a href="#" class="btn px-4">
                    {" "}
                    انصراف{" "}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
