import React, { useState } from 'react'

const MainHeader = () => {

    const [showHeadeLinks, setShowHeaderLinks] = useState(false)

    return (
        <>
            <header class="header_section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <nav class="navbar navbar-expand-lg custom_nav-container ">
                                <span class="logo-holder logo-4">

                                    <h3>Techninow</h3>

                                </span>
                                <button onClick={() => setShowHeaderLinks(!showHeadeLinks)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={showHeadeLinks ? "true" : "false"} aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class={showHeadeLinks ? "collapse navbar-collapse show" : "collapse navbar-collapse "} id="navbarSupportedContent">
                                    <div class="d-flex  flex-column flex-lg-row align-items-center">
                                        <ul class="navbar-nav  ">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="about.html">About </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="service.html">Services </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="contact.html">Contact</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#"> Login</a>
                                            </li>
                                        </ul>
                                        <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                            <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default MainHeader