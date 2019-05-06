import React,{Component} from 'react';
import styles from './Projects.module.css';
import axios from '../../axios-orders.js';
import Project from './Project/Project';
import Spinner from '../../components/UI/Spinner/Spinner';

class Projects extends Component{

    state = {
        project: [],
        loading: true
    }

    componentDidMount() {

        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, project: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }
    render(){
        let form=null
        if ( this.state.loading ) {
        form = <Spinner />;
        }

        return(
        <div className={styles.Container}>
            {form}
            {this.state.project.map(project=>(
                <Project
                key={project.id}
                castle={project.components}
                name={project.customer.name}
                counterBrick={project.counterBrick}
                title={project.customer.title}
                email={project.customer.email}
                //
                />
            ))}
        </div>
        );

    }
}

export default Projects;
