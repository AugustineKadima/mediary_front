import React from "react";

export default function NavBar(){
    return (
        <div className="navbar_container">

            <div className="navbar_wrapper">
                <h2>Mediary</h2>
                <div className="nav_buttons_wrapper">
                    <button id="signup_btn">Sign Up</button>
                    <button id="login_btn">Login</button>
                </div>
            </div>

        </div>
    )
}