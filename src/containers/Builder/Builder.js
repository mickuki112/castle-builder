import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Castle from '../../components/Castle/Castle';
import Modal from '../../components/UI/Modal/Modal';
import SummaryBrick from '../../components/Castle/SummaryBrick/SummaryBrick';
import styles from './Builder.module.css';

class Builder extends Component {
    state={
        purchasing:false,
        components:[["add"]],
        buildMode:'deCenter',
        counterBrick:0,
        styleComponents:{
            height: '100px',
            width: '100px',
            fontSize:'80px',
            lineHeight: '80px',
        }
    }
    addWall=(type,coOrdinates)=>{
        let updateWall=this.state.components;
        let counterBrick=this.state.counterBrick+1;
            if(type==='add'){
            updateWall[coOrdinates[0]][coOrdinates[1]]='stoneBrick'
            if(!this.state.components[coOrdinates[0]][coOrdinates[1]+1]){
                updateWall[coOrdinates[0]].push("add");
                if(this.state.buildMode==='deCenter')updateWall[coOrdinates[0]].unshift("add");//deCenter
            }
            if(!this.state.components[coOrdinates[0]][coOrdinates[1]-1]){
                updateWall[coOrdinates[0]].unshift("add");
                if(this.state.buildMode==='deCenter')updateWall[coOrdinates[0]].push("add");//deCenter

            }
            //if(0<(coOrdinates[0]+1)){
                if(this.state.components[coOrdinates[0]+1]){
                    if(!this.state.components[coOrdinates[0]+1][coOrdinates[1]]){
                        if(this.state.buildMode==='deCenter'){
                            updateWall[coOrdinates[0]+1].push("add");
                            updateWall[coOrdinates[0]+1].unshift("add");//deCenter
                        }
                    }
                }
                else{
                    updateWall.push(["add"]);
                }
            //}
            if(this.state.components[coOrdinates[0]-1] ){
                if(!this.state.components[coOrdinates[0]-1][coOrdinates[1]]){
                    if(this.state.buildMode==='deCenter'){
                        updateWall[coOrdinates[0]-1].push("add");
                        updateWall[coOrdinates[0]-1].unshift("add");//deCenter
                    }
                }
            }
            else{
                updateWall.unshift(["add"]);
            }
        }else{
            updateWall[coOrdinates[0]][coOrdinates[1]]='add';
            counterBrick=this.state.counterBrick-1;
        }
        let sizeBrick =updateWall.length;
        updateWall.map((_,i)=>{
            if(sizeBrick<this.state.components[i].length){
                sizeBrick=this.state.components[i].length;//make repairs
            }
        });
        this.setState({
        counterBrick:counterBrick,
        components:updateWall,
        styleComponents:{
            height: (100*(1-sizeBrick*0.03))+'px',
            minWidth: (100*(1-sizeBrick*0.03))+'px',
            width: (100*(1-sizeBrick*0.03))+'px',
            fontSize:(80*(1-sizeBrick*0.03))+'px',
            lineHeight: (80*(1-sizeBrick*0.03))+'px'

        }})
    }
    buildMode=()=>{
        if(this.state.buildMode==='deCenter'){
            this.setState({buildMode:'Center'})
        }else{
            this.setState({buildMode:'deCenter'})
        }
    }
    order=()=>{
        this.setState({purchasing:true})
    }
    modalClosed=()=>{
        this.setState({purchasing:false})
    }
    render(){
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.modalClosed}>
                    <SummaryBrick
                        counterBrick={this.state.counterBrick}
                    />
                </Modal>
                <div className={styles.trapeze}>
                    <button onClick={this.buildMode} className={styles.Button}>build mode: {this.state.buildMode}</button>
                    <p>the number of brick: {this.state.counterBrick}</p>
                </div>
                <Castle added={this.addWall}
                components={this.state.components}
                styleComponents={this.state.styleComponents}/>
                <div className={styles.ButtonDiv}>
                    <button className={styles.order}  onClick={this.order}>Order</button>
                </div>
            </Aux>
        );
    }
}
export default Builder;
//undefined
