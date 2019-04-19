import React, {Component}from 'react';
import PropTypes from'prop-types';

class BrickOfType extends Component {
    render(){
        let typeBrick =null;

        switch (this.props.type){
            case('stoneBrick'):
                typeBrick=(<div>sciana</div>);
                break;
            default:
                typeBrick = null;
        }
        return typeBrick;
    }
}

BrickOfType.propTypes={
    type: PropTypes.string.isRequired
};
export default BrickOfType;
