import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import { signup } from "../../Redux/Actions/SignUpA";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupState = useSelector((state) => state.signupReducer);

    const form = useRef();

    const handleSubmit = async (event) => {
        // const form = event.currentTarget;
        if (form.current.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            dispatch(signup(cred));
            navigate("/")
        }
        setValidated(true);
    };
    const initCred = {
        userName: "",
        name: "",
        lastName: "",
        email: "",
        password: "",
    };
    const [cred, setCred] = useState(initCred);
    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <h1 id="signup">Create an Account</h1>
            <div className="signup">
                <Form ref={form} noValidate validated={validated}>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                        >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    setCred({ ...cred, name: e.target.value })
                                }
                                value={cred.name}
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom02"
                        >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                onChange={(e) =>
                                    setCred({
                                        ...cred,
                                        lastName: e.target.value,
                                    })
                                }
                                value={cred.lastName}
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomUsername"
                        >
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">
                                    @
                                </InputGroup.Text>
                                <Form.Control
                                    onChange={(e) =>
                                        setCred({
                                            ...cred,
                                            userName: e.target.value,
                                        })
                                    }
                                    value={cred.userName}
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Col className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="email">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="12">
                                <Form.Control
                                    onChange={(e) =>
                                        setCred({
                                            ...cred,
                                            email: e.target.value,
                                        })
                                    }
                                    value={cred.email}
                                    required
                                    type="email"
                                    placeholder="Email"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="formPlaintextPassword"
                        >
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="12">
                                <Form.Control
                                    onChange={(e) =>
                                        setCred({
                                            ...cred,
                                            password: e.target.value,
                                        })
                                    }
                                    value={cred.password}
                                    required
                                    type="password"
                                    placeholder="Password"
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button style={{width:"100%"}} onClick={handleSubmit} type="button">
                        Create your Account
                    </Button>
                </Form>
            </div>
            <h1 id="load-error">
                {signupState.loading && "loading..."}
                {validated && signupState.error}
            </h1>
        </div>
    );
};

export default Signup;
