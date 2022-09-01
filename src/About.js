import React from "react";
import girlsbg from "./girlsbg.png";
// import eddie from "/.images/.eddie.png";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="form">
      <div className="fillingForm">
      <span>EddieShop</span>

        <form>
          {/* <img src={eddie} alt="logo" className="eddie"  /> */}
<br/>
          <h2>Welcome Back</h2>
          <br />
          <h4>
            Your email <br />
            <br />
            <input className="input" placeholder="name@domain.com" />
          </h4>
          <br />
          <h4>
            Password <br />
            <input className="input" placeholder="at least 8 characters" />
          </h4>
          <br />
          <div className="keep">
            <h4>
              <input type="checkbox" name="checkbox" id="checkbox" /> Keep me
              logged in
            </h4>
            <p>Forgot password?</p>
          </div>

          <br />
          <button>Login</button>
          <br />
          <br />
          <h3>____________or____________</h3>
          <br />
          <div className="social-media">
            <FaFacebook className="facebook" />
            <FaGooglePlus className="google" />
            <FaInstagram className="instagram" />
          </div>
        </form>
      </div>
      <div className="biker">
        <h4 className="signUp">
          Don't have an account? <a href="#signUp">Sign Up</a>{" "}
        </h4>
        <img src={girlsbg} alt="biker" className="girls" height={300} />
      </div>
    </div>
  );
};
export default About;
