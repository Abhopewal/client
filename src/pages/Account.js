import React from 'react'
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <>
      <ul className='accountWrapper'>
        <div className='d-flex' >
          <li class="nav-item active logbtn" style={{listStyle:"none"}}>
            <button type="button" class="btn btn-outline-secondary w-100 "> <Link to="login" className='mbtn'> Login </Link></button>
          </li>
          <li class="nav-item" style={{listStyle:"none"}}>
            <button type="button" class="btn btn-outline-primary signbtn w-100 "> <Link to="signup" className='mbtn'> Create Account </Link></button>
          </li>
        </div>
      </ul>

    </>
  )
}

export default Account;