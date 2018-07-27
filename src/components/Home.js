
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
      this.props.calorie.splice(nextProps.deletedCalory);
    }
  }

  render(){
    const caloryParts = this.props.calorie.map(calory => (
      <div key={calory.foodName}>
        <hr className="Home-hr"/>
        <h4>{calory.foodName}</h4>
        <p>{calory.calories}</p>
        <button className="Home-button" onClick={(e) => {
          e.preventDefault();
          this.props.deleteCalories(calory.id);
        }}>Eintrag Löschen</button><Link to={`/calory/${calory.id}`} > Eintrag Bearbeiten</Link>
      </div>
    ));

    return(
      <div className="Home-bg">
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
