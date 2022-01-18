import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserA } from "../../Redux/Actions/UserA";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import { DeleteUserA } from "../../Redux/Actions/DeleteUserA";
import EditUser from "./EditUser";

const User = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UserA());
    }, []);
const navigate = useNavigate()
const HandleDelete = () =>{
        dispatch(DeleteUserA())
        navigate("/")
    }
const [show, setShow] = useState(false);
const handleShow = () => setShow(true);

const user = useSelector((state) => state.userReducer.data);
    return (
        <div>
        <div class="container-lg border d-flex justify-content-center align-items-center" style={{height:"100vh"}} >
            <div class="card " style={{width:"30rem"}}>
                <div class="card-body text-center">
                    <h5 class="card-title">Profile</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{user && user.userName}</h6>
                    <p class="card-text">
                    {user && user.email}
                    </p>
                    <div class="container-sm d-flex justify-content-around">
                    <Button variant="danger" onClick={HandleDelete}><span><i class="bi bi-x pe-2"></i></span>Delete</Button>
                    <Button variant="primary" onClick={handleShow}>Edit</Button>
                    </div>
                </div>
            </div>
        </div>
        <div><EditUser show={show} setShow={setShow} user={user}/></div>
        </div>
    );
};

export default User;
