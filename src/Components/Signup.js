import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User Register");
        alert('User Register')
      });
  }

  render() {
    return (
      <>
        <section className="vh-100 bg-image">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card">
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        Create an account
                      </h2>

                      <form onSubmit={this.handlesubmit}>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            placeholder="First Name"
                            onChange={(e) =>
                              this.setState({ fname: e.target.value })
                            }
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Last Name"
                            onChange={(e) =>
                              this.setState({ lname: e.target.value })
                            }
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                          />
                        </div>

                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          >
                            Register
                          </button>
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">
                          Have already an account?{" "}
                          <Link to="/" className="fw-bold text-body">
                            <u>Login here</u>
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Signup;
