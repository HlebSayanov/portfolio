import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import style from './MyProject.module.css'
import {Project} from "./project/Project";
export const MyProject = () => {
    return (
        <div className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjectContainer}`}>
                <h2>My Project</h2>
            <div className={style.projects}>
                <Project/>
                <Project/>
                <Project/>



            </div>
            </div>
        </div>

    );
};

