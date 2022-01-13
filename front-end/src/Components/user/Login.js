import { Offcanvas, Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import background from "../../imgs/login_img.png";
import { login } from "../../Redux/Actions/LogInA";

const Login = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    const dispatch = useDispatch();
    const initialState = {
        email: "",
        password: ""
    };
    const [validated, setValidated] = useState(false);
    const loginState = useSelector((state) => state.loginReducer)
    const [creds, setCreds] = useState(initialState);
    const form = useRef();
    const handleSubmit = async (event) => {
        if (form.current.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            dispatch(login(creds));
        }
        setValidated(true);
    };
    return (
        <div className="login">
            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Log in</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ height: "50%" }}>
                    <Form
                        ref={form}
                        noValidate
                        validated={validated}
                        className="form"
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    setCreds({
                                        ...creds,
                                        email: e.target.value,
                                    })
                                }
                                value={creds.email}
                                type="email"
                                placeholder="Enter email"
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                onChange={(e) =>
                                    setCreds({
                                        ...creds,
                                        password: e.target.value,
                                    })
                                }
                                value={creds.password}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button
                            onClick={handleSubmit}
                            style={{ width: "100%" }}
                            variant="primary"
                            type="button"
                        >
                            Submit
                        </Button>
                    </Form>
                    
                    
                </Offcanvas.Body>

                <Offcanvas.Body
                    style={{
                        height: "50%",
                        backgroundImage: `url(${background})`,
                        backgroundSize: "100% auto",
                        backgroundRepeat: "no-repeat",
                        backgroundPositionY: "bottom",
                    }}
                >
                    <h1 id="load-error">
                {loginState.loading && "loading..."}
                {loginState.message}
            </h1>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Login