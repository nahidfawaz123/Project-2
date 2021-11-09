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
      cart: "",
      favorite: "",
    };

    dispatch(singUp(info));
    console.log(state.user);
    navigate("/");
  };

  return (
    <div>
      {/* new registration */}
      <div className=" singup">
        <form>
          <label>
            <p>Username</p>
            <input
              type="text"
              value={nameNew}
              onChange={(e) => {
                setnameNew(e.target.value);
              }}
              required
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="Email"
              value={emailNew}
              onChange={(e) => {
                setemailNew(e.target.value);
              }}
              required
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              value={passwordNew}
              onChange={(e) => {
                setpasswordNew(e.target.value);
              }}
              required
            />
          </label>
          <div>
            <button type="submit" onClick={(e) => SubmitSingup(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
