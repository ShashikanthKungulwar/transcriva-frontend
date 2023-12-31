// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, TextField } from '@mui/material'
import styles from './signIn.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../ToastCusomization/toastCalls';

export default function SignIn({ login,setLogin,setAuth,setUser }) {
    const navigate = useNavigate();
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
    useEffect(() => {
        if (login) {
            navigate('/');
        }
    }, [])

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
        const data =await response.json();
        if (response.ok) {
            setLogin('true');
            setUser(data.data.user)
            setAuth(data.data.token)
            successToast(data.message);
            navigate('/profile');
        }   
        else {
            errorToast(data.message);
        }
        // console.log(await response.json());
    }



    return (
        <>
            <main>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <h1>Sign In </h1>

                    <TextField label="Email" variant="outlined" name='email' type='email' required value={formData.email} onChange={handleChange} />
                    <TextField label="Password" variant="outlined" name='password' type='password' required value={formData.password} onChange={handleChange} />
                    <Button variant='contained' type='submit' >sign in</Button>
                </form>
            </main>
        </>
    )
}