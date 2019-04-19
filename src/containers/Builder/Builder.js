import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Castle from '../../components/Castle/Castle';

class Builder extends Component {
    render(){
        return(
            <Aux>
                <Castle />
            </Aux>
        );
    }
}
export default Builder;
