import { Button } from "@mui/material"
import styles from "./header.module.css";
import logo from "../../assets/images/logo.png";
export default function Header(props) {
    return (
        <header className={styles.header}>
            <span>Transcriva
               
            </span>
            <span>
                <Button variant="outlined">Sign In</Button>
                <Button variant="outlined">Sign Up</Button>
                <Button variant="outlined">Sign Out</Button>
            </span>
        </header>
    )
}