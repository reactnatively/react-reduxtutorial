import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.onUpdateUser}>
          Update user
        </div>
        <div>
          <input onChange={this.onUpdateUser} />
        </div>
        <div>{this.props.user}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  //console.log(props);
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  }
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);

  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch);
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps );
  return {};
};

export default connect(mapStateToProps, mapActionsToProps)(App);
