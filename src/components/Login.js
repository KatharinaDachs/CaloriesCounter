
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/loginActions';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.userLogin){
      window.location.assign("/home")
      //ROUTING!! diese Stelle ist entscheidend ob Routing oder Registrierung funktioniert
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
    console.log('loginUser ausgeführt');

  }

  render(){
    return(
      <div className="Login-bg">
        <div className="Login-opacity">
          <h1>Login</h1>
            <form onSubmit={this.onSubmit} className="Register">
              <div>
                <label>E-Mail:</label> <br />
                <input type="email" name="email" onChange={this.onChange} value={this.state.email}/>
              </div>
              <br />
              <div>
                <label>Passwort: </label> <br />
                <input type="password" name="password" onChange={this.onChange} value={this.state.password}/>
              </div>
              <br />
              <button className="Button" type="submit">Login</button>
              <br />
              <br />
              <Link to={`/register`}> Sign in </Link>
            </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  userLogin: PropTypes.object
};

const mapStateToProps = state => ({
  userLogin: state.logins.item
})

export default withRouter(connect(mapStateToProps, { loginUser })(Login));