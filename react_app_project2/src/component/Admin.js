import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../reducers/items/actions";
import { deleteItems } from "../reducers/items/actions";
import { updetItems } from "../reducers/items/actions";
import iconeDelete from "../image/iconeDelete .png";
import { Button } from "react-bootstrap";

function Admin() {
  const [img, setImg] = useState("");
  const [price, setPrise] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  // updet
  const [imgUpdate, setImgUpdate] = useState("");
  const [priseUpdate, setPriseUpdate] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [typeUpdate, setTypeUpdate] = useState("");

  const dispatch = useDispatch();

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
      price: price,
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
        price: priseUpdate,
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
            />
          </label>

          <label>
            <p>name</p>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            <p>prise</p>
            <input
              type="text"
              onChange={(e) => {
                setPrise(e.target.value);
              }}
            />
          </label>
          <label>
            <p>type</p>
            <input
              type="text"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </label>
          <div>
            <Button
              style={{
                width: "10.9rem",
                margin: "1rem",
                padding: "1rem",
                borderColor: "#d7aa67",
                backgroundColor: "#d7aa67",
              }}
              onClick={(e) => submitSingup(e)}
            >
              {" "}
              Submit
            </Button>
          </div>
        </form>
      </div>
      {/*  disbly item */}
      {state.items.map((e, i) => {
        return (
          <div>
            <div className="card " style={{ width: "20.9rem" }}>
              <img style={{ height: "10.9rem" }} src={e.img1} />

              <div className="type">
                <h4>{e.name} </h4>
              </div>

              <div className="type">
                <h4>{e.type} </h4>
              </div>

              <div className="type">
                <h4>{e.price}</h4>
              </div>
              <div>
                <img
                  className="ImgSize"
                  src={iconeDelete}
                  onClick={() => {
                    const action = deleteItems(e);
                    dispatch(action);
                  }}
                />
              </div>
            </div>
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
                <Button
                  style={{
                    width: "10.9rem",
                    margin: "1rem",
                    padding: "1rem",
                    borderColor: "#d7aa67",
                    backgroundColor: "#d7aa67",
                  }}
                  onClick={(event) => {
                    submitUpdate(event, e);
                  }}
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Admin;
