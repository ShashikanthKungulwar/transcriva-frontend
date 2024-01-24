import { Button } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import styles from "./home.module.css"
import { useRef, useState } from "react";
import { warningToast } from "../../ToastCusomization/toastCalls";
import loadGif from '../../assets/images/truck.gif'

export default function Home({ login }) {
    const [result, setResult] = useState("");
    const ref = useRef();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    function handleFormData(event) {
        const fileData = event.target.files;
        if (fileData) {
            if (fileData[0]) {
                ref.current.innerText = fileData[0].name;
            }
        }
        setFile(fileData[0])
        // console.log(fileData[0]);
    }
    async function handleSubmit(event) {

        event.preventDefault();
        setLoading(true);
        setResult('');
        const formData = new FormData();
        formData.append('file', file);

        try {
            const resultData = await fetch('http://192.168.56.1:8000/api/v1/service/transcribe', {
                method: "POST",
                body: formData,
            });

            const resultJson = await resultData.json();
            console.log(resultJson);


            if (resultJson.text)
                setResult(resultJson.text);
            else
                warningToast('check the format of the file and request service again');
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error:', error);
        }
    }
    function handleChange(event){
        setResult(event.target.value)
    }
    return <>
        <main>

            <div className={styles.container}>
                {loading?<div className={styles.loading}>
                    <img src={loadGif} alt="Loading..." />
                    <h3>Loading...</h3>
                </div>:""}
                {login ? <>
                    <h1>Upload Your File Here</h1>
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <label className={styles.file}>
                            <span>Choose File</span>
                            <input type="file" onChange={handleFormData} required />
                        </label>
                        <label ref={ref}></label>
                        <Button variant="contained" type="submit">Submit</Button>
                    </form>
                    {result ? <textarea minRows={10} size="lg" className={styles.textarea} value={result.toString()} onChange={handleChange} /> : ""}
                </> : <>
                    <h1>Please login to get our service!</h1>
                </>
                }

            </div>
        </main>
    </>
}