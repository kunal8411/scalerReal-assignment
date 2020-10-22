import React from 'react';
import Header from './components/header/header.component'
import './App.css';
import CheckoutPage from './pages/checkout/checkout.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Switch, Route}  from 'react-router-dom';
class App extends React.Component {
  render (){
    return (
      <div >
       <Header/>
       <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
       </Switch>
      </div>
    );
  }
}

export default App;
