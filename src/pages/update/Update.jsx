import { Button, TextField } from '@mui/material'
import styles from './update.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import { successToast,errorToast } from '../../ToastCusomization/toastCalls';
export default function Update({ login,setLogin,setUser,setAuth,auth }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!login) {
            navigate('/sign-in');
        }
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        newPassword: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('http://192.168.56.1:8000/api/v1/users/update-credentials', {
            method: 'POST', // HTTP method (other methods like PUT, DELETE, etc. can be used)
            headers: {
                'Content-Type': 'application/json', // Specify the content type of the request body
                // You can include other headers as needed
                Authorization:`Bearer ${auth}`
            },
            body: JSON.stringify(formData) // Data to be sent as the request body (should be a JSON string)

        });
        
        const data =await response.json();
        if (response.ok) {
            console.log(data.data)
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
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Update</h1>
                    <TextField id="outlined-basic" label="Email" variant="outlined" name='email' type='email' required value={formData.email} onChange={handleChange}/>
                    <TextField id="outlined-basic" label="Name" variant="outlined" name='name'  required value={formData.name} onChange={handleChange}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type='password' required value={formData.password} onChange={handleChange}/>
                    <TextField id="outlined-basic" label="New Password" type='password' variant="outlined" name='newPassword' required value={formData.newPassword} onChange={handleChange}/>
                    <Button variant='contained' type='submit'>sign in</Button>
                </form>
            </main>
        </>
    )
}