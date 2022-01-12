import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { UserA } from '../../Redux/Actions/UserA'
import {useEffect,useState} from 'react'


const User = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UserA())
    },[])
    const user = useSelector(state => state.userReducer)
    console.log(user)
    return (
        <div style={{paddingTop:"80px"}}>
           <p>hello</p> 
        </div>
    )
}

export default User
