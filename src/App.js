import './App.css';

import React, { Component } from 'react'
import BasicInfo from './BasicInfo'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        Name: 'Brenda Mañon',
        Age: '22',
        Birthday: 'May 26, 2001'
      }
    }

  }
  render() {
    return (
      <div>
        <BasicInfo person =  {this.state.person}/>
      </div>
    )
  }
}


