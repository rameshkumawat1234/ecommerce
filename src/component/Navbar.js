// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import user from '../asses/image/amyelsner.png';
import nav from '../asses/image/shopping-cart-304843_640.webp';
import '../asses/style/style.css'
const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid style={{ backgroundColor: 'blue', height: "15vh" }}>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 d-flex justify-content-center">
              <Nav.Link href="#" className="mx-4" style={{ color: 'white', fontSize: '15px' }}>Home</Nav.Link>
              <Nav.Link href="#" className="mx-5" style={{ color: 'white', fontSize: '15px' }}>About</Nav.Link>
              <Nav.Link href="#" className="mx-5" style={{ color: 'white', fontSize: '15px' }}>Contact</Nav.Link>
              <Nav.Link href="#" className="mx-4" style={{ color: 'white', fontSize: '15px' }}>Service</Nav.Link>
            </Nav>
            <Form className="d-flex align-items-center" style={{ marginLeft: "50px" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <img src={user} alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }} />
              <img src={nav} alt="nav" style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }} />
              {/* <Button variant="outline-success" className="ms-2">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
