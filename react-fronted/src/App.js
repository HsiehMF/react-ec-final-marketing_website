import React from 'react'
import './App.css';
import { Route } from 'react-router-dom';
import Header from './component/Header';
import Shopcart from './pages/Shopcart';
import Store from './pages/Store';
import Order from './pages/Order';
import About from './pages/About';
import Login from './pages/Login';
import Home from './pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/order" component={Order} exact />
        <Route path="/shopcart" component={Shopcart} exact />
        <Route path="/about" component={About} exact />
        <Route path="/store" component={Store} exact />
        <Route path="/login" component={Login} exact />
      </div>
    )
  }
}

export default App;
