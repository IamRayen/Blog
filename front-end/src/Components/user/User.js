import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserA } from "../../Redux/Actions/UserA";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const User = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UserA());
    }, []);
    const user = useSelector((state) => state.userReducer.data);
    console.log(user)
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
                    <Button variant="danger"><span><i class="bi bi-x pe-2"></i></span>Delete</Button>
                    <Button variant="primary">Edit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
