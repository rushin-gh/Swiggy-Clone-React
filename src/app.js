import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div id="header" className="temp-comp">
      <div>
        <img
          id="logo"
          src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Logo.png"
          alt="swiggy-logo"
          width="75px"
        />
      </div>

      <div id="navbar">
        <h6>Home</h6>
        <h6>About us</h6>
        <h6>Contact</h6>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body" className="temp-comp">
      <h4>Search bar</h4>
      <div>
        <h5>Restaurant Card</h5>
        <h6>Restaurant</h6>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div id="footer" className="temp-comp">
      <h6>Copyright</h6>&nbsp;&nbsp;
      <h6>Links</h6>&nbsp;&nbsp;
      <h6>Address</h6>&nbsp;&nbsp;
      <h6>Contact</h6>
    </div>
  );
};

const App = () => {
  return (
    <div id="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
