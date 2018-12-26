import React, { Component } from "react";
import TestComponent from '../testcomponent/testcomponent'
 
class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Home page</h2>
        <TestComponent></TestComponent>
      </div>
    );
  }
}
 
export default HomePage;