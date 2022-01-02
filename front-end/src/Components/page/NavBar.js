import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav
                        className="me-auto"
                        class="float-right"
                        style={{
                            width: "50%",
                            display: "flex",
                            justifyContent:"space-around"
                        }}
                    >
                        <Link to="/">Home</Link>
                        <Link to="/posts">Articles</Link>
                        <Link to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};
export default NavBar;
