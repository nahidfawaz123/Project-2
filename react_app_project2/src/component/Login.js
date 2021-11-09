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
    user: state.userReducer.users,
  };
});
const SubmitLogin=(e) =>{
  e.preventDefault()
  dispatch(login({
    name:Name,
    Password: Password,
    LoggdIn:true
  }))
  verification()
  //  navigate("/")
}
const verification=() =>{
const admin=state.user[0]
console.log(admin);
if(admin.name ===Name  ){
  console.log("adin");
  navigate("/Admin")
}else {
  console.log("home");
  // navigate("/")
} }


  // {state.user.map((e,i)=>{
  //   console.log(e.name  +e.Password);
  //   if(e.name === "admin" && e.Password === 1){
  //     console.log("adin");
  //     // navigate("/Admin")
  //   }else if(e.LoggdIn === true){
  //     console.log("home");
  //     navigate("/")
  //   } 
    
  // }) }


    return (
      <div >
           {/* login  */}
        <div className=" login">

    
      <form>
      <label>
        <p>Username</p>
        <input type="text"  value={Name} onChange={(e)=>{ setName(e.target.value)}} required />
      </label>
      <label>
        <p>Password</p>
        <input type="password" value={Password} onChange={(e)=>{ setPassword(e.target.value)}} required />
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