import React from 'react'
import Drawer from '../Drawer/Drawer'

// import Drawer from '../Layouts/Drawer/Drawer'
// import { FaComments, FaRegHeart } from 'react-icons/fa';

const Blog = () => {
    return (
        <>
            <div className="container-fluid mt-4 homebody" >
                <div className="row">
                    <div className="col-md-3 drawer ">
                        <Drawer/>
                    </div>
                    <div className="col-md-6 ">
                        <div className='tpbtn'>
                            <button type="button" className="topbtn">Relevent</button>
                            <button type="button" className="topbtn">Latest</button>
                            <button type="button" className="topbtn">Oldest</button>
                            <button type="button" className="topbtn">Top</button>
                        </div>
                        <div className="post mt-4">

                            <div class="top-container">
                                <img src="images/User.png" alt="" id='user-img' />
                                <div class="mt-2">
                                    <h5 class="name">Clarke Jeffery</h5>
                                    <p class="time">24 Feb</p>
                                </div>
                            </div>

                            <div className="main-post mt-3">
                                <h3 className='hastag'>Debugging Software like a Detective </h3>
                                <div className="hastag">

                                    <button className='hastagbtn'><span className='text-primary'>#</span>Debug</button><button className='hastagbtn'><span >#</span>Debugging</button><button className='hastagbtn'><span className='text-warning'>#</span>Detective</button>

                                </div>

                                <div className="likecontent">
                                    <div className="react">
                                        {/* <button className='hastagbtn'> <FaRegHeart /> 5 Reactions </button> <button className='hastagbtn'> <FaComments /> 2 Comment </button> */}
                                        <span id='timeago'>1 min read</span> <button className='savebtn'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post mt-4">
                            <div class="top-container">
                                <img src="images/author.png" alt="" id='user-img' />
                                <div class="mt-2">
                                    <h5 class="name">Akash k</h5>
                                    <p class="time">23 Feb</p>
                                </div>
                            </div>

                            <div className="main-post mt-3">
                                <h3 className='hastag'>Building an Apache Echarts dashboards with react and cube </h3>
                                <div className="hastag">

                                    <button className='hastagbtn'><span className='text-primary'>#</span>react</button><button className='hastagbtn'><span >#</span>Echarts</button><button className='hastagbtn'><span className='text-warning'>#</span>Detective</button>

                                </div>

                                <div className="likecontent">
                                    <div className="react">
                                        {/* <button className='hastagbtn'> <FaRegHeart /> 14 Reactions </button> <button className='hastagbtn'> <FaComments /> 5 Comment </button> */}
                                        <span id='timeago'>30 min read</span> <button className='savebtn'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="post mt-4">
                            <div class="top-container">
                                <img src="images/author.png" alt="" id='user-img' />
                                <div class="mt-2">
                                    <h5 class="name">Akash k</h5>
                                    <p class="time">23 Feb</p>
                                </div>
                            </div>

                            <div className="main-post mt-3">
                                <h3 className='hastag'>Building an Apache Echarts dashboards with react and cube </h3>
                                <div className="hastag">

                                    <button className='hastagbtn'><span className='text-primary'>#</span>Debug</button><button className='hastagbtn'><span >#</span>Debugging</button><button className='hastagbtn'><span className='text-warning'>#</span>Detective</button>

                                </div>

                                <div className="likecontent">
                                    <div className="react">
                                        {/* <button className='hastagbtn'> <FaRegHeart /> 14 Reactions </button> <button className='hastagbtn'> <FaComments /> 5 Comment </button> */}
                                        <span id='timeago'>30 min read</span> <button className='savebtn'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 ">
                        <div className="upperdrawer">
                            <h4>Aws developement </h4>
                            <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                            <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                        </div>
                        <div className="upperdrawer">
                            <h4>#help </h4>
                            <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                            <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                        </div>
                        <div className="upperdrawer">
                            <h4>#Listening </h4>
                            <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                            <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog