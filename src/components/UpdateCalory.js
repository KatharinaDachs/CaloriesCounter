
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateCalories, getCalories } from '../actions/caloryActions';


class UpdateCalory extends Component {

  constructor(props){
    super(props);
    this.state = {
      foodName: '',
      calories: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    let id = this.props.match.params.caloryid
    console.log(id);
    this.props.getCalories(id);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.singleCalorie){
      this.setState(nextProps.singleCalorie)
      console.log("..willRecieveProps state: ",this.state)
      console.log("..willRecieveProps nextProps.singlePost: ",nextProps.singleCalorie)
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    var kcal = parseInt(this.state.calories);

    const calory = {
      foodName: this.state.foodName,
      calories: kcal,
      id: this.state.id,
      
    };
    this.props.updateCalories(calory);
    this.props.history.push("/home");
  }

  render(){
    return(
      <div className="Update">
        <h3>Calorien bearbeiten</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>ID: </label><br />
            <input type="text" name="id"  value={this.state.id} readOnly />
          </div>
          <br/>
          <div>
            <label>Name:</label><br />
            <input type="text" name="foodName" onChange={this.onChange} value={this.state.foodName} />
          </div>
          <br/>
          <div>
            <label>Kalorien:</label><br />
            <input type="Int" name="calories" onChange={this.onChange} value={this.state.calories} />
          </div>
          <br/>
          <button className="Update-button" type="submit">Eintragen</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  console.log("in mapStateToProps: ", reduxState.calorie.item)
  return ({
    singleCalorie: reduxState.calorie.item
  })
}

export default withRouter( connect (mapStateToProps, { getCalories, updateCalories })(UpdateCalory));
