import React from "react";
import { BsEmojiSunglasses, BsFillEmojiNeutralFill } from "react-icons/bs";

export default function Analytics() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-5">
            <div
              className="card mt-3 bg-transparent text-center text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h4 className="card-title fw-bold">
                  How much you have invested so far?
                </h4>
                <h1 className="card-text fw-bold">
                  <BsEmojiSunglasses color="yellow" />
                </h1>
                <h3 className="card-title fw-bold">Total Investment</h3>
                <a className="btn btn-primary mt-3 w-100 fw-bold" href="#">
                  $0{" "}
                </a>{" "}
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5 ">
            <div
              className="card mt-3 bg-transparent text-center text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <p className="card-title fw-bold">Risk Master</p>
                <img className="w-100" src="/assets/meter.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <div
              className="card mt-3 bg-transparent text-center text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h4 className="card-title fw-bold">
                  How much you have withdrawn so far?
                </h4>
                <h1 className="card-text fw-bold">
                  <BsFillEmojiNeutralFill color="yellow" />
                </h1>
                <h3 className="card-title fw-bold">Total Earned</h3>
                <a className="btn btn-primary mt-3 w-100 fw-bold" href="#">
                  $0{" "}
                </a>{" "}
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row ps-5">
          <div className="col-md-12">
            <div
              className="card mt-3 bg-transparent text-center text-white "
              style={{ width: "90%" }}
            >
              <div className="card-body ">
                <a className="btn btn1 btn-success mt-3 w-25 fw-bold " href="#">
                  $0{" "}
                </a>{" "}
                <br />
                <div className="row">
                  <div
                    className="col-lg-12  mt-5 "
                    id="hash"
                    style={{overflowX:'scroll'}}
                  >
                    <table className="table text-white">
                      <thead>
                        <tr>
                          <th scope="col">Transaction Hash</th>
                          <th scope="col">Block Number</th>
                          <th scope="col">Method</th>
                          <th scope="col">Date</th>
                          <th scope="col">Amount</th>
                          <th scope="col">$ SAFUU</th>
                          <th scope="col">$ BNB</th>

                        </tr>
                      </thead>
                    </table>
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
