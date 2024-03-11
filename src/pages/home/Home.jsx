import { Button } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import { Link } from "react-router-dom";
import styles from "./home.module.css"
import { useRef, useState } from "react";
import { warningToast } from "../../ToastCusomization/toastCalls";
import loadGif from '../../assets/images/truck.gif'

export default function Home({ login }) {
    const [result, setResult] = useState("");
    const [filename,setFilename] =useState('') ;
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const valueRef = useRef();
    function handleFormData(event) {
        const fileData = event.target.files;
        console.log(fileData)
        if (fileData) {
            if (fileData[0]) {
                setFilename(fileData[0].name);
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
    function handleChange(event) {
        setResult(event.target.value)
    }
    function handleClose()
    {
        setResult('');
        setFile(null);
        valueRef.current.value=null;
        setFilename('');
    }
    return <>
        <main>

            <div className={styles.container}>
                {loading ? <div className={styles.loading}>
                    <img src={loadGif} alt="Loading..." />
                    <h3>Loading...</h3>
                </div> : ""}
                {login ? <>
                    <h1>Upload Your File Here</h1>
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                        <label className={styles.file}>
                            <span>Choose File</span>
                            <input type="file" onChange={handleFormData} ref={valueRef} required />
                        </label>
                        <label>{filename}</label>
                        <Button variant="contained" type="submit">Submit</Button>
                    </form>
                    {result ?
                        <div>
                            <textarea minRows={10} size="lg" className={styles.textarea} value={result.toString()} onChange={handleChange} />
                            <div>
                                <Button>save</Button>
                                <Button style={{'color':'red'}} onClick={handleClose}>close</Button>
                            </div>
                        </div> : ""}
                    <Link to="/my-transcriptions"><Button className={styles.myTranscripts}>My Transcripts</Button></Link>
                </> : <>
                    <h1>Please login to get our service!</h1>
                </>
                }

            </div>
        </main>
    </>
}