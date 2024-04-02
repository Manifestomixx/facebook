import React from "react";
import facebookImg from "../assets/facebook.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Main = () => {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center">
        <div className="container row justify-content-between align-items-center mt-5">
          {/* div 1 */}
          <div className="col-lg-6  ">
            <img
              src={facebookImg}
              alt="facebook-image"
              className="img-fluid photo"
            />
            <h2 className="">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="col-lg-5 p-3 shadow bg-white formside">
            <Form>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address or phone number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="button1">
                Log in
              </Button>
              <label className="d-flex justify-content-center mt-3 pass under">
                {" "}
                Forgotten password?
              </label>
              <hr />
              <Button
                variant="success"
                type="submit"
                className="button2 mt-3 mb-3"
              >
                Create New Account
              </Button>
            </Form>
          </div>
          <div className="text-lg-end page my-4 ">
            <p>
              <strong className="under">Create a Page</strong> for a celebrity,
              brand or business.
            </p>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default Main;
