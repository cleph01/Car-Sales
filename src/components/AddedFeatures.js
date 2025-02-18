import React from 'react';

//import redux connector
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

import { removeFeature } from '../actions/removeFeature';

const AddedFeatures = props => {
  
  console.log(props, 'added-features')

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


//mapStateToProps
const mapStateToProps = state => {
  return{
    car : state.car,
    price: state.car.price

  };
}

export default connect(mapStateToProps, { removeFeature })(AddedFeatures);
