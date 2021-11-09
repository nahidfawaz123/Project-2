import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../reducers/items/actions";
function Admin() {
  const [img, setimg] = useState("");
  const [prise, setprise] = useState("");
  const [name, setname] = useState("");
  
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const state = useSelector((state) => {
    console.log(state);
    return {
      item: state.ItemsReducer.Items,
    };
  });
  const SubmitSingup = (e) => {
    e.preventDefault();
    const info = {
      name: name,
      img: img,
      prise: prise,
    };
    console.log(img);
    dispatch(setItems(info));
    console.log(state.Items);
    //  navigate("/")
  };

  return (
    <div>
      {/* new registration */}
      <div className=" singup">
        <form>
          <label>
            <p>img</p>
            <input
              type="text"
              value={img.src}
              onChange={(e) => {
                setimg(e.target.value);
              }}
              required
            />
          </label>
          <label>
            <p>name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
          </label>
          <label>
            <p>prisce</p>
            <input
              type="text"
              value={prise}
              onChange={(e) => {
                setprise(e.target.value);
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

export default Admin;
