import { Link } from "react-router-dom";
import { Navbar, Container, Nav,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "../user/Login"

const NavBar = () => {
    const navigate=useNavigate()
    const [show, setShow] = useState(false);
    const handleShow = () => {setShow(true)}
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand style={{
                        marginLeft:"6%",
                        marginRight:"3%"
                    }} to="/">Navbar</Navbar.Brand>
                    <Nav
                        className="me-auto"
                        // class="float-right"
                        style={{
                            width: "16%",
                            display: "flex",
                            justifyContent:"space-around",
                        }}
                    >
                        <Link to="/">Home</Link>
                        <Link to="/posts">Articles</Link>
                        <Link to="/about">About</Link>
                    </Nav>
                    <Nav
                    style={{
                        width:"220px",
                        display: "flex",
                        justifyContent:"space-around",
                    }}>
                    <Button onClick={handleShow} style={{borderRadius:"20px 0px",width:"100px"}} variant="outline-primary">Log in</Button>
                    <Button onClick={()=>navigate("/signup")} style={{borderRadius:"0px 20px",width:"100px"}} variant="primary">Sign up</Button>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Login show={show} setShow={setShow}/>
            </div>
        </div>

    );
};
export default NavBar;
