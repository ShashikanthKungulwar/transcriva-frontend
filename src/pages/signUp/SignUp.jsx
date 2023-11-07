import { Button, TextField } from '@mui/material'
import styles from './signUp.module.css';
export default function SignUp()
{
    return (
        <>
            <main>
            <form className={styles.form}>
                    <h1>Sign Up</h1>
        
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" type='password' variant="outlined" />
                    <TextField id="outlined-basic" label="Confirm Password" type='password' variant="outlined" />
                    <Button variant='contained' >sign in</Button>
                </form>
            </main>
        </>
    )
}