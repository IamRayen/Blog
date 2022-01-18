import React from "react";
import { Modal, Button,Form } from "react-bootstrap";
import { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { UserA } from "../../Redux/Actions/UserA";
import axios from "axios";

const EditUser = ({ setShow, show, user }) => {
    const [validated, setValidated] = useState(false)
    const dispatch = useDispatch()
    const handleClose = () => setShow(false)
    const [newUser, setNewUser] = useState(user ? user : null)
    const form = useRef()
    const jwt = localStorage.getItem("auth")
    const handleSubmit = async (event) => {
        if (form.current.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            try {
                const response = await axios.put(`http://localhost:4000/user/${user._id}/edit`,{newUser:newUser},{headers:{jwt:jwt}})
                setRes(response)
                setValidated(true);
                dispatch(UserA())
            } catch (error) {
                console.log(error)
            }
        }
    };
    const [res, setRes] = useState(null)
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Your user Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {res ? <p>{res && res.data.message}</p> : <Form  ref={form} noValidate validated={validated}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>New Email address</Form.Label>
                            <Form.Control
                            onChange={(e) => {
                                if(e.target.value != ""){ setNewUser({...newUser,email:e.target.value})}else{delete newUser.email}
                            }}
                                // required
                                type="email"
                                placeholder={user && user.email}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>New User Name</Form.Label>
                            <Form.Control
                                onChange={(e) => {
                                    if(e.target.value != ""){ setNewUser({...newUser,userName:e.target.value})}else{delete newUser.userName}
                                }}
                                // required
                                type="text"
                                placeholder={user && user.userName}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                            onChange={(e) => {
                                if(e.target.value != ""){ setNewUser({...newUser,password:e.target.value})}else{delete newUser.password}
                            }}
                                // required
                                type="password"
                                placeholder="password"
                            />
                        </Form.Group>
                    </Form>}
                </Modal.Body>
                {res ? <div></div> : <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>}
            </Modal>
        </div>
    );
};

export default EditUser;
