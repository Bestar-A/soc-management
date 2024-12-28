import React, { useState } from "react";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../store/slices/usersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../store/slices/authSlice";
import signup from "../assets/images/Robots.webp";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register, { isLoading }] = useRegisterMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await register({
        name,
        password,
        email,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("User Register Success");
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <section data-aos="zoom-in">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <Link to="/login" style={{position:"absolute", top:"30px",  left:"30px"}}>
                    <i className="fa fa-arrow-left fa-3x text-secondary"></i>
                  </Link>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-1">
                    <img
                      src={signup}
                      className="rounded-3"
                      alt="Sample"
                      width="600px"
                      height="550px"
                    />
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-secondary">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="name"
                            id="firstName"
                            className="form-control"
                            placeholder="Enter FirstName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-2x me-3 fa-fw text-secondary"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Repeat your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg w-100"
                          onClick={signupHandler}
                        >
                          Register
                        </button>
                        { isLoading && <Loader /> }
                      </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
