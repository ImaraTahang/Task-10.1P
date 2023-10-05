import React from "react";
import './Form.css';
import {Link} from "react-router-dom";

function LoginPage(){
    return <div>
        <h1>Login </h1>
        <div className="form-container">
            <form action="/">
                <div className="align-right">
                    <Link to='/Create' className="align-right">Sign Up</Link><br></br>
                </div>
                <label>Your email:</label><br />
                <input type="text" id="email" name="email" /><br />
                <label>Your password:</label><br />
                <input type="text" id="password" name="password" autocomplete="off" /><br /><br />
                <Link to='/'><input type="submit" value="Login"/></Link>
            </form>
        </div>
    </div>
}   

export default LoginPage