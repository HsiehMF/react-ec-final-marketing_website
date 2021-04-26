import React from 'react';
import logo_fu from '../../assets/img/logo_fu.jpg';
import logo_76 from '../../assets/img/logo_76.jpg';
import logo_taiShing from '../../assets/img/logo_taiShing.jpg';
import logo_wanBing from '../../assets/img/logo_wanBing.jpg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from './home.module.scss';

const storeData = [
    {
        img: logo_fu,
        title: '福泉雪花冰·布丁豆花'
    },
    {
        img: logo_76,
        title: '76街果汁坊'
    },
    {
        img: logo_taiShing,
        title: '台興芋冰城'
    },
    {
        img: logo_wanBing,
        title: '丸浜霜淇淋'
    }
];

export default function Cooperation() {
  return (
    <Container fixed className="my-5">
    <Grid container spacing={3} className="text-center">
        <Grid item xs={12} >
          <p className="h3 font-italic">合作商家</p>
          <hr />
        </Grid>
        { 
            storeData.map(store => (
                <Grid item xs={4}>
                    <img src={store.img} alt={store.title} className={styles.store_img} />
                    <p className="mt-2">{store.title}</p>
                </Grid>
            ))
        }
    </Grid>
    </Container>
  );
}