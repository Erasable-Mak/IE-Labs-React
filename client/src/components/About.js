/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Helmet from 'react-helmet'
import mernpic from '../images/epochs.png'

const About = () => {
    return (
        <>
            <Helmet bodyAttributes={{style: ' background-color: #00003B;'}}/>
            <div className="tot">
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                           <img src={mernpic} alt="mern"/>
                        </div>

                        <div className="col-md-6">
                           <div className="profile-head">
                               <h5>Infinite Epochs Research Lab</h5>
                               <h6>Consulation</h6>
                               <p className="profile-rating mt-3 mb-5">RANKINGS <span>1/10</span></p>
                               
                               <ul className="nav nav-tabs" role="tablist">
                               <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                               </li>
                               <li className="nav-item">
                               <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                               </li>
                              </ul>

                           </div>
                        </div>
                             <div className="col-md-2">
                                 <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                             </div>
                    </div>

                    <div className="row">
                         {/* left side url */}
                        <div className="col-md-4"> 
                         <div className="profile-work">
                             <h1>WORK LINK</h1><br/>
                             <a href="https://www.linkedin.com/company/infinite-epochs/">LinkedIn</a><br/>
                             <a href=" http://www.ie-labs.com/ ">Website</a>
                         </div>
                    </div>
                      {/* right side data toggle */}

                      <div className="col-md-8 pl-5 about-info">
                         <div className="tab-content profile-tab" id="myTabContent">
                             <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Github User ID</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Unknown</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Company Name</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>INFINITE EPOCHS LABS</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Email</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>---</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Phone</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>---</p>
                                     </div>
                                 </div>

                                
                             </div>
                              
                             <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Experience</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>---</p>
                                     </div>
                                 </div>

                            
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Total projects</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>---</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>English level</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>---</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Availiability</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>---</p>
                                     </div>
                                 </div>
                                 </div>

                         </div>
                      </div>
                  </div>
                </form>
            </div>
          </div> 
        </>
    )
}


export default About