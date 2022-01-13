import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useSelector} from "react-redux"
import Login from "../user/Login";

const NavBar = () => {
    const navigate = useNavigate();
    const isLogged = useSelector(state => state.creds)
    const [show, setShow] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem("auth")
        navigate("/")
        window.location.reload()
    }
    const handleShow = () => {
        setShow(true);
    };
    return (
        <div >
            <Navbar style={{backgroundColor:"#4267b2",height:"80px",position:"fixed",width:"100%"}}>
                <Container fluid>
                <i class="bi bi-qr-code display-6"></i>
                    <h1 class="fw-bold display-6 ms-2">CodeNook</h1>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link
                                class="text-white text-decoration-none fs-5 ms-4"
                                to="/"
                            >
                                <i class="bi bi-house-door pe-1"></i>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                class="text-white text-decoration-none fs-5"
                                to="/about"
                            >
                                <i class="bi bi-file-person pe-1"></i>
                                About
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {isLogged ? <Nav><Nav.Link ><Button style={{backgroundColor:"#d1ac00"}} variant="outline-light" onClick={()=>navigate(`/user/${isLogged.userID}`)}>
                        <i class="bi bi-person-circle pe-2"></i>
                            <span>Profile</span>
                        </Button></Nav.Link><Nav.Link ><Button style={{backgroundColor:"#d1ac00"}} variant="outline-light" onClick={handleLogout}>
                        <i class="bi bi-box-arrow-left pe-2"></i>
                            <span>Log Out</span>
                        </Button></Nav.Link></Nav> : <Nav><Nav.Link ><Button style={{backgroundColor:"#d1ac00"}} variant="outline-light" onClick={handleShow}>
                        <i class="bi bi-box-arrow-in-right pe-2"></i>
                            <span>Log in</span>
                        </Button></Nav.Link><Nav.Link>
                        <Button
                        style={{backgroundColor:"#d1ac00"}}
                        variant="outline-light"
                            onClick={() => navigate("/")}
                        >
                            <i class="bi bi-door-open pe-2"></i>
                           <span>Sign up</span> 
                        </Button>
                        </Nav.Link></Nav>}
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Login show={show} setShow={setShow} />
            </div>
        </div>
    );
};
export default NavBar;
