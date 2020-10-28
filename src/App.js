import React from 'react';
import Header from './components/header/header.component'
import './App.css';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SearchPage from './pages/searchPage/searchPage.component'
import { Switch, Route}  from 'react-router-dom';
class App extends React.Component {
  render (){
    return (
      <div >
       <Header/>
       <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route path='/search' component={SearchPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' component={SignInAndSignOut}/>
       </Switch>
      </div>
    );
  }
}

export default App;
