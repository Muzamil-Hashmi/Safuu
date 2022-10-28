import React from "react";
import {AiFillTwitterSquare ,AiFillDingtalkSquare ,AiFillRedditSquare,} from 'react-icons/ai'
import {BsFillInfoSquareFill}from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import{TbRobot} from 'react-icons/tb'
import {BiPaperPlane,BiCoffee} from 'react-icons/bi'
import Dash from "./Dash";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-black py-4 fixed-top  fw-bold border-bottom  " id="head">
      <div className="container">
      {/* <a className='safu mt-3 px-4 fw-bold' href=""> SAFUU</a> <br /> */}
<Dash/>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                <FaTwitter size={20} />
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
               <TbRobot size={25}/>
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link  text-white" href="#">
              <BiPaperPlane size={25}/>
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
             <BiCoffee size={25}/>
              </a>

            </li> </ul>
       
            <a className='border py-2 px-4 border-success text-white text-decoration-none fw-bold' href=""> SAFUU</a> <br />

            
           
            <li className="nav-item">
            <a className='btn btn1 btn-primary py-2 px-4' href=""> Connect Wallet</a> <br />

            </li>
         
          

        
        </div>
      </div>
    </nav>
  );
}
