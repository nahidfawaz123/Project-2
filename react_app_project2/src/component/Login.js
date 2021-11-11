import { Link } from "react-router-dom";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user/actions";
import { useNavigate } from "react-router-dom";
function Login() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
   
    return {
      user: state.userReducer.user,
      users: state.userReducer.users,
    };
  });
 
  if (state.user.LoggdIn === true) {
    navigate("/");
  }

  const SubmitLogin = (e) => {
    e.preventDefault();
   

    dispatch(
      login({
        name: Name,
        Password: Password,
        LoggdIn: true,
      })
    );

    console.log("after" + state.user.LoggdIn);
    verification();

    if (state.user.LoggdIn === true) {
    
      navigate("/");
    }

  };
  const verification = () => {
    const admin = state.users[0];
    console.log("the admin account ", state);
    if (admin.name === Name) {
      console.log("adin");
      navigate("/Admin");
    }
  };

  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          className="Submit"
          style={{ backgroundColor: "#d7aa67", borderColor: "#d7aa67" }}
          type="submit"
          onClick={(e) => SubmitLogin(e)}
        >
          Submit
        </Button>
        <Form.Text className="text-muted">
          <p>
         
            no have acount
            <Link to="/singup">
             
              <span>singup </span>
            </Link>
          </p>
        </Form.Text>
      </Form>
    </div>
  );
}

export default Login;
