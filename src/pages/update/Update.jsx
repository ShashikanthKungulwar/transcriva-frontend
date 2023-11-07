import { Button, TextField } from '@mui/material'
import styles from './update.module.css';
export default function Update()
{
    return (
        <>
            <main>
            <form className={styles.form}>
                    <h1>Sign Up</h1>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" type='password' variant="outlined" />
                    <TextField id="outlined-basic" label="New Password" type='password' variant="outlined" />
                    <Button variant='contained' >sign in</Button>
                </form>
            </main>
        </>
    )
}