import React,{Component} from 'react';
import BrickOfType from './Brick/Brick';
import styles from './Project.module.css';
import Window from './Window/Window';
class Project extends Component{
    state={
        show:'Page Expand',
    }
    styleVerse={
        display: 'flex',
        justifyContent: 'center',
        width:'auto',
        margin:'auto',
        height:'auto',

        //margin:'auto',
    }
    show=()=>{
        if(this.state.show==='Page Expand'){
            this.setState( {show : '^Page Collapse^',});}
        else{
            this.setState( {show : 'Page Expand',});}
    }
    render(){
    let castle =null;
    if(this.state.show==='^Page Collapse^'){
        castle=this.props.castle.map((column,i)=>{
                return <div style={this.styleVerse} key={i}>{column.map((verse,j)=>{
                    return <BrickOfType
                    key={j}
                    className={styles.Brick}
                    type={verse}/>
                })}</div>
            })
        }
    return(
            <Window
                click={this.show}
                name={this.props.name}
                counterBrick={this.props.counterBrick}
                castle={castle}
                title={this.props.title}
                email={this.props.email}
                buttonName={this.state.show}
            />
    );}
};
export default Project;
