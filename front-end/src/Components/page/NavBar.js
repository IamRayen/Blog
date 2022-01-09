import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "../user/Login";

const NavBar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };
    return (
        <div>
            <Navbar bg="white">
                <Container fluid>
                    <h1 class="fw-bold display-6 ms-2">CodeNook</h1>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link
                                class="text-secondary text-decoration-none fs-5 ms-4"
                                to="/"
                            >
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                class="text-secondary text-decoration-none fs-5"
                                to="/posts"
                            >
                                Posts
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                class="text-secondary text-decoration-none fs-5"
                                to="/about"
                            >
                                About
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link ><Button variant="outline-dark" onClick={handleShow}>
                            <span>Log in</span>
                        </Button></Nav.Link>
                        <Nav.Link>
                        <Button
                        variant="dark"
                            onClick={() => navigate("/signup")}
                        >
                           <span>Sign up</span> 
                        </Button>
                        </Nav.Link>
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
