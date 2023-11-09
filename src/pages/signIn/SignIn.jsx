// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, TextField } from '@mui/material'
import styles from './signIn.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../ToastCusomization/toastCalls';
import Cookies from 'js-cookie';

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
            navigate('/profile');
        }
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('http://192.168.56.1:8000/api/v1/users/create-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData) 

        });
        const data =await response.json();
        if (response.ok) {
            setLogin('true');
            setUser(data.data.user)
            setAuth(data.data.token)
            successToast(data.message);
            localStorage.setItem('token',data.data.token);
            localStorage.setItem('user',JSON.stringify(data.data.user));
            // localStorage.setItem('refresh',)
            console.log(Cookies.get('jwt'));
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