import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singUp } from "../reducers/user/actions";
import { useNavigate } from "react-router-dom";
function Singup() {
  const [nameNew, setnameNew] = useState("");
  const [emailNew, setemailNew] = useState("");
  const [passwordNew, setpasswordNew] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    console.log(state);
    return {
      user: state.userReducer.user,
    };
  });

  const SubmitSingup = (e) => {
    e.preventDefault();
    const info = {
      name: nameNew,
      email: emailNew,
      Password: passwordNew,
      LoggdIn: true,
    };

    dispatch(singUp(info));
    console.log(state.user);
    navigate("/");
  };

  return (
    <div className="form">
      {/* new registration */}

      
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Username
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={nameNew}
                onChange={(e) => {
                  setnameNew(e.target.value);
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={emailNew}
                onChange={(e) => {
                  setemailNew(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordNew}
                onChange={(e) => {
                  setpasswordNew(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <Button
            className="Submit"
            type="submit"
            onClick={(e) => SubmitSingup(e)}
          >
            Submit
          </Button>
          <Form.Text className="text-muted"></Form.Text>
        </Form>
      
    </div>
  );
}

export default Singup;
