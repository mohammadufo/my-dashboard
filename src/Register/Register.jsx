import React, { useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { registerUser } from "./../Services/userService";

const Register = ({ history }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "حاجی این فیلد رو گذاشتم پر کنی مثلا :/",
        min: "کمتر از 5 کاراکتر نباشه که سرور گیر میده .",
        email: "خواهشا یه ایمیل درست بنویس زیرآبی نرو دیگه !",
      },
      element: (message) => (
        <div style={{ color: "red" }}>
          <small>{message}</small>
        </div>
      ),
    })
  );

  const reset = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
    };

    try {
      if (validator.current.allValid()) {
        const { status } = await registerUser(user);
        if (status === 201) {
          reset();
          toast.success("خب ! همه چی رواله و ثبت نام شدی !", {
            closeOnClick: true,
          });
          history.replace("/");
          reset();
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      toast.error("ثبت نام نشدی حاجی ! یجا سوتی دادی :/", {
        closeOnClick: true,
      });
      console.log(ex);
    }
  };

  return (
    <body class="bg-light">
      <div class="container-fluid mt-5">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-5">
            <div class="card border-0 shadow sign-up">
              <div class="card-header text-center bg-white border-0 custom-border">
                <h5 class="mb-0"> ثبت نام </h5>
              </div>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <div class="input-group mt-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text bg-transparent px-3">
                          <span>
                            {" "}
                            <i class="fa fa-user-o align-middle"></i>{" "}
                          </span>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="fullname"
                        class="form-control"
                        placeholder="نام و نام خانوادگی خود را وارد کنید . . . "
                        value={fullname}
                        onChange={(e) => {
                          setFullname(e.target.value);
                          validator.current.showMessageFor("fullname");
                        }}
                      />
                    </div>
                    {validator.current.message(
                      "fullname",
                      fullname,
                      "required|min:5"
                    )}

                    <div class="input-group mt-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text bg-transparent px-3">
                          <span>
                            {" "}
                            <i class="align-middle fa fa-envelope-o"></i>{" "}
                          </span>
                        </div>
                      </div>
                      <input
                        type="text"
                        name="email"
                        class="form-control"
                        placeholder="ایمیل خود را وارد کنید . . . "
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          validator.current.showMessageFor("email");
                        }}
                      />
                    </div>
                    {validator.current.message(
                      "email",
                      email,
                      "required|email"
                    )}
                    <div class="input-group mt-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text bg-transparent px-3">
                          <span>
                            {" "}
                            <i class="fa fa-lock align-middle"></i>{" "}
                          </span>
                        </div>
                      </div>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="رمز عبور خود را وارد کنید ..."
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          validator.current.showMessageFor("password");
                        }}
                      />
                    </div>
                    {validator.current.message(
                      "password",
                      password,
                      "required|min:5"
                    )}
                  </div>
                  <div class="mt-4">
                    <button type="submit" class="btn btn-block">
                      {" "}
                      ثبت نام{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border-0 shadow mt-3">
              <div class="card-body py-3 text-center">
                <p class="mb-0">
                  <span>
                    {" "}
                    قبلا ثبت نام کردی؟ پس اینجا چیکار میکنی؟! &nbsp;&nbsp;&nbsp;{" "}
                    <Link
                      to="/login"
                      style={{ color: "#6f42c1", textDecoration: "none" }}
                    >
                      {" "}
                      وارد شوید{" "}
                    </Link>{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <img src="img/Layer33.png" class="img-fluid" alt="footer" />
      </footer>
    </body>
  );
};

export default withRouter(Register);
