import React from "react";
import logo from "../logo.svg";
import "./Homepage.css"
function Homepage(props) {
  return (
  	<div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This is the homepage of Certosol web app.<br />
        Visit the account icon to generate or verify certificate.
        <br />
      </p>
    </header>
   	
    <footer className="footer">
    	Mini Project Group-25
    	<br />© 2020 Copyright: Aman Sharma, Vikas Gautam, Abhishek Gangwar
    	
    </footer>

    </div>
  );
}

export default Homepage;
