import React from 'react'
import {AiOutlineTable,AiOutlineSwap,AiOutlineCalculator} from 'react-icons/ai'
import{RiAccountCircleLine} from 'react-icons/ri'
import {GrAnalytics,GrDocumentOutlook} from 'react-icons/gr'
import {SiGoogleanalytics } from 'react-icons/si'
import {HiOutlineDocument} from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Dashbord() {
  return (
    <div className='container-fluid dashboard' style={{overflowY:"scroll"}}>
      <div className="container">
    <div className="row">
        <div className="col-md-12">
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
<img className="w-75 ms-4" src="/assets/logo.png" alt="" /> <br />
            <Link className='btn btn-primary mt-3 w-100' to="/Hero"> <AiOutlineTable/> Dashbord</Link> <br />
            <Link className='btn btn-primary mt-3  w-100 ' to="/Account"><RiAccountCircleLine/> Account</Link><br />
            <Link className='btn btn-primary mt-3 w-100' to="/Swap"><AiOutlineSwap/> Swap</Link><br />
            <Link className='btn btn-primary mt-3  w-100 ' to="/Calculator"> <AiOutlineCalculator/>Calculator</Link>  <br />
            <Link className='btn btn-primary mt-3 w-100 ' to="/Analytics"><SiGoogleanalytics /> Analytics</Link><br />
            <Link className='btn btn-primary mt-3 w-100' to="/Docs"><HiOutlineDocument/> Docs</Link><br />


        </div>
    </div>
      </div>
    </div>
  )
}
