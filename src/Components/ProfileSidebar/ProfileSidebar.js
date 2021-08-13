import React from 'react';
import {Link} from 'react-router-dom';
import './ProfileSidebar.css';
const ProfileSidebar =()=>
{
    return(
        <section className="ProfileSidebar">
            <div className="container-fluid pro-cont">
                <div className="row siderow">
                    <div className="col-sm-3 sidepro">
                    
                        <div className="profile-title">
                            <Link to="/Messenger"><i className="fa fa-arrow-left left"></i></Link>
                            <a className="Profile-btn">Profile</a>
                        </div>
                       
                       <div className="pop-up-profilepic">
                           <img src="team.jpg" alt ="profile-pic"></img>
                       </div>
                       <div className="name-field">
                           <i className="fa fa-edit edit"></i>
                           {/* <i className="far fa-grin-beam smilemoji"></i> */}
                           <input type="text" name="name" placeholder="Your Name" />
                       </div>
                       <div className="info-tip">
                           <p>This is not your username or pin. This name will be visible to your WhatsApp contacts.</p>
                       </div>
                       <div className="About-status">
                           <ul>
                               <li>Hey there! I am using WhatsApp.</li>
                               <li>I am using WhatsApp.</li>
                               <li>I am busy</li>
                           </ul>

                       </div>
                    
                    </div>
                    <div className="col-sm-9 sidenav">
                        <div className="side-image">
                             {/* <img src="calling.JFIF"></img> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProfileSidebar;