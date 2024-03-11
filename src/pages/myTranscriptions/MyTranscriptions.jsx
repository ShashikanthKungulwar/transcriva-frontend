import { Button } from "@mui/material";
import styles from './myTranscriptions.module.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function MyTranscriptions({ login }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!login) {
            navigate('/sign-in');
        }
    }, [])
    return (
        <>
            <main>
                <div className={styles.transcriptionsList}>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                    <div className={styles.transcriptHolder}>
                        <label>
                            filename
                        </label>
                        <textarea className={styles.textarea} />

                    </div>
                </div>
            </main>
        </>
    )
}   