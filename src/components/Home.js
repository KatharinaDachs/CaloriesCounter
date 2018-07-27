//React Basis
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
//Router
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
//Actions
import { fetchCalories, deleteCalories } from '../actions/caloryActions';

class Calories extends Component {
  componentWillMount(){
    console.log('componentWillMount fetchCalories');
    this.props.fetchCalories();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.newCalory){
      this.props.calorie.push(nextProps.newCalory);
    }
    if(nextProps.updatedCalory){
      this.props.calorie.push(nextProps.updatedCalory);
    }
    if(nextProps.deletedCalory){
      var array = this.props.calorie;
      console.log(array[0]);
      this.props.calorie.splice(nextProps.deletedCalory);
    }
  }

  render(){
    const caloryParts = this.props.calorie.map(calory => (
      <div key={calory.foodName}>
        <h3>{calory.foodName}</h3>
        <p>{calory.calories}</p>
        <button onClick={(e) => {
          e.preventDefault();
          this.props.deleteCalories(calory.id);
        }}>Eintrag Löschen</button><Link to={`/calory/${calory.id}`} > Eintrag Bearbeiten</Link>
      </div>
    ));

    return(
      <div>
        <h1>Home</h1>
        <h3>So viel hast du diesen Tag aufgenommen:</h3>
        { caloryParts }
      </div>
    )
  }
}

Calories.propTypes = {
  fetchCalories: PropTypes.func.isRequired,
  calorie: PropTypes.array.isRequired,
  newCalory: PropTypes.object,
  updatedCalory: PropTypes.object,
  deletedCalory: PropTypes.object
};

const mapStateToProps = state => ({
  calorie: state.calorie.items, //index.js (2.calorie)
  newCalory: state.calorie.item,
  updatedCalory: state.calorie.item,
  deletedCalory: state.calorie.item
})

export default withRouter ( connect (mapStateToProps, { fetchCalories, deleteCalories })(Calories))
