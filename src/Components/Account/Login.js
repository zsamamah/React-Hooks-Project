import React from "react";
import { Link } from "react-router-dom";
import './accounts.css';
import tempMan from '../../Assets/accounts-assets/temp_man.jpg';
import Hero from "../Hero/Hero";
import Weather from '../weather'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.logged_user=JSON.parse(localStorage.getItem("logged_in"))?JSON.parse(localStorage.getItem('logged_in')):{fname:"",lname:"",image_url:""}
        this.state={
            email:"",
            password:"",
            remember:false,
            fname:this.logged_user.fname,
            lname:this.logged_user.lname,
            image_url:this.logged_user.img,
            logged:""
        }
    }

    handleSubmit = async (e)=>{
        let found=false;
        let index;
        let registerd_users=JSON.parse(localStorage.getItem("users"));
        for(let i=0;i<registerd_users.length;i++){
          if(registerd_users[i].email===this.state.login_email){
            if(registerd_users[i].password===this.state.login_password){
              found=true;
              index=i;
              break;
            }
          }
        }
        if(found){
          // alert("Welcome user")
          let user=registerd_users[index]
          user['remember']=this.state.remember
          localStorage.setItem("logged_in",JSON.stringify(user));
          this.logged_user=JSON.parse(localStorage.getItem('logged_in'))
            this.props.handleChangeRole();
            await this.setState({logged:JSON.parse(localStorage.getItem('logged_in'))})
        }
        else{
            e.preventDefault();
            alert('invalid login')
        }
    }
    handleChange = (e)=>{
          this.setState({
              [e.target.id]:e.target.value
          })
    }
    changeData=()=>{
      let logged_user=JSON.parse(localStorage.getItem("logged_in"));
      if(this.state.fname!==null) logged_user.fname=this.state.fname
      if(this.state.lname!==null) logged_user.lname=this.state.lname
      if(this.state.image_url!==null) logged_user.img=this.state.image_url
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
    logout = () => {
        localStorage.removeItem("logged_in");
        this.setState({});
        this.props.handleChangeRole();
    }
    badImage = (e)=>{
        e.target.onerror = null;
        e.target.src=tempMan
    }
    
  render() {
      if(!localStorage.getItem("logged_in"))
    return (
      <>
      <Hero title="Account Page"/>
      <div id="accounts-form-container">
        <div className="login-container">
        <h1 className="login-title">Login</h1>
        <fieldset id="login-fieldset">
          <form id="login-form" onSubmit={this.handleSubmit} action={localStorage.getItem("redirectTo")?'/checkout':'/'}>
            <div>
              <label htmlFor="login_email">
                Username or email address
                <span className="accounts-important">*</span>
              </label>
              <br />
              <input type="email" id="login_email" onChange={this.handleChange} required />
            </div>
            <div>
              <label htmlFor="login_password">
                Password <span className="accounts-important">*</span>
              </label>
              <br />
              <input type="password" id="login_password" onChange={this.handleChange} required />
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
                <div><img src={logged_user.img} alt="user Profile" onError={this.badImage}/></div>
                </div>
                <div className="dataContainer">
                <div><p>Full Name : {logged_user.fname} {logged_user.lname}</p></div>
                <div><p>Email Address: {logged_user.email}</p></div>
                <div>
                <button type="button" onClick={this.logout} id="logoutBtn">Log out !</button>
               </div>
            </div>
            </div>
            </fieldset>
            <br/>
            <div className="account-weather">
            <div id="account-editData">
            <form id="changeData-form" onSubmit={this.changeData}>
                <div>
                <label htmlFor="fname">First Name: <span className="accounts-important">*</span></label><br/>
                <input type="text" id="fname" value={this.state.fname} onChange={this.handleChange}/>
                </div>
                <div>
                <label htmlFor="lname">Last Name: <span className="accounts-important">*</span></label><br/>
                <input type="text" id="lname" value={this.state.lname} onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="image_url">Image Url</label><br/>
                    <input type="url" id="image_url" onChange={this.handleChange}/>
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
}
export default Login;


