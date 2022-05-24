import React from "react";
import styles from './ProfileFollow.module.scss'
// eslint-disable-next-line react/prop-types
export default function ProfileFollow ({counts,useCase}){
    return (
        <div className={styles.profileFollow}>
            <p className={styles.counts}>{counts}</p>
            <p className={styles.useCase}>{useCase}</p>
        </div>
    )
}