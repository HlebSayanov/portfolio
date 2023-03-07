import React, {FC} from 'react';
import styles from './Skill.module.css'

type SkillType = {
    title:string
    description:string
}

export const Skill:FC<SkillType> = ({title,description}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span className={styles.description}>
                {description}
            </span>
        </div>
    );
};

