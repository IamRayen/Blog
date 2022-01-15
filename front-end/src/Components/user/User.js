import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserA } from "../../Redux/Actions/UserA";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import { DeleteUserA } from "../../Redux/Actions/DeleteUserA";

const User = () => {
    const dispatch = useDispatch();
    const deleted = useSelector((state)=>state.deleteUserR)
    useEffect(() => {
        dispatch(UserA());
    }, []);
const navigate = useNavigate()
const HandleDelete = () =>{
        dispatch(DeleteUserA())
        navigate("/")
    }

    const user = useSelector((state) => state.userReducer.data);
    return (
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
                    <Button variant="primary">Edit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
