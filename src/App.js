import './App.css';

import React, { Component } from 'react'
import BasicInfo from './BasicInfo'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          Name: 'Brenda Mañon',
          Age: '22',
          Birthday: 'May 26, 2001'
        },
        {
          Name: 'Karen Mañon',
          Age: '20',
          Birthday: 'March 23, 2003'
        },
        {
          Name: 'Cesar Mañon',
          Age: '18',
          Birthday: 'June 01, 2005'
        }
      ]
    }

  }
  render() {
    return (
      <div>
         {this.state.person.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    )
  }
}


