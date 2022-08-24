import React from "react";

export default function Login(){
    return (
        <div className="login_container">

            <form>
                <h2>Login</h2>
      
                <div>
                    <label>Email</label>
                    <input placeholder="Enter Email" name="email" type="email"/>
                </div>
          
                <div>
                    <label>Password</label>
                    <input placeholder="Enter Password" name="password" type="password"/>
                </div>
            
                <button>Login</button>
            
            </form>
        </div>
    )
}