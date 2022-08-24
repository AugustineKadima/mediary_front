import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <div className="navbar_container">

            <div className="navbar_wrapper">
                <NavLink to="/"><h2>Mediary</h2></NavLink>
                <div className="nav_buttons_wrapper">
                   <NavLink to="/signup"> <button id="signup_btn">Sign Up</button></NavLink>
                    <button id="login_btn">Login</button>
                </div>
            </div>

        </div>
    )
}