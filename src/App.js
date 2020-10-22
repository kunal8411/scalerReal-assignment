import React from 'react';
import Header from './components/header/header.component'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route}  from 'react-router-dom';
class App extends React.Component {
  render (){
    return (
      <div >
       <Header/>
       <Switch>
          <Route exact path='/' component={HomePage}/>
       </Switch>
      </div>
    );
  }
}

export default App;
