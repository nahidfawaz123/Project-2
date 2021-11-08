import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,NavDropdown ,Button ,FormControl,Form,Nav,Container} from 'react-bootstrap';
import Logo from "../image/Logo.png"
import profile from '../image/profile.png'
import heart from '../image/heart.png'
import cart from '../image/cart.png'
import '../App.css';
function Navr(){ 

    return(
    <div className="Navigation">

<Navbar bg="light" expand="lg" className="main">

  <Container>
      <div className="icons">
      <Nav.Link > <Link to="/Login"><img className="img-icon" src={profile}/></Link> </Nav.Link>
      <Nav.Link >  <Link to="/Favorite"><img className="img-icon" src={heart}/></Link> </Nav.Link>
      <Nav.Link >  <Link to="/shoppingCart"><img className="img-icon" src={cart}/></Link> </Nav.Link>
      </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto Link2">

        <div className="item"> 
      <Nav.Link >  <Link to="/Connect">تواصل معنا</Link></Nav.Link>
      <Nav.Link >  <Link to="/OurGoals">آهداف</Link></Nav.Link>
      <Nav.Link > <Link to="/About">من نحن</Link></Nav.Link>
      <NavDropdown className="drop" title=" المناسبات" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">تنسيق الزواجات </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">مناسبات التخرج</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">آعياد ميلاد</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"> استقبال المواليد</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title=" الخدمات " id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">التصوير </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">المسكات </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">فرق الرقص</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"> خدمات الضيافة</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link >  <Link to="/">الرئيسية</Link></Nav.Link>
      </div>

      <Navbar.Brand href="#home"> 
    <img className="Logo" src={Logo}/>
    </Navbar.Brand>
      </Nav>n
    </Navbar.Collapse>
  </Container>

</Navbar>


{/* 
     <Link to="/">الرئيسية</Link>
      <Link to="/Services">الخدمات </Link>
      <Link to="/Occasions">المناسبات </Link>
      <Link to="/About">من نحن</Link>
      <Link to="/OurGoals">آهداف</Link>
      <Link to="/Connect">تواصل معنا</Link>
      <Link to="/Favorite">مفضله</Link>
      <Link to="/shoppingCart">سله</Link>
      <Link to="/Login">تسجيل دخول</Link> */}

        </div>
    )
}
export default Navr;