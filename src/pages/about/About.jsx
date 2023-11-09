
import styles from "./about.module.css";
import happy from "../../assets/images/happy.png";

export default function About() {
    return (
        <main className={styles.main}>
                <img src={happy} width={'100px'} height={'100px'} alt={"logo"}/>
            <div class={styles.content}>
                <h1>Automatic Speech Recognition<br /><span>Your one stop Destination</span></h1>
                Transcriva is the AI-powered transcript generator that makes it easy to transcribe your audio and video files.
                <br />
                Whether you're a student, a professional, or just someone who wants to capture your thoughts and memories,
                Transcriva is the perfect solution for you.
                <br /> Hope you find our services useful
            </div>
        </main>
    )
}