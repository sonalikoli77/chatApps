import "./Messenger.css";
import Pro1 from '../../img/pro1.jpg';
//import Topbar from "../../Components/topbar/Topbar"
import {Link} from 'react-router-dom';
 export default function Messenger(){
     return(
         
       <section>
           <div className="container-fluid">
               <div className="row">
               <nav class="navbar navbar-expand-lg navbar-light bg-light header">
                <div class="container-fluid">
                    <div className="col-sm-3">
                        <div className="profile-pic">
                        <Link to="/ProfileSidebar"> <img src="team.jpg" alt="user profile"></img></Link>
                        </div>
                    </div>
                    {/* <form class="d-flex">
                        <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success success" type="submit">Search</button>
                    </form> */}
                     <div className="main-pro">
                        <img src={Pro1} alt="user profile"></img>
                        {/* <div className="status"> */}
                             <span>Sonali</span>
                             <p>Sonali is online</p>
                             
                        {/* </div> */}
                    </div>
                    <div class="dropdown">
                        <div className="video-icon">
                            <i className="fas fa-video"></i>
                            <i className="fas fa-phone"></i> 
                        </div>
                        <button class="btn btn-secondary round-drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v"></i>
                        </button>
                            
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                        
                    </div> 
                 
                 </div>
                </nav>
               </div>
           </div>
       </section>
     )
 }