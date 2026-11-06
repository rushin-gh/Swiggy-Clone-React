import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div id="header" className="body-components">
      <div id="logo-container">
        <img
          id="logo"
          src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Logo.png"
          alt="swiggy-logo"
          width="100px"
        />
      </div>

      <div id="navbar">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body" className="body-components">
      <div id="search-container">
        <input type="text" placeholder="Search item" />
        &nbsp;&nbsp;
        <button type="submit">Search</button>
      </div>
      <div id="resto-container">
        <RestoCard />
      </div>
    </div>
  );
};

const RestoCard = () => {
  return (
    <div className="resto-card">
      <div id="resto-card-item-img">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/5252eb92-951f-4501-9260-9ea1dec54a29_1113168.JPG"
          alt="Momo Kraft"
          className="sc-iktELE llRbQl"
          width="200px"
          height="200px"
        />
      </div>
      <h2>Meghana Foods</h2>
      <h4>Veg + Chicken Biryani</h4>
      <div id="item-details">
        <span>4*</span>
        <span>30 Min</span>
        <span>300 Price for 2</span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div id="footer" className="body-components">
      <h3>Copyright</h3>
      <h3>Links</h3>
      <h3>Address</h3>
      <h3>Contact</h3>
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
