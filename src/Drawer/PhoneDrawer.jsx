import React from 'react'
import Modal from 'react-modal';
import { FcNext } from "react-icons/fc";
import {FaBlogger} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {
    FcFaq, FcNook, FcAbout, FcHome,
    FcContacts, FcLike, FcPortraitMode, FcBinoculars,
    FcOk
} from "react-icons/fc";

const PhoneDrawer = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '70%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-30%',
            transform: 'translate(-50%, -50%)',
            height: '100%',
            overflowY: 'auto'
        },
    };


    const closeModal = () => {
        props.setIsOpen(false);

    }

    return (
        <>
            <Modal

                isOpen={props.modalIsOpen}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="container">
                    <div className="upperdrawer">
                       <div className=' navlinks'>
                        <ul>
                            <li> <span id="brandbtn">Techninow</span> <FcNext onClick={closeModal} id="closebtn"/></li>

                        </ul>
                        </div>
                        <h4>Techninow is a community of 1k amazing developers</h4>
                        <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                        <div className="text-center">
                            <button type="button" class="btn btn-outline-primary crbtn" id='crbtn'>Create Account</button><br />
                            <button type="button" class="btn btn-light lobtn" id='lobtn'>Login</button>
                        </div>
                    </div>


                    <div className="navlinks mt-4">
                        <ul>
                        <li><FcHome /><Link to='/'> Home</Link> </li>
                        <li><FaBlogger/><Link to='/blog'> Blog</Link></li>
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
            </Modal>


        </>
    )
}

export default PhoneDrawer;
