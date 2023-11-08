import { Link } from "react-router-dom"
import styles from "./profile.module.css";
import { Button } from "@mui/joy";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'



export default function Profile({ login,user }) {
    const navigate = useNavigate();


    useEffect(() => {
        if (!login) {
            navigate('/sign-in');
        }
    }, [])
    return (
        <main>
            <div className={styles.container}>
                <h1>Profile</h1>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>
                    <Link to={'/update'}><Button variant="contained" >update</Button></Link>
                    <Link to={'/'}><Button variant="contained" >sign out</Button></Link>

                </span>
            </div>
        </main>
    )
}