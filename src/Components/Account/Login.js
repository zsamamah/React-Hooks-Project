import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './accounts.css';
import tempMan from '../../Assets/accounts-assets/temp_man.jpg';
import Hero from "../Hero/Hero";
import Weather from '../weather';

function Login(props) {

  let navigate = useNavigate();

  const [logged_user, setloggedUSer] = useState(JSON.parse(localStorage.getItem("logged_in"))?JSON.parse(localStorage.getItem('logged_in')):{fname:"",lname:"",image_url:""})
  const [login_email, setlogin_email] = useState("")
  const [login_password, setlogin_password] = useState("")
  const [remember, setremember] = useState(false)
  const [fname, setfname] = useState(logged_user.fname)
  const [lname, setlname] = useState(logged_user.lname)
  const [image_url, setimage_url] = useState(logged_user.img)
  const [logged, setlogged] = useState("")

  const handleSubmit = async (e)=>{
    let found=false;
    let index;
    let registerd_users=JSON.parse(localStorage.getItem("users"));
    for(let i=0;i<registerd_users.length;i++){
      if(registerd_users[i].email===login_email){
        if(registerd_users[i].password===login_password){
          found=true;
          index=i;
          break;
        }
      }
    }
    if(found){
      // alert("Welcome user")
      let user=registerd_users[index]
      user['remember']=remember
      localStorage.setItem("logged_in",JSON.stringify(user));
       const logged_user=JSON.parse(localStorage.getItem('logged_in'))
        props.handleChangeRole();
        await setlogged(JSON.parse(localStorage.getItem('logged_in')))
    }
    else{
        e.preventDefault();
        alert('invalid login')
    }
}
const handleChange = (e)=>{
      switch(e.target.id){
        case 'login_email':
          setlogin_email(e.target.value)
          break;
        
        case 'login_password':
          setlogin_password(e.target.value)
          break;

        default:
          alert('check id in login file')
      }
}
const changeData=()=>{
  let logged_user=JSON.parse(localStorage.getItem("logged_in"));
  if(fname!==null) logged_user.fname=fname
  if(lname!==null) logged_user.lname=lname
  if(image_url!==null) logged_user.img=image_url
  let users=JSON.parse(localStorage.getItem('users'))
  for(let i=0;i<users.length;i++){
    if(users[i].email===logged_user.email){
      users[i].fname=logged_user.fname
      users[i].lname=logged_user.lname
      users[i].img=logged_user.img
      localStorage.setItem('users',JSON.stringify(users))
      localStorage.setItem('logged_in',JSON.stringify(logged_user))
      break;
    }
  }
}
const logout = () => {
    localStorage.removeItem("logged_in");
    // setloggedUSer(null)
    props.handleChangeRole();
}
const badImage = (e)=>{
    e.target.onerror = null;
    e.target.src=tempMan
}
  if(!localStorage.getItem("logged_in"))
    return (
      <>
      <Hero title="Account Page"/>
      <div id="accounts-form-container">
        <div className="login-container">
        <h1 className="login-title">Login</h1>
        <fieldset id="login-fieldset">
          <form id="login-form" onSubmit={handleSubmit} action={localStorage.getItem("redirectTo")?'/checkout':'/'}>
            <div>
              <label htmlFor="login_email">
                Username or email address
                <span className="accounts-important">*</span>
              </label>
              <br />
              <input type="email" id="login_email" onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="login_password">
                Password <span className="accounts-important">*</span>
              </label>
              <br />
              <input type="password" id="login_password" onChange={handleChange} required />
            </div>
            <div id="remember-me-container">
              <div className="btn-login"><button type="submit" className="accounts-form-btn">Log in</button></div>
              
            </div>
            <div  className="a-login">
        <Link to="/register" className="a-login">Don't have an account? Signup here!</Link>
        </div>
          </form>
        </fieldset>
      </div>
      </div>
      </>
    );
    else{
      let logged_user=JSON.parse(localStorage.getItem("logged_in"))
        return(
          <>
          <Hero title="Account Page"/>
          <div id="accounts-form-container">
          <div>
            <fieldset id="profileContainer">
                <div id="userProfile">
                    <div>
                <div><img src={logged_user.img} alt="user Profile" onError={badImage}/></div>
                </div>
                <div className="dataContainer">
                <div><p>Full Name : {logged_user.fname} {logged_user.lname}</p></div>
                <div><p>Email Address: {logged_user.email}</p></div>
                <div>
                <button type="button" onClick={logout} id="logoutBtn">Log out !</button>
               </div>
            </div>
            </div>
            </fieldset>
            <br/>
            <div className="account-weather">
            <div id="account-editData">
            <form id="changeData-form" onSubmit={changeData}>
                <div>
                <label htmlFor="fname">First Name: <span className="accounts-important">*</span></label><br/>
                <input type="text" id="fname" value={fname} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="lname">Last Name: <span className="accounts-important">*</span></label><br/>
                <input type="text" id="lname" value={lname} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="image_url">Image Url</label><br/>
                    <input type="url" id="image_url" onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="email">Email Address : <span className="accounts-important">*</span></label><br/>
                <input type="text" id="email" value={logged_user.email} disabled/>
                <p className="error" id="account-email-rule"><i className="fas fa-times"></i> You can`t edit Email !</p>
                </div>
                <div>
                    <button type="submit">Submit !</button>
                </div>
            </form>
            <Weather/>
            </div>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Login



