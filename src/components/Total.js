import React from 'react';

//import redux connector
import { connect } from 'react-redux';

//import remove
import { removeFeature } from '../actions/removeFeature';

const Total = props => {

  console.log(props.additionalPrice, 'total-component-additional-price')

  console.log(props.car.price, 'total-component-car-price')

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};


//mapStateToProps
const mapStateToProps = state => {
  return{
    car : state.car,
    additionalPrice: state.additionalPrice,
    

  };
}

export default connect(mapStateToProps, {removeFeature})(Total);
