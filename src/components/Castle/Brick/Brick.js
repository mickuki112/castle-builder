import React, {Component}from 'react';
import PropTypes from'prop-types';
import styles from'./Brick.module.css';

class BrickOfType extends Component {
    render(){
        let typeBrick =null;

        switch (this.props.type){
            case('stoneBrick'):
                typeBrick=(<div>W</div>);
                break;
            case('add'):
                typeBrick=(<div className={styles.add} onClick={this.props.added}>+</div>);
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
