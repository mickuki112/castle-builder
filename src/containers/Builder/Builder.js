import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Castle from '../../components/Castle/Castle';

class Builder extends Component {
    state={
        /*components1:{
            stoneBrick:0,
            stoneBrick1:0,
            stoneBrick2:0,
        },*/
        components:[["add"]],
    }
    addWall=(type,coOrdinates)=>{
        let updateWall=this.state.components;
        updateWall[coOrdinates[0]][coOrdinates[1]]='stoneBrick'
        if(!this.state.components[coOrdinates[0]][coOrdinates[1]+1]){
            updateWall[coOrdinates[0]].push("add");
        }
        if(!this.state.components[coOrdinates[0]][coOrdinates[1]-1]){
            updateWall[coOrdinates[0]].unshift("add");
        }
        if(0>(coOrdinates[0]+1)){
            if(this.state.components[coOrdinates[0]+1] ){
                if(!this.state.components[coOrdinates[0]+1][coOrdinates[1]]){
                    updateWall[coOrdinates[0]+1].push("add");
                }
            }
            else{
                updateWall.push(["add"]);
            }
        }
        if(this.state.components[coOrdinates[0]-1] ){
            if(!this.state.components[coOrdinates[0]-1][coOrdinates[1]]){
                updateWall[coOrdinates[0]-1].unshift("add");
            }
        }
        else{
            updateWall.unshift(["add"]);
        }
        //console.log("jp");
        this.setState({components:updateWall})
    }
    render(){
        return(
            <Aux>
                <Castle added={this.addWall} components={this.state.components}/>
            </Aux>
        );
    }
}
export default Builder;
//undefined
