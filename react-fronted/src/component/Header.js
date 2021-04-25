import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    opacity: 0.75,
    '&:hover': {
      color: "white",
      textDecoration: 'none',
      opacity: 1
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            木瓜之城
          </Typography>
          <Link to="/" className={classes.link}><Button color="inherit">首頁</Button></Link>
          <Link to="/about" className={classes.link}><Button color="inherit">關於我們</Button></Link>
          <Link to="/store" className={classes.link}><Button color="inherit">商家資訊</Button></Link>
          <Link to="/order" className={classes.link}><Button color="inherit">訂購木瓜</Button></Link>
          <Link to="/shopcart" className={classes.link}><Button color="inherit">購物車</Button></Link>
          <Link to="/login" className={classes.link}><Button color="inherit" >登入</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header)