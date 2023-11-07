import { Button, TextField } from '@mui/material'
import styles from './signUp.module.css';
import { useState } from 'react';
import axios from 'axios';
export default function SignUp() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });


    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function handleSignUp(event) {
        event.preventDefault();
        if (formData.password != formData.confirm) {
            console.log('check password');
            return;
        }
        fetch('http://192.168.56.1:8000/api/v1/create-user', {
            method: 'POST', // HTTP method (other methods like PUT, DELETE, etc. can be used)
            headers: {
                'Content-Type': 'application/json', // Specify the content type of the request body
                // You can include other headers as needed
            },
            body: JSON.stringify(formData) // Data to be sent as the request body (should be a JSON string)
        }).then(response => console.log(response)).catch(error => console.error(error));
        setFormData({
            name:"",
            email:"",
            password:"",
            confirm:""
        })
    }
    return (
        <>
            <main>
                <form className={styles.form} action='192.168.56.1:8000/api/v1/create-session' method='post' onSubmit={handleSignUp}>
                    <h1>Sign Up</h1>

                    <TextField type='email' label="Email" variant="outlined" name="email" required onChange={handleChange} value={formData.email} />
                    <TextField label="Name" variant="outlined" required name="name" onChange={handleChange} value={formData.name} />
                    <TextField label="Password" type='password' variant="outlined" name="password" required onChange={handleChange} value={formData.password} />
                    <TextField label="Confirm Password" type='password' variant="outlined" name="confirm" required onChange={handleChange} value={formData.confirm} />
                    <Button variant='contained' type="submit" >sign in</Button>
                </form>
            </main>
        </>
    )
}