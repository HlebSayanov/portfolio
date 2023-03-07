import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import style from './MyProject.module.css'
export const MyProject = () => {
    return (
        <div className={style.myProjectBlock}>
            <div className={`${styleContainer.container} ${style.myProjectContainer}`}>
                <h2>My Project</h2>
            <div className={style.projects}>
                <div className={'project1'}>
                    <div className={'icon&btn'}>
                        <button>show</button>
                    </div>
                    <div className={'description'}>
                        <h3>title</h3>
                        <span>minimal descripriioon</span>
                    </div>
                </div>
                <div className={'project2'}>
                    <div className={'icon&btn'}>
                        <button>show</button>
                    </div>
                    <div className={'description'}>
                        <h3>title</h3>
                        <span>minimal descripriioon</span>
                    </div>
                </div>
            </div>
            </div>
        </div>

    );
};

