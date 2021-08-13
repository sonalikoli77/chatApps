import React from 'react';
import './chatmainstyle.css';
import pro1 from '../../img/pro1.jpg'
import pro2 from '../../img/pro2.png'



const Topnav = () =>{
    return(
    <>
      <div className="container">
          <div className="row">
              <div className="msgbody">
                  <div className="msgcol-start col-lg-12">
                    <img src={pro1} width="70%" class="profile-img"/>
                    <p className="msg-para1">Hi, how are you Ashvini?</p>
                  </div>
                  <p className="msg-time1">8:40 AM, Today</p>
                  <div className="msgcol-end col-lg-12">
                    <img src={pro2} width="70%" class="profile-img"/>
                    <p className="msg-para2">Hi Ram i am good tnx how about you?</p>
                  </div>
                  <p className="msg-time2">8:40 AM, Today</p>  
                   <div className="msgcol-start col-lg-12">
                    <img src={pro1} width="70%" class="profile-img"/>
                    <p className="msg-para1">Hi, how are you Ashvini?</p>
                  </div>
                  <p className="msg-time1">8:40 AM, Today</p>
                  <div className="msgcol-end col-lg-12">
                    <img src={pro2} width="70%" class="profile-img"/>
                    <p className="msg-para2">Hi Ram i am good tnx how about you?</p>
                  </div>
                  <p className="msg-time2">8:40 AM, Today</p>    
                  <div className="msgcol-start col-lg-12">
                    <img src={pro1} width="70%" class="profile-img"/>
                    <p className="msg-para1">Hi, how are you Ashvini?</p>
                  </div>
                  <p className="msg-time1">8:40 AM, Today</p>
                  <div className="msgcol-end col-lg-12">
                    <img src={pro2} width="70%" class="profile-img"/>
                    <p className="msg-para2">Hi Ram i am good tnx how about you?</p>
                  </div> 
                  <p className="msg-time2">8:40 AM, Today</p>  
                  <div className="msgcol-start col-lg-12">
                    <img src={pro1} width="70%" class="profile-img"/>
                    <p className="msg-para1">Hi, how are you Ashvini?</p>
                  </div>
                  <p className="msg-time1">8:40 AM, Today</p>
                  <div className="msgcol-end col-lg-12">
                    <img src={pro2} width="70%" class="profile-img"/>
                    <p className="msg-para2">Hi Ram i am good tnx how about you?</p>
                  </div>
                  <p className="msg-time2">8:40 AM, Today</p>    
              </div>
              

          </div>
      </div>



    </>
    );
}
export default Topnav;