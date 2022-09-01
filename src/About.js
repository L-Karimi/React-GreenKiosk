import React from "react";
import "//About.css"


const About = () => {
  return (
    <div style={{backgroundColor:"yellow"}}>
      <h1>This is my about page</h1>
      <p>Our company website is build using React</p>

      <div>
        <h3>EddieShop</h3>
        <p>Dont have an account?Sign up</p>
        <h2>Welcome Back</h2>
        <form>

          <label for="email">Your Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email"></input>
          <label for="password">Password</label>
          <input type="text" id="password" name="password" placeholder="Enter your password"></input>
          <input type="checkbox" id="checkbox" name="checkbox"   value="logged in"></input>

          <label for="checkbox">Keep me logged in</label>

          <p> Forgot password?</p>
          <div>
          </div>
        </form>
        <button type="submit" value="Submit">Submit</button>
       
      </div>
    </div>
  );
};
export default About;
