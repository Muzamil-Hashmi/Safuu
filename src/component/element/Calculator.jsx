import React from "react";
import {
  AiOutlineSetting,
  AiOutlineReload,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BsCoin } from "react-icons/bs";

export default function Calculator() {
  return (
    <div>
      <div className="container py-5 px-5 mx-5">
        <div className="row">
          <div className="col-md-12 col-ms-6">
            <div
              className="card bg-transparent"
              style={{ width: "80%" }}
            >
              <div className="card-body  text-white">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Calculator</h5>
                  </div>
                </div>
                <div className="row">
                  <h6>Estimate your returns</h6>
                  <div className="col-md-4 ps-5 mt-5">
                    <h5 className="disabled">SAFUU Price</h5>
                    <h2 className="fw-bold">$1.53</h2>
                  </div>
                  <div className="col-md-4 mt-5">
                    <h5>Current APY</h5>
                    <h2 className="fw-bold">383,025.8%</h2>
                  </div>
                  <div className="col-md-4 mt-5">
                    <h5>Your SAFUU Balance</h5>
                    <h2 className="fw-bold"  >0 SAFUU</h2>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-xl-6  mt-5">
                    <h6 className="fw-bold  ms-5" >Safuu amount</h6>

                    <input className="form-control bg-dark text-white py-3 fw-bold border-dark  " value={"0"}  type="text" />

                   
                  </div>
                  <div className="col-xl-6 mt-5">
                    <h6 className="fw-bold ms-5">APY (%)</h6>
                    <input className="form-control bg-dark text-white py-3 fw-bold border-dark" value={"383025.8"}  type="text" />

                  </div>
                  <div className="col-xl-6 mt-5">
                    <h6 className="fw-bold ms-5">
                      SAFUU price at purchase ($)
                    </h6>
                    <input className="form-control bg-dark text-white py-3 fw-bold border-dark" value={"1.53"}  type="text" />

                  </div>
                  <div className="col-xl-6   mt-5">
                    <h6 className="fw-bold ms-5">
                      Future SAFUU market price ($)
                    </h6>
                    <input className="form-control bg-dark text-white py-3 fw-bold border-dark" value={"1.53"}  type="text" />

                  </div>
                  </div>
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <label htmlFor="customRange1" className="form-label mt-5  ">
                        30 days First Year : 0.02355% Per EPOCH
                      </label>
                      <input
                        type="range"
                        className="form-range"
                        id="customRange1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-5">
                    <div>
                      <label
                        htmlFor="customRange1"
                        className="form-label fw-bold"
                      >
                        Second Year : 0.00211% Per EPOCH
                      </label>
                      <input
                        type="range"
                        className="form-range"
                        id="customRange1"
                      />
                    </div>
                  </div>
                </div>
              
               <div className="row mt-5 ">
                <div className="col-md-6 ">
                    <h6>Your initial investment</h6>
                </div>
                <div className="col-md-6 text-end">
                    <h6>$0</h6>
                </div>
                <div className="col-md-6">
                    <h6>Current wealth</h6>
                </div>
                <div className="col-md-6 text-end">
                    <h6>$0</h6>
                </div>
                <div className="col-md-6">
                    <h6>SAFUU rewards estimation</h6>
                </div>
                <div className="col-md-6 text-end">
                    <h6>0 SAFUU</h6>
                </div>
                <div className="col-md-6">
                    <h6>Potential return</h6>
                </div>
                <div className="col-md-6 text-end">
                    <h6>$0</h6>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
