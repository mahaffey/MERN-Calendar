import React, { Component } from 'react'
import './css/App.css'
import HomeRouter from './components/router/router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeRouter />
      </div>
    );
  }
}

export default App
