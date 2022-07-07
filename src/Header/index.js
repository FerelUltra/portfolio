import styles from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleStop} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

export const Header = () => {
    const [loop, setLoop] = useState(true)
    const stopLoop = () => {
        setLoop(false)
    }
    return (
        <header className={styles.header}>
            <h1>Hi! My name is Ferel</h1>
            {<video className={styles.video} src="hi1_Trim.mp4" autoPlay={true} muted={true} loop={loop}>

        </video>}
            <FontAwesomeIcon icon={faCircleStop} onClick={stopLoop} className={styles.icon}/>
            <h2>About me</h2>
            <h3>I am a frontend developer for 2 years. And the most of all, I like it!
                But also I know a bit backend as an example node.js + express. It can be seemed in my game. You can
                create a profile and your achievements will be saved due to used database named MongoDB.
            </h3>
        </header>
    )
}
