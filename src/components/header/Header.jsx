import { Button } from "@mui/material"
import styles from "./header.module.css";
// import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { successToast } from "../../ToastCusomization/toastCalls";
export default function Header(props) {

    
    return (
        <header className={styles.header}>
            <Link><span>Transcriva
            </span></Link>
            <span>
            <Link to="/about"><Button variant="outlined">About</Button></Link>
                {props.login ?
                    <><Link to="/profile"><Button variant="outlined">profile</Button></Link>
                      <Link>  <Button variant="outlined" onClick={props.logOut}>Sign Out</Button></Link>
                    </>
                    : <><Link to="/sign-in"><Button variant="outlined" >Sign In</Button></Link>
                        <Link to="/sign-up"><Button variant="outlined" >Sign Up</Button></Link></>}
            </span>
        </header>
    )
}