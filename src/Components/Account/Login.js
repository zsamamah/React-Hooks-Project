import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import './accounts.css';
import tempMan from '../../Assets/accounts-assets/temp_man.jpg';
import Hero from "../Hero/Hero";
import cars from '../Shop/cars.json';

function Login(props) {

  let navigate = useNavigate();

  const [orders, setOrders] = useState(null)

  
  const [logged_user, setloggedUSer] = useState(JSON.parse(localStorage.getItem("logged_in"))?JSON.parse(localStorage.getItem('logged_in')):{fname:"",lname:"",image_url:""})
  const [login_email, setlogin_email] = useState("")
  const [login_password, setlogin_password] = useState("")
  const [remember, setremember] = useState(false)
  const [fname, setfname] = useState(logged_user.fname)
  const [lname, setlname] = useState(logged_user.lname)
  const [image_url, setimage_url] = useState(logged_user.img)
  const [logged, setlogged] = useState("")
  
  useEffect(() => {
    let orders = JSON.parse(localStorage.getItem('submittedOrders'));
    if(orders){
      const myOrders = orders.filter((order)=>logged_user.email===order.email)
      setOrders(myOrders)
    }
  },[])


  const handleSubmit = async (e)=>{
    let found=false;
    let index;
    let registerd_users=JSON.parse(localStorage.getItem("users"));
    if(registerd_users)
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
      //  const logged_user=JSON.parse(localStorage.getItem('logged_in'))
        props.handleChangeRole();
        await setlogged(JSON.parse(localStorage.getItem('logged_in')))
    }
    else{
        e.preventDefault();
        alert('invalid login')
    }

    if(localStorage.getItem('redirectTo')){
      localStorage.removeItem('redirectTo')
      navigate('/checkout')
    }
    else
      navigate('/')
}
const handleChange = (e)=>{
      switch(e.target.id){
        case 'login_email':
          setlogin_email(e.target.value)
          break;
        
        case 'login_password':
          setlogin_password(e.target.value)
          break;

      case 'fname':
        setfname(e.target.value)
        break;
      
        case 'lname':
          setlname(e.target.value)
          break;
        case 'image_url':
          setimage_url(e.target.value)
          break;

        default:
          alert('check id in login file')
      }
}
const logout = () => {
    localStorage.removeItem("logged_in");
    localStorage.removeItem('selected');
    localStorage.removeItem('temp');
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
          <form id="login-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="login_email">
                Email Address <span className="accounts-important">*</span>
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
            {/* <div id="remember-me-container"> */}
                <div className="btn-login">
                  <button type="submit" className="accounts-form-btn">Log in</button>
                </div>

            {/* </div> */}
            <div className="a-login">
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
            <div id="profileContainer">
                <div id="userProfile">
                <div><img src={logged_user.img} alt="user Profile" onError={badImage}/></div>
                <div className="dataContainer">
                <div><p>Full Name : {logged_user.fname} {logged_user.lname}</p></div>
                <div><p id="email_account">Email Address: {logged_user.email}</p></div>
                <div>
                <button type="button" onClick={logout} id="logoutBtn">Log out !</button>
               </div>
            </div>
            </div>
            </div>
            <br/>
          <div id="accountCarsWrapperMahdi">
          {orders&&orders.map((order,index)=>{
            return (
              <div id="selected_car_account">
                <div>
                <img src={cars[order.carID-1].img} alt="my car" />
                </div>
                <p>Car : {cars[order.carID-1].name} {cars[order.carID-1].model} - {cars[order.carID-1].year}</p>
                <p>Pickup Duration : {order.pickup_Duration}</p>
                <p>Pickup Time : {order.pickup_time}</p>
                <p>Due Time : {order.until_time}</p>
              </div>
            )
          })}
          </div>
            </div>
            </>
        )
    }
}

export default Login



