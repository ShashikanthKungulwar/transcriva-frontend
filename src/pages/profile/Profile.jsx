import { Link } from "react-router-dom"
import styles from "./profile.module.css";
import { Button } from "@mui/joy";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import profile from "../../assets/images/profile.png";


export default function Profile({ login,user,logOut }) {
    const navigate = useNavigate();
    const [userDetails,setUserDetails]=useState({...user})

    useEffect(() => {
        if (!login) {
            navigate('/sign-in');
        }
        console.log(user);
    }, [])
    useEffect(()=>{
        setUserDetails({
            ...user
        })
    },[user])
    return (<>{userDetails?<main>
        <div className={styles.container}>
            <h1>
                <img src={profile} height={'30px'} width={'30px'} style={{position:"relative",
            top:"4.5px"}}/>&nbsp;Profile</h1>
            <span>{userDetails.name}</span>
            <span>{userDetails.email}</span>
            <span>
                <Link to={'/update'}><Button variant="contained" >update</Button></Link>
                <Link to={'/'}><Button variant="contained" onClick={logOut}>sign out</Button></Link>

            </span>
        </div>
    </main>:""}</>
        
    )
}