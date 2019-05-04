import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import Builder from './containers/Builder/Builder';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Layout>
            <Builder />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
