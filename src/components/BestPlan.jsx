import React from 'react'
import tick from "../assets/tick.png"

const BestPlan = () => {
  return (
    <>
      <div className="container-fluid BestPlan">
      <h1 className='main_heading'>Choose Your Best Plan</h1>
      <p>Choose a plan that is right for your growing team, Simple pricing and no hidden charges</p>
        <div className="container pt-5">
            <div className="row gx-0 align-items-center">
                <div className="col-md-4">
                    <div className="bestplan_col1">
                        <h5>DISCOVER</h5>
                        <h1 className='pt-4'>
                            $99 <span>/ Per Month</span>
                        </h1> 
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <button className='btn3'>Choose Plan</button>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="bestplan_col1 bestplan_col2">
                    <h3 className='BestPlan_h3'>Most Popular</h3>
                        <h5>ENTERPRISE</h5>
                        <h1 className='pt-4'>
                            $299 <span>/ Per Month</span>
                        </h1> 
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <button className='btn4'>Choose Plan</button>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="bestplan_col1">
                        <h5>PROFESSIONAL</h5>
                        <h1 className='pt-4'>
                            $199 <span>/ Per Month</span>
                        </h1> 
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <div className='bestplan_detail py-3'>
                        <p><img src={tick} alt="" />5 Classes Per Month</p>
                        </div>
                        <button className='btn3'>Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
        </div>  
    </>
  )
}

export default BestPlan