import React, { Component } from 'react';
import Main from './components/Main';
import Home from './component/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        {/* <Main/> */}
      </div>
    );
  }
}

export default App;
