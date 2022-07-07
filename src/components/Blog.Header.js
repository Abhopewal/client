import React from 'react'
import PhoneDrawer from '../Drawer/PhoneDrawer'
import { useState } from 'react';
import Account from '../pages/Account';

const BlogHeader = () => {

  const [modalIsOpen, setIsOpen] = useState(false);


  const openDrawer = () => {
    setIsOpen(true)
  }

  return (

    <>
      <div ><PhoneDrawer modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} /> </div>
      {/* <nav class="BlogHeaderNav">
        <div className='BlogHeaderInner' >
          <img src="images/techninow.png" alt="logo" className='logoimg' />
          <input type="text" className='searchInput' placeholder='Search...' />
        </div>

        <div>
          <img src="images/search.png" alt="" className='searchicon' />
          <Account />
          <img src="images/hamburger.png" alt="hum" className='hum' id='openDrawer' onClick={openDrawer} />
        </div>
      </nav> */}


      <div class="BlogHeaderNav" >
        <div className='myContainer' >

          <div className='BlogHeaderInner' >
            <div className='LeftSideHeader' >
          <img src="images/hamburger.png" alt="hum" className='hummber' id='openDrawer' onClick={openDrawer} />

            <img src="images/techninow.png" alt="logo" className='logoimg' />
            <div className='searchWrapper' >
              <input type="text" className='searchinput' placeholder='Search...' />
              <img src="images/search.png" alt="" className='searchicon' />
            </div>
            </div>
          <div className='buttonWrapper' >
            <button className='LoginBtn' >Log in</button>
            <img src="images/search.png" alt="" className='RightSidesearchicon' />
            <button className='CreateAccBtn' >Create account</button>
          </div>
          </div>


        </div>


      </div>

    </>
  )
}

export default BlogHeader