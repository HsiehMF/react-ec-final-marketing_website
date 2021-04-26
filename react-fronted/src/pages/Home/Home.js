import React from 'react';
import home_pic from '../../assets/img/home_pic.jpg';
import styles from './home.module.scss';
import Cooperation from './Cooperation'

export default function Home() {
    return (
        <React.Fragment>
            <div className={styles.wrap}>
                <img className={styles.home_img} src={home_pic} alt="info" />
            <Cooperation />
            </div>
        </React.Fragment>
    )
}
