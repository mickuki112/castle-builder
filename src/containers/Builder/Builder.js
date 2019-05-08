import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Castle from '../../components/Castle/Castle';
import Modal from '../../components/UI/Modal/Modal';
import SummaryBrick from '../../components/Castle/SummaryBrick/SummaryBrick';
import styles from './Builder.module.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Route,Redirect,Switch} from 'react-router-dom';
import Projects from '../Projects/Projects';


class Builder extends Component {
    state={
        loading: false,
        error: false,
        purchasing:false,
        components:[["add"]],
        buildMode:'deCenter',
        counterBrick:0,
        styleComponents:{
            height: '100px',
            width: '100px',
            fontSize:'80px',
            minWidth:'80px',
            lineHeight: '80px',
        }
    }
    customer={
        name: 'anonym',
        title:'anonym',
        email: 'anonym',
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
        const sizeComponent=(1-sizeBrick*0.03);
        this.setState({
        counterBrick:counterBrick,
        components:updateWall,
        styleComponents:{
            height: (100*sizeComponent)+'px',
            minWidth: (100*sizeComponent)+'px',
            width: (100*sizeComponent)+'px',
            fontSize:(80*sizeComponent)+'px',
            lineHeight: (80*sizeComponent)+'px'

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
    sendDatebase=()=>{
        this.setState( { loading: true } );
        const order = {
            components: this.state.components,
            counterBrick:this.state.counterBrick,
            customer: {
                name: this.customer.name,
                title:this.customer.title,
                email: this.customer.email,
            },
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false, purchasing: false } );
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
    }
    inputPublish=(event)=>{

    }
    render(){
        const builder=(
            <Aux>
                <div className={styles.trapeze}>
                    <button onClick={this.buildMode} className={styles.Button}>build mode: {this.state.buildMode}</button>
                    <p>the number of brick: {this.state.counterBrick}</p>
                </div>
                <Castle added={this.addWall}
                components={this.state.components}
                styleComponents={this.state.styleComponents}/>
                <div className={styles.ButtonDiv}>
                    <button className={styles.order}  onClick={this.order}>Publish</button>
                    <p className={styles.copy}>&copy; by Michał Kubiak</p>
                </div>
            </Aux>
        );
        let orderSummary=(
            <SummaryBrick
                clicked={this.sendDatebase}
                counterBrick={this.state.counterBrick}
            >
                <form>
                    <input className={styles.Input} onChange={(event) => this.customer.name=event.target.value} type="text" name="title" placeholder="Title of the castle" />
                    <input className={styles.Input} onChange={(event) => this.customer.title=event.target.value} type="text" name="Name" placeholder="Your Name" />
                    <input className={styles.Input} onChange={(event) => this.customer.email=event.target.value} type="email" name="email" placeholder="Your Email" />
                </form>
            </SummaryBrick>

        );
        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.modalClosed}>
                    {orderSummary}
                </Modal>
                <Switch>
                    <Route path='/builder' exact  render={()=>builder}/>
                    <Route path='/projects' component={Projects}/>
                    <Redirect from="/" to="/builder"  />
                </Switch>
            </Aux>
        );
    }
}
export default Builder;
