import React from "react";
import{ IoMdArrowForward} from 'react-icons/io'

export default function LandingPage(){
    return (
        <div className="landing_container">
            <div className="landing_content_wrapper">
                <h1>Document Your Experiences, Keep Track Of Life Events And Worry Less About Your Memories Getting Lost</h1>
                <p>Physical diaries wear out, get torn and sometimes get lost. We are saving you from these by providing 
                an online diary that allows you to document experiences in a secure while their quality remains the same
                </p>

                <button id="get_started_button">Get Started &nbsp; <IoMdArrowForward /></button>

            </div>
            <div className="landing_image_wrapper">
                <img src="../mediary_landing.png"/>
            </div>

        </div>
    )
}