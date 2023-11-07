import { Link } from "react-router-dom"
import styles from "./profile.module.css";
import { Button } from "@mui/joy";
export default function Profile() {
    return (
        <main>
            <div className={styles.container}>
                <h1>Profile</h1>
                <span>{" Ram"}</span>
                <span>{"Ram@gmail.com"}</span>
                <span>
                    <Link to={'/update'}><Button variant="contained" >update</Button></Link>
                    <Link to={'/'}><Button variant="contained" >sign out</Button></Link>
                    
                </span>
            </div>
        </main>
    )
}