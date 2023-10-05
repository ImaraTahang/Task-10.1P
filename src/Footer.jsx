import React from 'react';
import './Footer.css'

function Footer(props)
{
    return <div className="footer-container">
    <div className='Footer-div'>
        <div class="column">
            <b>{props.text}</b><br></br><br></br>
            <a href="#">How it works</a><br></br>
            <a href="#">How to create a profile</a><br></br>
            <a href="#">Find Jobs</a>
        </div>
        <div class="column">
            <b>{props.text1}</b><br></br><br></br>
            <a href="#">How it works</a><br></br>
            <a href="#">How to post a job</a><br></br>
            <a href="#">Find dev</a>
        </div>
        <div class="column">
            <b>{props.text2}</b>
            <div class="logo"><br></br>
                <a href="#"><img src="facebook.png"></img></a>
                <a href="#"><img src="twitter.png"></img></a>
                <a href="#"><img src="insta.png"></img></a>
            </div>
        </div>
    </div>
    <div class="bottom">
            <b>{props.text3}</b>
            <div class="bottom1">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Code of Conduct</a>
            </div>

        </div>
    </div>
}


export default Footer