import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../reduxStore/auth';
function Nbar() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        dispatch(authActions.logout())
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="#home">Home</NavLink>
            <NavLink to="#features">Features</NavLink>
            <NavLink to="/welcome">Welcome</NavLink>
            <NavLink to="/auth">Login</NavLink>
            <NavLink to="/auth"> 
            <button onClick={logoutHandler}>Logout</button></NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
     

    
    </>
  );
}

export default Nbar;