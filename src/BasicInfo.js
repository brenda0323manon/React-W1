import React, { Component } from 'react'

export default class BasicInfo extends Component {
  render() {
    return (
      <div class="person">
        <h1>Name: {this.props.person.Name}</h1>
        <h2>Age: {this.props.person.Age}</h2>
        <h2>Birthday: {this.props.person.Birthday}</h2>
      </div>
    )
  }
}
