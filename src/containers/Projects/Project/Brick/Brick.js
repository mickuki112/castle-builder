import React, {Component}from 'react';
import PropTypes from'prop-types';
import styles from'./Brick.module.css';


class BrickOfType extends Component {
    styleComponents={
        width:'10%',
        hight:'10%',
    }
    render(){
        let typeBrick =null;

        switch (this.props.type){
            case('stoneBrick'):
                typeBrick=(
                    <div
                    className={styles.typeBrick}
                    style={this.styleComponents}></div>);
                break;
            case('add'):
                typeBrick=(<div
                    style={this.props.styleComponents}>
                        <div className={styles.add}>+</div>
                    </div>);
                break;
            case('none'):
                typeBrick=(<div className={styles.add}></div>);
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
