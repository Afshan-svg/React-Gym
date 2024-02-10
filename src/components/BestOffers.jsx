import React from "react";
import img1 from "../assets/dumbell.png";

const BestOffers = () => {
  return (
    <>
      <div className="container-fluid BestOffers">
        <div className="container">
          <div className="row gx-0 py-4 align-items-center">
            <div className="col-md-7">
              <h1 className="main_heading pe-md-5 me-md-5">
                The Best Programs We Offer for You
              </h1>
            </div>
            <div className="col-md-5">
              <p>
                We offer a wide range of comprehensive fitness programs designed
                to cater to individuals of all fitness levels. Our aim is to
                help you achieve specific goals and maximise results
              </p>
            </div>
          </div>
          {/* Cards */}
          <div className="row gx-0 py-4">
            <div className="col-md-3">
              <div className="bestoffer_col1">
                <img src={img1} alt="" className="img-fluid pb-3 dumb" />
                <h4>Strength Training</h4>
                <p>
                  Our trainers will design that a progressive workout plans that
                  proper achieve gains strength
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bestoffer_col1">
                <img src={img1} alt="" className="img-fluid pb-3 dumb" />
                <h4>Strength Training</h4>
                <p>
                  Our trainers will design that a progressive workout plans that
                  proper achieve gains strength
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bestoffer_col1">
                <img src={img1} alt="" className="img-fluid pb-3 dumb" />
                <h4>Strength Training</h4>
                <p>
                  Our trainers will design that a progressive workout plans that
                  proper achieve gains strength
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="bestoffer_col1">
                <img src={img1} alt="" className="img-fluid pb-3 dumb" />
                <h4>Strength Training</h4>
                <p>
                  Our trainers will design that a progressive workout plans that
                  proper achieve gains strength
                </p>
                <button>
                  Learn More <i className="fa-solid fa-arrow-right ps-2"></i>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BestOffers;
