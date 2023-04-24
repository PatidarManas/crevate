import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/action/useraction";
import { useEffect } from "react";

export function IsLogin() {
    const {user,loading,isAuthenticate} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadUser())
    },[dispatch])
    console.log(user)
    if(isAuthenticate) return true
    return false
}