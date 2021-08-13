import React,{ useState } from 'react';
import './registerstyle.css';
import signimg from '../../img/signin.jpg';
import axios from 'axios';
import { useHistory } from 'react-router';


const Register = () =>{
    const history = useHistory();
    const[name,setName]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[usercontactno,setUsercontactno]=useState('');
    const[alternteno,setAlternateno]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[match,setMatch]=useState(null);
    const[data,setData]=useState();
    const[charNumberValid,setCharNumberValid]=useState(false);
    const[specialCharValid,setSpecialCharValid]=useState(false);
    const[uppercaseValid,setUppercaseValid]=useState(false);
    const[numberValid,setNumberValid]=useState(false);

    function handleSubmit (event) {
        event.preventDefault();
        console.log(event)
    
        const user = {
            "username" : username,
            "password" : password   
        }
        console.log(user);
         axios.post(`https://api-b2b-dashboard.herokuapp.com/user/register`, user)
                  .then(res => {
                    console.log(res.data);
                    setData(res.data);
 
                   if(data.message === "User created")
                   {
                       alert("User created");
                       history.push('/Login');
                   }
                  
                  });
    //   history.push('/');
     }; 
        // Check the length of the input
       function checkPasswordLength (password){
        if (password.length >= 8) {
          setCharNumberValid(true); 
        
        } 
      }
      
      // Check for special characters
      function checkSpecialCharacters (password) {
        const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
          if (pattern.test(password)) {
       
              setSpecialCharValid(true);
          } 
      }
      
      // Check for an uppercase character
      function checkUppercase (password) {
        const pattern = /[A-Z]/;
        if (pattern.test(password)) {
    
            setUppercaseValid( true);
        }
      }
      
      // Check for a number
      function checkNumber (password) {
        const pattern = /[0-9]/;
          if (pattern.test(password)) {
    
              setNumberValid( true);
        } 
      }
     
    function handleUsername (event)  {
          
        setUsername(event.target.value)
    
    }
    function handleEmail(event){

        setEmail(event.target.value)

    }
    function handleUserContactNo(event){

        setUsercontactno(event.target.value)

    }
    function handleAlternateno(event){

        setAlternateno(event.target.value)
    }
    
        
      function handlePasswordChange  (event)  {
       event.preventDefault();
        setPassword(event.target.value);
    
        checkPasswordLength(event.target.value);
        checkSpecialCharacters(event.target.value);
        checkUppercase(event.target.value);
        checkNumber(event.target.value);
      };
      
      function handleConfirmPasswordChange (event) {
         
        setConfirmPassword(event.target.value);
        //match(null);
    };
    
    function comparePassword (event)  {
      if (password === confirmPassword) {
       
          setMatch(true)
       
      }
      else{
          setMatch(false)
      }
    }

          
    return(
    <>
    <div className="firstdiv" >  
        <div className="theboxcontainer container">
            <div className="mainrowsec1 row">
                <div className="col md-6 col-lg-6 col-sm-12 col-xs-12">
                    {/* <img src={signimg} width="70%" className="secimg"></img> */}
                    <div class ="maincontainer">
                    <div class = "container">
                    <div id="output"></div>
                    <h2 className="signuptxt">REGISTER USER</h2>
                    <form className="form-box">
                        <div className="input-icons1" onSubmit={handleSubmit}>
                              <i className="fa fa-user icon"></i>
                               <input type="text" name="user name" id="name" placeholder="Your Name" 
                                onChange={handleUsername}
                               />
                        </div>
                        <div className="input-icons1">
                              <i className="fa fa-mobile icon"></i>
                               <input type="number" name="number" id="number" placeholder="Contact No" maxLength="10"
                                 onChange={handleUserContactNo}
                               />
                        </div>
                        <div className="input-icons">
                              <i className="fa fa-phone icon"></i>
                               <input type="number" name="number" id="number" placeholder="Alternate Contact No"
                                 onChange={handleAlternateno}
                               />
                        </div>
                        <div className="input-icons1">
                            <i className="fa fa-envelope icon"></i>
                            <input name="user" type="email" placeholder="Email" required 
                              onChange={handleEmail}
                            />
                        </div> 
                        <div className="input-icons1">
                        <i className="fa fa-lock icon"></i>
                            <input type="password" placeholder="password" required
                             onChange={handlePasswordChange}
                            />
                        </div>
                         <div className="input-icons1">
                            <i className="fa fa-lock icon"></i>      
                            <input type="password" name="re_pass" id="re_pass" placeholder="confirm your password"
                             onChange={handleConfirmPasswordChange}
                             />
                        </div>
                         <div className="validation">
                                            <div className="validator">
                                                <i className={charNumberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                                                <p className="validation-item">8-20 Characters</p> 
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                                                <div className="validator">
                                                <i className={specialCharValid ? "fas fa-check success" : "fas fa-times error"}></i>
                                                <p className="validation-item">1 Special Character</p>
                                                </div>
                                            </div>
                                            <div className="validator">
                                                <i className={uppercaseValid ? "fas fa-check success" : "fas fa-times error"}></i>
                                                <p className="validation-item">1 Uppercase Letter</p>
                                                &nbsp;&nbsp;
                                                <div className="validator">
                                                <i className={numberValid ? "fas fa-check success" : "fas fa-times error"}></i>
                                                <p className="validation-item">1 Number</p>
                                                </div>
                                            </div>          
                                    </div> 
                        <div style={{display:'flex'}}>
                            <input className="checkwidth" type="checkbox" required />
                            <label className="labelagree">Remember me</label></div>
                        <div style={{display:'flex'}}><button type="submit" className="login">Back To Login</button>
                            <button type="submit" className="login">Register</button>
                        </div> 
                            <div className="withlogintxt">
                                <label>Or login with</label>   
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-linkedin"></a>
                                <a href="#" className="fa fa-google"></a>
                            </div>               
                        </form>
                    </div>
             </div>
         </div>
                <div className="col md-6 col-lg-6 col-sm-12 col-xs-12">
                     <img src={signimg} width="70%" className="secimg"></img>
                </div>

            </div>
        </div>

    </div>  
    </>
    );
}
export default Register;
