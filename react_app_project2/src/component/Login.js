import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login} from "../reducers/user/actions";
import { useNavigate } from 'react-router-dom';
function Login() {
const [Name ,setName]=useState ("")
const [Password,setPassword]=useState ("")
const dispatch = useDispatch();
const navigate = useNavigate();

const state = useSelector((state) => {
  console.log(state);
  return {
    user: state.userReducer.user,
    users: state.userReducer.users,
  };
});
console.log("dddd"+state.user.LoggdIn)
 if(state.user.LoggdIn===true){
   
      navigate("/")
    } 

const SubmitLogin=(e) =>{
  e.preventDefault()
  console.log("before"+state.user.LoggdIn)

  dispatch(login({
    name:Name,
    Password: Password,
    LoggdIn:true
  }))
  
  console.log("after"+state.user.LoggdIn)
  verification()
  console.log("sttttttt",state)

  if(state.user.LoggdIn === true){
    console.log("homwwwwe");
    navigate("/")
  } 
  
 
  //  navigate("/")
}
const verification=() =>{
  

const admin=state.users[0]
console.log("the admin account ",state);
if(admin.name ===Name  ){
  console.log("adin");
  navigate("/Admin")
 } 

}





    return (
      <div >
           {/* login  */}
        <div className=" login">

    
      <form>
      <label>
        <p>Username</p>
        <input type="text"   onChange={(e)=>{ setName(e.target.value)}} required />
      </label>
      <label>
        <p>Password</p>
        <input type="password"  onChange={(e)=>{ setPassword(e.target.value)}} required />
      </label>
      <div>
        <button type="submit"  onClick={(e)=> SubmitLogin(e) }>Submit</button>
        <p> no have acount <Link to="/singup">singup</Link>  </p>
      </div>
    </form>
    </div>
    

      </div>
    );
  }
  
  export default Login;