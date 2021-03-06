import React, {Component}from 'react';
import PropTypes from'prop-types';
import styles from'./Brick.module.css';


class BrickOfType extends Component {
    render(){
        let typeBrick =null;

        switch (this.props.type){
            case('stoneBrick'):
                typeBrick=(
                    <div
                    className={styles.typeBrick}
                    onClick={this.props.added}
                    style={this.props.styleComponents}></div>);
                break;
            case('add'):
                typeBrick=(<div
                    style={this.props.styleComponents}
                    onClick={this.props.added}>
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
