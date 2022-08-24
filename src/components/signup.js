import React from "react";

export default function SignUp(){
    return (
        <div className="sign_up_container">
            <form>
                <h2>Sign Up</h2>
                <div>
                    <label>Name</label>
                    <input placeholder="Enter Name" name="name" type="text"/>
                </div>
                <div>
                    <label>Username</label>
                    <input placeholder="Enter Username" name="username" type="text"/>
                </div>
                <div>
                    <label>Email</label>
                    <input placeholder="Enter Email" name="email" type="email"/>
                </div>
                <div>
                    <label>Age</label>
                    <input placeholder="Enter Age" name="age" type="number"/>
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder="Enter Password" name="password" type="password"/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input placeholder="Confirm Password" name="confirm_password" type="password"/>
                </div>

                <button>Sign Up</button>
            
            </form>
        </div>
    )
}