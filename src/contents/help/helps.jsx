import React from "react";

const HelpUser = () => {
  return (
    <div className="fade show mb-3" id="hp">
      <div className="card border-0 shadow mt-3">
        <div className="card-header border-0 bg-transparent text-center tarakonesh-head">
          <h5> راهنما </h5>
        </div>
        <div className="card-body tarakoneshing card-bank pb-0">
          <p className="text-justify para1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <div>
            <img src="img/Layer 2.png" className="img-fluid" alt="hp1" />
            <div className="card-header border-0 bg-transparent text-center tarakonesh-head my-4">
              <h5> استفاده از سیستم </h5>
            </div>
            <div>
              <img src="img/Layer 3.png" className="img-fluid" alt="hp2" />
            </div>
            <div className="para2">
              <p className="mt-4">
                {" "}
                برای حمایت مالی از ما لطفا مبلغ را وارد کرده و دکمه "پرداخت" را
                بزنید !{" "}
              </p>
              <div className="row justify-content-center">
                <div className="form-group col-12 col-lg-5">
                  <div className="input-group mr-lg-3 position-relative finger-gr">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="مبلغ دلخواه را وارد کنید . . . "
                    />
                    <a href="#" className="btn shadow position-absolute">
                      {" "}
                      پرداخت{" "}
                    </a>
                  </div>
                </div>
              </div>
              <p>
                {" "}
                بانک های تحت پوشش سامانه درگاه پرداخت پارس کارت در لیست زیر
                موجود است :{" "}
              </p>
            </div>
            <div>
              <img src="img/Layer 4.png" className="img-fluid" alt="hp3" />
            </div>
            <div className="para1">
              <p className="text-justify mt-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpUser;
