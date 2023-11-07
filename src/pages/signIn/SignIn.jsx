// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, TextField } from '@mui/material'
import styles from './signIn.module.css'

export default function SignIn() {
    return (
        <>
            <main>
                <form className={styles.form}>
                    <h1>Sign In </h1>
        
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <Button variant='contained' >sign in</Button>
                </form>
            </main>
        </>
    )
}