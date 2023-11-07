import { Button } from "@mui/material"
import styles from "./header.module.css";
// import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Header(props) {
    return (
        <header className={styles.header}>
            <span>Transcriva
            </span>
            <span>
                <Link to="/sign-in"><Button variant="outlined" >Sign In</Button></Link>
                <Link to="/sign-up"><Button variant="outlined" >Sign Up</Button></Link>
                <Link to="/"><Button variant="outlined">Sign Out</Button></Link>
            </span>
        </header>
    )
}