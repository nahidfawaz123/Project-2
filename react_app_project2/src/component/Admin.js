import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../reducers/items/actions";
import { deleteItems } from "../reducers/items/actions";
import { updetItems } from "../reducers/items/actions";
function Admin() {
  const [img, setImg] = useState("");
  const [prise, setPrise] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  // updet
  const [imgUpdate, setImgUpdate] = useState("");
  const [priseUpdate, setPriseUpdate] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [typeUpdate, setTypeUpdate] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const state = useSelector((state) => {
    console.log(state);
    return {
      items: state.ItemsReducer.Items,
    };
  });
  const submitSingup = (e) => {
    e.preventDefault();
    const info = {
      name: name,
      img1: img,
      prise: prise,
      type: type,
    };
    dispatch(setItems(info));
  };

  const submitUpdate = (e, item) => {
    e.preventDefault();
    const updetItem = {
      item: {
        // oldName in items
        name: item.name,
      },
      data: {
        // take new data
        name: nameUpdate,
        img1: imgUpdate,
        prise: priseUpdate,
        type: typeUpdate,
      },
    };
    dispatch(updetItems(updetItem));
  };

  return (
    <div>
      {/* add items */}
      <div>
        <form>
          <label>
            <p>img</p>
            <input
              type="text"
              value={img.src}
              onChange={(e) => {
                setImg(e.target.value);
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
                setName(e.target.value);
              }}
              required
            />
          </label>
          <label>
            <p>prise</p>
            <input
              type="text"
              value={prise}
              onChange={(e) => {
                setPrise(e.target.value);
              }}
              required
            />
          </label>
          <label>
            <p>type</p>
            <input
              type="text"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              required
            />
          </label>
          <div>
            <button type="submit" onClick={(e) => submitSingup(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
      {/*  disbly item */}
      {state.items.map((e, i) => {
        return (
          <div>
            <img src={e.img1} />
            <p> {e.name} </p>
            <p> {e.type} </p>
            <p> {e.prise} </p>
            <button
              onClick={() => {
                const action = deleteItems(e);
                dispatch(action);
              }}
            >
              X{" "}
            </button>
            {/* from updet */}
            <form>
              <label>
                <p>img</p>
                <input
                  type="text"
                  value={imgUpdate.src}
                  onChange={(e) => {
                    setImgUpdate(e.target.value);
                  }}
                  required
                />
              </label>
              <label>
                <p>name</p>
                <input
                  type="text"
                  value={nameUpdate}
                  onChange={(e) => {
                    setNameUpdate(e.target.value);
                  }}
                  required
                />
              </label>
              <label>
                <p>prisce</p>
                <input
                  type="text"
                  value={priseUpdate}
                  onChange={(e) => {
                    setPriseUpdate(e.target.value);
                  }}
                  required
                />
              </label>
              <label>
                <p>type</p>
                <input
                  type="text"
                  value={typeUpdate}
                  onChange={(e) => {
                    setTypeUpdate(e.target.value);
                  }}
                  required
                />
              </label>
              <div>
                <button
                  type="submit"
                  onClick={(event) => {
                    submitUpdate(event, e);
                  }}
                >
                 Update
                </button>
              </div>
            </form>
          </div>
        );
      })}
    </div>
  );
}
// { const action = updetItems(e); dispatch(action);

export default Admin;
