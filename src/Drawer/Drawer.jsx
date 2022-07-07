import React from 'react'
import {
    FcFaq, FcNook, FcAbout, FcHome,
    FcContacts, FcLike, FcPortraitMode, FcBinoculars,
    FcOk
} from "react-icons/fc";
import { Link } from 'react-router-dom'

const Drawer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="upperdrawer">
                    <h4> <span id='devCommunity'>Techninow </span>  is a community of 803,292 amazing developers</h4>
                    <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                    <div className="text-center">
                        <button type="button" class="btn btn-outline-primary crbtn" id='crbtn'>Create Account</button><br />
                        <button type="button" class="btn btn-light lobtn" id='lobtn'>Login</button>
                    </div>
                </div>


                <div className="navlinks mt-4">
                    <ul>
                        <li><FcHome /><Link to='/'> Home</Link> </li>
                        <li><FcNook /> Tags</li>
                        <li><FcFaq /> FAQ</li>
                        <li><FcAbout /> About</li>
                        <li><FcContacts /> Contact</li>
                        <li><FcLike /> Sponsors</li>

                    </ul>
                </div>
                <h5 className='mt2'>Others</h5>
                <div className="navlinks">
                    <ul>
                        <li><FcOk /> Code of Conduct</li>
                        <li><FcPortraitMode /> Privacy Policy</li>
                        <li><FcBinoculars /> Terms of Use</li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Drawer;