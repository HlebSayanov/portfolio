import React from 'react';
import styles from './Project.module.css'
export const Project = () => {
    return (
        <div >
            <div className={styles.block}>
                <div className={styles.icon}>
                    <button className={styles.btn}>show</button>
                </div>
                <div className={'description'}>
                    <h3>title</h3>
                    <span>minimal descripriioon</span>
                </div>
            </div>

        </div>
    );
};

