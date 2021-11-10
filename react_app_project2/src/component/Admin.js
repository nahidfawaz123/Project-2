import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../reducers/items/actions";
import { deleteItems } from "../reducers/items/actions";
import { updetItems } from "../reducers/items/actions";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const state = useSelector((state) => {
    console.log(state);
    return {
      items: state.ItemsReducer.Items,
    };
  });
  const submitSingup = (e) => {
    // e.preventDefault();
    
    const info = {
      name: name,
      img1: img,
      prise: prise,
      type: type,
    };
    dispatch(setItems(info));
  };

  const submitUpdate = (e, item) => {
    // e.preventDefault();
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
      {/* onSubmit={handleSubmit(submitSingup)} */}
        <form >
          <label>
            <p>img</p>
            <input
              type="text"
              value={img.src}
              onChange={(e) => {
                setImg(e.target.value);
              } } 
              {...register("img", { required: "img is Required " })}
            />
             {errors.img && (<small className="text-danger"> img is Required </small>)}
           
          </label>
         
          <label>
            <p>name</p>
            <input
              type="text"
             
              onChange={(e) => {
                setName(e.target.value);
              }}
              {...register("name", { required: "name is Required " })}
            />
            {errors.name && (<small className="text-danger"> name is Required </small>)}
          </label>
          <label>
            <p>prise</p>
            <input
              type="text"
              onChange={(e) => {
                setPrise(e.target.value);
              }}
              {...register("prise", { required: "prise is Required " })}
              />
             
             {errors.prise && (<small className="text-danger"> prise is Required </small>)}
          </label>
          <label>
            <p>type</p>
            <input
              type="text"
              onChange={(e) => {
                setType(e.target.value);
              }}
              {...register("type", { required: "type is Required " })}
              />
                {errors.type && (<small className="text-danger"> type is Required </small>)}
          </label>
          <div>


            <button type="submit" onClick={handleSubmit(submitSingup)} >
              Submit
            </button>
            {/* <button type="submit" onClick={(e) => submitSingup(e)}>
              Submit
            </button> */}
          </div>
        </form>
      </div>
      {/*  disbly item */}
      {state.items.map((e, i) => {
        return (
          <div>
  
          {/* <div className="card "    style={{ width: "23.9rem" }}>
            <img variant="top" src={element.img1} className="item-image" />
            <Card.Body>
              <Card.Title>{element.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{element.price} :السعر</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">
                <img className="iconSize" src={hart} />
              </Card.Link>
              <Card.Link href="#">
              <button
              onClick={() => {
                const action = deleteItems(e);
                dispatch(action);
              }}
            >
              X{" "}
            </button>

            
          </div> */}






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
