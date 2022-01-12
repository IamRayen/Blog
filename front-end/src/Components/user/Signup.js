import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Row } from "react-bootstrap";
import { signup } from "../../Redux/Actions/SignUpA";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const form = useRef();

    const handleSubmit = async (event) => {
        // const form = event.currentTarget;
        if (form.current.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            dispatch(signup(cred));
        }
        setValidated(true);
    };
    
    const initCred = {
        userName: "",
        email: "",
        password: "",
    };
    const [cred, setCred] = useState(initCred);
    console.log(cred)
    return (
            <Form style={{padding:"0px 40px 0px 40px"}}  ref={form} noValidate validated={validated}>
                    
                        <h1 class="display-6 fw-bold text-white text-center ">
                            Create an Account
                        </h1>

                        <Form.Group
                            className="mb-3 "
                            controlId="validationCustomUsername"
                        >
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
                        </Form.Group>

                        <Form.Group  className="mb-3" controlId="email">
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
                        </Form.Group>
                        <Form.Group
                            
                            className="mb-3"
                            controlId="formPlaintextPassword"
                        >
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
                        </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            style={{color:"white"}}
                            required
                            label="Agree to terms and conditions (you only have to click ^^)"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            class="text-center"
                        />
                    </Form.Group>

                    <Button
                        style={{color:"black",backgroundColor:"#4267b2", width: "100%" }}
                        variant="dark"
                        onClick={handleSubmit}
                        type="button"
                    >
                        Create your Account
                    </Button>
            </Form>
    );
};

export default Signup;
