import React, { Component } from 'react';

import "./index.css"
import CardLogin from "./components/CardLogin";
import api from "./service/api";

class App extends Component {
  render() {
    return (
      <div>
        <CardLogin api={api} />
      </div>
    );
  }
}

export default App;



