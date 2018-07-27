import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCalories } from '../actions/caloryActions';

class Caloryform extends Component {

  constructor(props){
    super(props);
    this.state = {
      foodName: '',
      calories:'',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    var kca = parseInt(this.state.calories);

    const calory = {
      foodName: this.state.foodName,
      calories: kca,
    };

    this.props.createCalories(calory);
    window.location.reload();
  }

  render(){
    return(
      <div className="Add-bg">
        <h3>Kalorien manuell eintragen</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name:</label><br />
            <input type="text" name="foodName" onChange={this.onChange} value={this.state.foodName} />
          </div>
          <br/>
          <div>
            <label>Kalorien:</label><br />
            <input type="int" name="calories" onChange={this.onChange} value={this.state.calories} />
          </div>
          <br/>
          <button className="Add-button" type="submit">Eintragen</button>
        </form>
      </div>
    )
  }
}

Caloryform.propTypes = {
  createCalories: PropTypes.func.isRequired
};

export default withRouter(connect(null, { createCalories })(Caloryform));
