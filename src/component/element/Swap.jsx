import React from "react";
import {AiOutlineSetting, AiOutlineReload,AiOutlineQuestionCircle } from 'react-icons/ai'
import {BsCoin} from 'react-icons/bs'

import {HiQuestionMarkCircle} from 'react-icons/hi'

export default function Swap() {
  return (
    <div>
      <div className="container ms-5 py-5" id="swap">
        <div className="row">
          <div className="col-md-3">

          </div>
          <div className="col-md-6">
            <div
              className="card card1 bg-black"
              style={{ width: "30rem" }}
            >
              <div className="card-body  text-white">
                <div className="row">
                  <div className="col-md-6">
                    <h5>swap</h5>
                  </div>
                  <div className="col-md-6 text-end ">
                    
                    <h5><AiOutlineReload/> <AiOutlineSetting/>  </h5>
                    
                  </div>
                </div>
                <div className="row">
                  <h6>Fast, Secure, KYC-Free</h6>
                  <div className="col-md-12">
                    <div
                      className="card mx-auto rounded-4  bg-dark "
                      style={{ width: "25rem" }}
                    >
                      <div className="card-body  ">
                        <div className="row">
                          <div className="col-md-6">
                            <h5>From:</h5>
                          </div>
                          <div className="col-md-6 text-end">
                            <h5>Balance:0</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6><input className="bg-dark text-white border-dark fw-bold w-50"  placeholder="0.00" type="text" /></h6>
                          </div>
                          <div className="col-md-6 text-end">
                            <h6>max <BsCoin color="yellow"/> BNB</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <div
                      className="card mx-auto rounded-4  bg-dark "
                      style={{ width: "25rem" }}
                    >
                      <div className="card-body  ">
                        <div className="row">
                          <div className="col-md-6">
                            <h5>To:</h5>
                          </div>
                          <div className="col-md-6 text-end">
                            <h5>Balance:0</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                          <h6><input className="bg-dark text-white border-dark fw-bold w-50"  placeholder="0.00" type="text" /></h6>
                          </div>
                          <div className="col-md-6 text-end">
                            <h6><img className="w-25" src="/assets/logo.png" alt="" /> Safuu</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 ps-5">
                    <h6>Slippage Tolerance</h6>
                  </div>
                  <div className="col-md-6 text-end pe-5">
                    <h6 className="text-success fw-bold">0.1%</h6>
                  </div>

                  <div className="col-md-12 text-center">
                    <a className="btn btn-success py-3 mt-3 w-75" href="">
                      {" "}
                      Connect Wallet
                    </a>
                    <br />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <div
                      className="card mx-auto rounded-4 bg-dark "
                      style={{ width: "25rem" }}
                    >
                      <div className="card-body  ">
                        <div className="row">
                          <div className="col-md-6">
                            <h6>Minimum received <AiOutlineQuestionCircle /></h6>
                          </div>
                          <div className="col-md-6 text-end">
                            <h6>0 SAFUU</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6>Price Impact <AiOutlineQuestionCircle /></h6>
                          </div>
                          <div className="col-md-6 text-end">
                            <h6>0%</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6>Liquidity Pro Fee <AiOutlineQuestionCircle /></h6>
                          </div>
                          <div className="col-md-6 text-end">
                            <h6>0% - No Fee</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <h6>Route <AiOutlineQuestionCircle /></h6>
                          </div>
                          <div className="col-md-6 text-end">
                            <h6>SAFUU  BNB</h6>
                          </div>
                        </div>
                      </div>
                    </div>
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
