// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, TextField } from '@mui/material'
import styles from './signIn.module.css'
import { useState } from 'react'

export default function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

    }


    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('http://192.168.56.1:8000/api/v1/users/create-session', {
            method: 'POST', // HTTP method (other methods like PUT, DELETE, etc. can be used)
            headers: {
                'Content-Type': 'application/json', // Specify the content type of the request body
                // You can include other headers as needed
            },
            body: JSON.stringify(formData) // Data to be sent as the request body (should be a JSON string)

        });



        console.log(await response.json());
    }



    return (
        <>
            <main>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <h1>Sign In </h1>

                    <TextField  label="Email" variant="outlined" name='email' type='email' required value={formData.email} onChange={handleChange} />
                    <TextField  label="Password" variant="outlined" name='password' type='password' required value={formData.password} onChange={handleChange} />
                    <Button variant='contained' type='submit' >sign in</Button>
                </form>
            </main>
        </>
    )
}