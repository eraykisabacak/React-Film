import React,{Component} from 'react';

import './App.css';
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {
    Container
} from 'semantic-ui-react';

import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Header/>
              <Container text>
                  <Route path='/movies' component={MoviesPage} exact></Route>
                  <Route path='/movies/new' component={NewMoviePage} exact></Route>
                  <Route path='/movie/:_id' component={NewMoviePage} exact></Route>
              </Container>
          <Footer/>
      </div>
    );
  }
}

export default App;
