import { Button, TextField } from '@mui/material'
import styles from './update.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

export default function Update({ login }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!login) {
            navigate('/sign-in');
        }
    }, []);
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