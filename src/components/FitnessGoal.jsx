import React from 'react'
import img1 from  "../assets/brand1.png"
import img2 from  "../assets/brand2.png"
import img3 from  "../assets/brand3.png"
import img4 from "../assets/lady1.jpeg"
import icon from "../assets/icon.png"

const FitnessGoal = () => {
  return (
    <>
    <div className="container-fluid Fitness_Goal">
        <div className="container">
            <div className="row gx-0 align-items-center">
                <div className="col-md-5">
                    <div className="fitness_col1">
                        <h1>
                            970K+ More
                        </h1>
                        <p>Trusted Companies Partner</p>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className="fitness_col2">
                        <img src={img1} alt="" className='img-fluid px-3'/>
                        <img src={img2} alt="" className='img-fluid px-3'/>
                        <img src={img3} alt="" className='img-fluid px-3'/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*New section */}
    <div className="container-fluid Fitness_Goal1">
        <div className="container">
            <div className="row gx-0 align-items-center">
                <div className="col-md-6">
                    <div className="fitness_col3">
                    <img src={img4} alt="" className='img-fluid'/>
                    <div className="popup">
                        <img src={icon} className='img-fluid' />
                        <h6 className='fw-bold'>Professional Trainer</h6>
                    </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="fitness_col4 ">
                        
                      <h1 className='main_heading'>Get Ready To Reach Your Fitness Goals</h1>
                      <div className='pt-3 pb-4'><p>Visit our Gym and meet our professional trainers you'll fall in complete addiction to your fitness
                        Click on the below link and get started with your fitness enhancement today
                      </p>
                      <p>Don't wait Join us Now and get ready to transform your fitness into next level</p>
                      </div>
                      <button className='btn1 btn0'>Free Trial Today</button>
                         </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FitnessGoal

