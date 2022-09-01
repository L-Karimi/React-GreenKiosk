import girlsbg from "./girlsbg.png";
// import eddie from "/.images/.eddie.png";
import React, {useState,useEffect} from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./About.css";

const About = () => {
  const [email,setEmail] = useState("");
  console.log(email);
  const [password,setPassword] = useState("");

  const handleSubmit=()=>{
    const data ={
      Email:email,
      password:password


    }
    alert(JSON.stringify(data));
  }
  return (
    <div className="form">
      <div className="fillingForm">
        <span>EddieShop</span>

        <form onSubmit={handleSubmit}>
          {/* <img src={eddie} alt="logo" className="eddie"  /> */}
          <br />
          <h2>Welcome Back</h2>
          <br />
          <h4>
            Your email <br />
            <br />
            <input className="input" type={"email"} placeholder="name@domain.com" onChange={(e)=>{setEmail (e.target.value)}} />
          </h4>
          <br />
          
          <h4>
            Password <br />
            <input className="input" placeholder="Atleast 8 characters" type={"password"}   onChange={(e)=>{setPassword (e.target.value)}} />
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

          <button type="Submit" >Login</button>
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
