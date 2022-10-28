import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Dashbord from './Dashbord'
import Dash from './Dash'

export default function Base(props) {
  return (
    <>
    <Header/>
    <div className='container-fluid pt-2' >
      <div className="row pt-5">
        <div className="d-none d-md-block col-md-2 pt-5 ">
          <Dashbord/>
        </div>
        <div className="col-md-10 pt-5">
          {props.children};
        </div>
      </div>
    </div>
   
 
    </>
  )
}
