import React from 'react';
import AdditionalFeature from './AdditionalFeature';

//import redux connector
import { connect } from 'react-redux';

//import addFeature action
import { addFeature } from '../actions/addFeature';


const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


//mapStateToProps
const mapStateToProps = state => {
  return{
    additionalFeatures : state.additionalFeatures,

  };
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeatures);
