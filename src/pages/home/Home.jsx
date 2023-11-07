import { Button } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import styles from "./home.module.css"
import { useRef, useState } from "react";

export default function Home() {
    const [result, setResult] = useState("");
    const ref = useRef();
    function handleFormData(event) {
        const fileData = event.target.files;
        if (fileData) {
            if (fileData[0]) {
                ref.current.innerText = fileData[0].name;
            }
        }
        // console.log(fileData[0]);
    }
    return <>
        <main>
            <div className={styles.container}>
                <h1>Upload Your File Here</h1>
                <form encType="multipart/form-data">
                    <label className={styles.file }>
                        <span>Choose File</span>
                        <input type="file" onChange={handleFormData} />
                    </label>
                    <label ref={ref}></label>
                    <Button variant="contained" >Submit</Button>
                </form>
                {result ? <Textarea minRows={10} size="lg" className={styles.textarea} /> : ""}
            </div>
        </main>
    </>
}