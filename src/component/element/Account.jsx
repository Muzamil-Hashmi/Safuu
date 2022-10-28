import React from "react";

export default function Account() {
  return (
    <div className="container-fluid pt-5 ps-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card mt-3 bg-transparent text-center text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">Your Balance</h5>
                <h1 className="card-text fw-bold">$0</h1>
                <h5 className="card-title">0 SAFUU</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div
              className="card mt-3 bg-transparent text-white"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">APY</h5>
                <h2 className="card-text fw-bold">383,025.8%</h2>
                <h5 className="card-title">Daily ROI 2.28%</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card mt-3 text-center bg-transparent text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">Next Rebase:</h5>
                <h2 className="card-text fw-bold ">61,634,066.59</h2>
                <h5 className="card-title">Rebasing...</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row ps-5">
          <div className="col-md-12">
            <div
              className="card mt-5 bg-transparent text-white "
              style={{ width: "90%" }}
            >
              <div className="card-body ">
                <div className="row">
                  <div className="col-6">
                    <h5 className="fw-bold pt-3">Current SAFUU Price</h5>
                    <h5 className="fw-bold pt-3">Next Reward Amount USD</h5>

                    <h5 className="fw-bold pt-3">Next Reward Yield</h5>

                    <h5 className="fw-bold pt-3">ROI(1-Day Rate) USD</h5>
                    <h5 className="fw-bold pt-3">ROI(5-Day Rate)</h5>
                    <h5 className="fw-bold pt-3">ROI(5-Day Rate) USD</h5>
                  </div>
                  <div className="col-6 text-end">
                    <h5 className="fw-bold pt-3">$1.55</h5>
                    <h5 className="fw-bold pt-3">0 SAFUU</h5>
                    <h5 className="fw-bold pt-3">0.02355%</h5>
                    <h5 className="fw-bold pt-3">$0</h5>
                    <h5 className="fw-bold pt-3">11.96%</h5>
                    <h5 className="fw-bold pt-3">$0</h5>
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
