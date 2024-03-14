import { Button } from "@mui/material";
import styles from './myTranscriptions.module.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast } from "../../ToastCusomization/toastCalls";

export default function MyTranscriptions({ login, auth }) {
    const navigate = useNavigate();
    const [transcriptions, setTranscriptions] = useState(null);

    useEffect(() => {
        if (!login) {
            navigate('/sign-in');
        } else {
            getTranscripts();
        }
    }, [login]);

    async function getTranscripts() {
        try {
            const response = await fetch('http://192.168.56.1:8000/api/v1/service/get-transcriptions', {
                headers: {
                    Authorization: `Bearer ${auth}`
                }
            });
            const data = await response.json();
            setTranscriptions([...data.transcriptions]);
        } catch (error) {
            console.error("Error fetching transcriptions:", error);
            errorToast("Error fetching transcriptions. Please try again later.");
        }
    }

    async function handleDelete(index) {
        try {
            const response = await fetch(`http://192.168.56.1:8000/api/v1/service/get-transcriptions/delete/${index}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${auth}`
                }
            });

            if (response.ok) {
                const updatedTranscriptions = [...transcriptions];
                updatedTranscriptions.splice(index, 1);
                setTranscriptions(updatedTranscriptions);
            } else {
                errorToast("Error while deleting. Please try again.");
            }
        } catch (error) {
            console.error("Error deleting transcription:", error);
            errorToast("Error deleting transcription. Please try again later.");
        }
    }

    async function handleSave(index, newResult) {
        try {
            const response = await fetch(`http://192.168.56.1:8000/api/v1/service/get-transcriptions/update/${index}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newResult })
            });

            if (response.ok) {
                const updatedTranscriptions = [...transcriptions];
                updatedTranscriptions[index].result = newResult;
                setTranscriptions([...updatedTranscriptions]);
            } else {
                errorToast("Error while saving. Please try again.");
            }
        } catch (error) {
            console.error("Error saving transcription:", error);
            errorToast("Error saving transcription. Please try again later.");
        }
    }
    return (
        <main>
            <div className={styles.transcriptionsList}>
                {transcriptions && transcriptions.map((transcript, index) => {
                    console.log(transcript.result);
                    return <TranscriptionHolder
                        key={index}
                        index={index}
                        transcript={transcript}
                        handleDelete={handleDelete}
                        handleSave={handleSave}
                    />
                }
                )}
            </div>
        </main>
    );
}

function TranscriptionHolder({ transcript, index, handleDelete, handleSave }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedResult, setEditedResult] = useState(transcript.result);

    const onDelete = () => {
        handleDelete(index);
    };

    const onSave = async () => {
        setIsEditing(false);
        await handleSave(index, editedResult);
    };

    return (
        <div className={styles.transcriptHolder}>
            <div className={styles.labelHolders}>
                <label>
                    Filename: {transcript.filename}
                </label>
                <label>
                    Size: {transcript.size} MB
                </label>
            </div>
            <div className={styles.labelHolders}>
                <label>
                    Date: {transcript.date}
                </label>
                <label>
                    Time: {transcript.time}
                </label>
            </div>
            {!isEditing ? (
                <div>
                    Transcription: {transcript.result}
                </div>
            ) : (
                <div>
                    Transcription: <br />
                    <textarea
                        className={styles.textarea}
                        value={editedResult}
                        onChange={(event) => setEditedResult(event.target.value)}
                    />
                </div>
            )}
            <div>
                {!isEditing ? (
                    <Button onClick={() => setIsEditing(true)}>Edit</Button>
                ) : (
                    <>
                        <Button onClick={onSave}>Save</Button>
                        <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                    </>
                )}
                <Button className={styles.delete} onClick={onDelete}>Delete</Button>
            </div>
        </div>
    );
}

