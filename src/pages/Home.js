import React from 'react'

const Home = () => {
  return (
    <>
      <section className=" slider_section mt-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {/* <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li> */}
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-6">
                    <div className="slider_detail-box">
                      <h1>
                        Smart, fast, affordable <br />
                        Delivering business solutions for the web and mobile world
                      </h1>
                      <p>
                        deliver IT solutions that fit your business
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          For Satisfaction Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="slider_img-box">
                      <img src="images/slider-img1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="welcome_section layout_padding">
        <div class="container">
          <div class="custom_heading-container">
            <span className='logo-holder logo-4'>
              <h6>
                Welcome To Techninow
              </h6>
            </span>
          </div>
          <div class="layout_padding2">
            <div class="img-box">
              <img src="images/welcome.png" alt="" />
            </div>
            <div class="detail-box">
              <p>
                Techninow is a business solution IT Industry which provides world class IT solution to clients. As a leading software development company, we deliver custom software and mobile apps, carry out in-depth analyses to provide web hosting automations, ecommerce and web development solutions.
                Our core values revolve around 3 key principles- result Honesty, Accountability.
              </p>
              <div>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="service_section">
        <div class="container">
          <div class="custom_heading-container">
            <h2 id="out_ser" className='logo-4'>
              Our Services
            </h2>
          </div>
          <div class="service_container layout_padding2">
            <div class="service_box h-1">
              <div class="img-box">
                <img src="images/webDevelopement2.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>
                  Custom Web <br />
                  Developement
                </h4>
                <p>
                  In web development We offer services those in trends. that keep your application, website or software up-to-date with the current trends and designs that are attracting users.
                </p>
              </div>
            </div>
            <div class="service_box">
              <div class="img-box">
                <img src="images/eCommerce.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>
                  Custom Ecommerce
                  <br />
                  Development
                </h4>
                <p>
                  Techninow build versatile e-commerce solutions reinforced with robust backends, engaging interfaces, and seamless integrations. We offer e-commerce store development for small and big businesses.
                </p>
              </div>
            </div>
            <div class="service_box ">
              <div class="img-box">
                <img src="/images/Mobileap.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>
                  Mobile  <br />
                  App Developement
                </h4>
                <p>
                  Being one of the best  mobile app development Companies in the industry, we know what it takes to convert your vision into reality.
                </p>
              </div>
            </div>

            <div class="service_box">
              <div class="img-box">
                <img src="images/Backendapi.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>

                  Backend Apis
                </h4>
                <p>
                  We are the top pioneers in building backend APIs for small IT companies, freelancers and any type of use.
                </p>
              </div>
            </div>
            <div class="service_box">
              <div class="img-box">
                <img src="images/Linkedin.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>

                  Grow your <br /> linkedin Account
                </h4>
                <p>
                  If you are a creative digital marketer,employer and employee. you want grow you linkedin account. we provide  solution for this with help of api automation.
                </p>
              </div>
            </div>
            <div class="service_box">
              <div class="img-box">
                <img src="images/247.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>

                  15/5 Hours Support
                </h4>
                <p>
                  If you are working with us we provide 15/5 hourly support.
                </p>
              </div>
            </div>
          </div>
          <div>
            <a href="">
              Portfolio
            </a>
          </div>
        </div>
      </section>
      <section class="problem_section layout_padding">
        <div class="container">
          <div class="custom_heading-container">
            <h2>
              Do you have any business problem ?
            </h2>
          </div>
          <div class="layout_padding2">
            <div class="img-box">
              <img src="images/problem.jpg" alt="" />
            </div>
            <div class="detail-box">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which don&#39;t look even slightly believable. I
              </p>
              <div>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <section class="why_section layout_padding ">
        <div class="container ">
          <div class="custom_heading-container">
            <h2>
              Why Choose Us
            </h2>
          </div>
          <div class="content-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis
            </p>
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="img-box">
                  <img src="images/smiley.png" alt="" />
                </div>
                <div class="detail-box">
                  <h3>
                    99%
                  </h3>
                  <h6>
                    SATISFIED CLIENTS
                  </h6>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="img-box">
                  <img src="images/monitor.png" alt="" />
                </div>
                <div class="detail-box">
                  <h3>
                    4700+
                  </h3>
                  <h6>
                    AWESOME planing
                  </h6>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="img-box">
                  <img src="images/multiple-users-silhouette.png" alt="" />
                </div>
                <div class="detail-box">
                  <h3>
                    4500+
                  </h3>
                  <h6>
                    CLIENTS
                  </h6>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="img-box">
                  <img src="images/bar-chart.png" alt="" />
                </div>
                <div class="detail-box">
                  <h3>
                    19000+
                  </h3>
                  <h6>
                    DAILY business
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section class="client_section layout_padding">
        <div class="container">
          <h2>
            What Our Clients Says
          </h2>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="client_container layout_padding2">
                  <div class="client_text">
                    <p>
                      psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                  </div>
                  <div class="detail-box">
                    <div class="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div class="name">
                      <h5>
                        Joans Mark
                      </h5>
                      <p>
                        cal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="client_container layout_padding2">
                  <div class="client_text">
                    <p>
                      psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                  </div>
                  <div class="detail-box">
                    <div class="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div class="name">
                      <h5>
                        Joans Mark
                      </h5>
                      <p>
                        cal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="client_container layout_padding2">
                  <div class="client_text">
                    <p>
                      psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                  </div>
                  <div class="detail-box">
                    <div class="img-box">
                      <img src="images/client.png" alt="" />
                    </div>
                    <div class="name">
                      <h5>
                        Joans Mark
                      </h5>
                      <p>
                        cal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>
      </section> */}

    </>
  )
}

export default Home