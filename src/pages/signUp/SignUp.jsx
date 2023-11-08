import { Button, TextField } from '@mui/material'
import styles from './signUp.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../ToastCusomization/toastCalls';
export default function SignUp({ login }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });
    useEffect(() => {
        if (login) {
            navigate('/');
        }
    }, [])

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
        fetch('http://192.168.56.1:8000/api/v1/users/create-user', {
            method: 'POST', // HTTP method (other methods like PUT, DELETE, etc. can be used)
            headers: {
                'Content-Type': 'application/json', // Specify the content type of the request body
                // You can include other headers as needed
            },
            body: JSON.stringify(formData) // Data to be sent as the request body (should be a JSON string)
        }).then(async response => {
            if (response.ok) {
                
                const data =await response.json();
                successToast(data.message);
                navigate('/sign-in');
            }
            else{
                const data= await response.json();
                errorToast(data.message);

            }
        }).catch(error => console.error(error));

        setFormData({
            name: "",
            email: "",
            password: "",
            confirm: ""
        });

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