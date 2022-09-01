import React from "react";
import Navbar from"/Navbar";
// import Footer from "/Footer"

import "./About.css"


const About = () => {
  return (
    <div className="about">
            { <Navbar/> }
            <h1>Welcome Back</h1>
            <body>
              <div>
              <form>
                    <div>
                        <label className="label">Your email</label><br/><input  className="input" type={"email"} placeholder={"name@domain.com"} />
                    </div>
                    <div>
                        <label className="label">Password</label><br/><input className="input" type={"password"} placeholder={"at least 8 characters"} />
                    </div>
                    <div>
                    <input type={"checkbox"}/><label>Keep me logged in</label><span className="forget">Forgot password?</span>
                    </div>

                    <button>Login</button><br/>
                    <div className="or"><hr/><span>Or</span><hr/></div>

                </form>
              </div>
                
                {/* <div className="image"><img src={myImage} alt="login"/></div> */}
            </body>
        </div>
  );
};
export default About;
