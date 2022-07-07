import styles from "./BattleCards.module.css"

import {useState} from "react";

export const BattleCards = () => {

    return (
        <div className={styles.wrap}>
            <h2><a href="https://github.com/FerelUltra/battle_cards3">1.Battle cards</a></h2>
            <h3>That's a game I told about previously. You need to struggle with an opponent, defending your base and win</h3>
            if your health is 100% or opponent's one is 0. and versa. In future i want to add some other cool features.
            <div className={styles.screenshots}>
                <img className={styles.screenshot} src="battleCards.png" alt=""/>
                <img className={styles.screenshot} src="battleCards2.png" alt=""/>
            </div>
        </div>
    )
}
