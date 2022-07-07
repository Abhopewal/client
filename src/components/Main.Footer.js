import React from 'react'
import { Link } from 'react-router-dom'

const MainFooter = () => {
    return (
        <>
            <div class="footer_bg">
                <section class="info_section layout_padding2-bottom">
                    <div class="container">
                        <span class="logo-holder logo-4">

                            <h3>Techninow</h3>

                        </span>
                    </div>
                    <div class="container info_content">

                        <div>
                            <div class="row">
                                <div class="col-md-6 col-lg-4">
                                    <div class="d-flex">
                                        <h5>
                                            Useful Link
                                        </h5>
                                    </div>
                                    <div class="d-flex ">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    About services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    About Departments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="d-flex">
                                        <h5>
                                            The Services
                                        </h5>
                                    </div>
                                    <div class="d-flex ">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    About services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    About Departments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="d-flex">
                                        <h5>
                                            Contact Us
                                        </h5>
                                    </div>
                                    <div class="d-flex ">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    About services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    About Departments
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
                            <div class="social-box">
                                <a href="https://www.facebook.com/Techninow/">
                                    <img src="images/fb.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="https://www.linkedin.com/company/82073958/admin/">
                                    <img src="images/linkedin1.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/instagram1.png" alt="" />
                                </a>
                            </div>
                            <div class="form_container mt-5">
                                <form action="">
                                    <label for="subscribeMail">
                                        Newsletter
                                    </label>
                                    <input type="email" placeholder="Enter Your email" id="subscribeMail" />
                                    <button type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>


                <section class="container-fluid footer_section">
                    <p>
                        © 2022 All Rights Reserved By
                        <a href="https://www.techninow.com/">Techninow </a>
                    </p>
                </section>

            </div>
        </>
    )
}

export default MainFooter