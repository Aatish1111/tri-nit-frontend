import React from "react";
import "./Home.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
	<div className="main-container">
        <nav>
            <ul className="show v-class">
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About us</a></li>
                <li> <a href="#">Consultancy</a></li>
                <li><a href="#">Prescription</a></li>
                <li> <a href="#">Contact us</a></li>
            </ul>
			     <button className="white_btn" onClick={handleLogout}> Logout
            </button>
            <div className="burger">
                <div classNames="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    </div>
  );
};

export default Main;
