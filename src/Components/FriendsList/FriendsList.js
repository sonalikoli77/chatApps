import React from 'react';
import Messenger from '../Messenger/Messenger';
import Chatmain from '../Chatmain/Chatmain';
import './FriendsList.css';
const FriendsList =()=>{
    return(
        <>
        <Messenger/>
        <section classname="FriendList">
           <div className="container-fluid">
               <div className="row friendlistrow">
                   {/* <div className="scrollbar"> */}
                        <div className="col-sm-3 userside">
                            <div className="">
                                <div className="card-header">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." name="" className="form-control search bg-light"/>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                        </div>
                                    </div>
					            </div>
                            </div>
                              <ul className="list-user">

                                    <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>
                               
                                <li className="active">
							     <div className="d-flex">
								   <div className="img_user">
									   <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
									    <span className="online_icon"></span>
								   </div>
                                    <div className="user_info">
                                        <span>Ashvini</span>
                                        <p>Ashvini is online</p>
                                    </div>
							     </div>
						      </li>

                              <li class="active">
							     <div class="d-flex">
								   <div class="img_user">
									   <img src="team.jpg" class="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
									    <span class="online_icon"></span>
								   </div>
                                    <div class="user_info">
                                        <span>Aayushi</span>
                                        <p>Aayushi is online</p>
                                    </div>
							     </div>
						      </li>

                              <li class="active">
							     <div class="d-flex">
								   <div class="img_user">
									   <img src="team.jpg" class="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
									    <span class="online_icon"></span>
								   </div>
                                    <div class="user_info">
                                        <span>Aarushi</span>
                                        <p>Arushi is online</p>
                                    </div>
							     </div>
						      </li>

                              <li class="active">
							     <div class="d-flex">
								   <div class="img_user">
									   <img src="team.jpg" class="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
									    <span class="online_icon offline"></span>
								   </div>
                                    <div class="user_info">
                                        <span>Pavitra</span>
                                        <p>Pavitra is online</p>
                                    </div>
							     </div>
						      </li>

                              <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>Ashvini</span>
                                            <p>Ashvini is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="active">
                                    <div className="d-flex">
                                    <div className="img_user">
                                        <img src="team.jpg" className="rounded-circle user_img" style={{width:'50px',height:'50px'}}/>
                                            <span className="online_icon"></span>
                                    </div>
                                        <div className="user_info">
                                            <span>sonali</span>
                                            <p>sonali is online</p>
                                        </div>
                                    </div>
                                </li>

                              </ul>
                        </div>
                   {/* </div> */}
                        <div className="col-sm-9 chatside">
                            <div className="chat-section">
                                <Chatmain/>

                            </div>
                            
                            <div className="row text">
                                <div className="col-sm-2">
                                    <div className="emoji-icon">
                                        <i className="fas fa-paperclip"></i>
                                       
                                        <i className="far fa-smile-beam"></i>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                     <div className="text-area">
                                         <textarea type="text"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <div className="btn-send">
                                        <button className="btn-send-msg">
                                         <i className="fas fa-location-arrow"></i>
                                         </button>
                                    </div>
                                </div>  
                            </div>

                        </div>

               </div>
           </div>
        </section>
</>
    )
}
export default FriendsList;