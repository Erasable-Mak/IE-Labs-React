/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Helmet from 'react-helmet'

const Services = () => {
    return (
        <>
            <Helmet bodyAttributes={{style: ' background-color: #00003B;'}}/>
            <div className="tot">
            <div className="container emp-profile">
                <form method="">
                    <div className="row">

                        <div className="col-md-6">
                           <div className="profile-head">
                               <h5>Infinite Epochs Research Lab</h5><br/>
                               <h6>Deployment Consulation</h6><br/>
                               <h6>Machine Learning Consulation</h6><br/>
                               <h6>Web Application Consulation</h6><br/>
                               <h6>Recruiments Services</h6><br/>
                               <h6>Up-Skilling Services</h6>
                           </div>
                        </div>
                    </div>
                </form>
            </div>
          </div> 
        </>
    )
}


export default Services