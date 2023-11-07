import { Button } from "@mui/material"
import styles from "./header.module.css";
// import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Header(props) {
    return (
        <header className={styles.header}>
            <Link><span>Transcriva
            </span></Link>
            <span>
                {props.login ?
                    <><Link to="/profile"><Button variant="outlined">profile</Button></Link>
                        <Link to="/"><Button variant="outlined">Sign Out</Button></Link>
                    </>
                    : <><Link to="/sign-in"><Button variant="outlined" >Sign In</Button></Link>
                        <Link to="/sign-up"><Button variant="outlined" >Sign Up</Button></Link></>}
            </span>
        </header>
    )
}