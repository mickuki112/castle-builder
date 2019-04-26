import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from'../Navigation/SideDrawer/SideDrawer'
class Layout  extends Component{
    state={showSideDrawer:false}
    sideDrawerClose=()=>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerShow=()=>{
        this.setState({showSideDrawer:true});
    }
    render(){
    return(
        <Aux>
            <Toolbar clicked={this.sideDrawerShow}/>
            <SideDrawer open={this.state.showSideDrawer}closed={this.sideDrawerClose}/>
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Aux>
    )}}

export default Layout;
