import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavDropdown,
  FormControl,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Logo from "../image/Logo.png";
import profile from "../image/profile.png";
import heart from "../image/heart.png";
import cart from "../image/cart.png";
import logOut from "../image/logOut.png";
import search from "../image/search.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../reducers/user/actions";
import { searchData } from "../reducers/items/actions";
import "../App.css";
function Navr() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    // console.log(state);
    return {
      user: state.userReducer.user,
      search: state.ItemsReducer.Search,
    };
  });
  const [serchElm, setSerch] = useState("");
  let SechEl;
  function getData(e) {
    SechEl = e.target.value;
    setSerch(SechEl);
    console.log(serchElm);
  }
  const sendData = () => {
    console.log(serchElm);
    dispatch(searchData(serchElm));
    console.log(searchData(serchElm));
    navigate("/search");
  };

  
  //Function Exit user
  const logoutuser = () => {
    dispatch(
      logout({
        name: "",
        Password: "",
        LoggdIn: false,
      })
    );
    navigate("/");
  };

  // if(state.user.LoggdIn === true){
  //   console.log("خخخخخخخخ");
  //   navigate("/")
  // } 

  return (
    <div className="Navigation">
      <Navbar bg="light" expand="lg" className="main">
        <Container style={{ display: "block" }}>
          <Row style={{ direction: "rtl" }}>
            <Col sm={3}>
              <Navbar.Brand >
              <Link to="/">
                <img className="Logo" src={Logo} alt="img" />
                </Link>
              </Navbar.Brand>
            </Col>
            <Col sm={6}>
              <FormControl
                type="search"
                placeholder="بحث"
                className="me-2 mt-3"
                onChange={getData}
                aria-label="Search"
              />
              <img className="img-icon" src={search} onClick={sendData} />
            </Col>
            <Col sm={3}>
              <div className="icons  mt-3">
                <Nav.Link>
                  <Link to="/Favorite">
                    <img className="img-icon" src={heart} alt={"Img"} />
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/shoppingCart">
                    <img className="img-icon" src={cart} alt={"Img"} />
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  {state.user.LoggdIn === true ? (
                    <div className="icon-LogOut">
                      <img
                        onClick={logoutuser}
                        className="img-icon"
                        src={logOut}
                      />
                      
                        <Link to="/Admin" > <p>{state.user.name}</p></Link>
                    </div>
                  ) : (
                    <Link to="/Login">
                      <img className="img-icon" src={profile} />
                    </Link>
                  )}
                </Nav.Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto Link2 ">
                <div className="item">
                  <Nav.Link>
                    <Link to="/Connect">تواصل معنا</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/OurGoals">آهداف</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/About">من نحن</Link>
                  </Nav.Link>
                  <NavDropdown
                    className="drop"
                    title=" المناسبات"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      تنسيق الزواجات
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      مناسبات التخرج
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      آعياد ميلاد
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      استقبال المواليد
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title=" الخدمات " id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      التصوير
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      المسكات
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      فرق الرقص
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      خدمات الضيافة
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link to="/">الرئيسية</Link>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navr;
