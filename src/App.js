import React, { Component } from 'react';
import Form from './Form';
import CardList from './CardList';

import './App.css';

export default class App extends Component {

  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };


  render() {
    return (
      <div>
       <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}


