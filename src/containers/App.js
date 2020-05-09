import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from '../routes/History';
import Routes from '../routes/Routes';
import { connect } from 'react-redux';
import Navbar from "../components/Navbar/Navbar";
import Loader from "../components/Loader/Loader";
import './App.scss';
import Footer from '../components/Footer/Footer';
class App extends Component {
  render() {
    const { loader } = this.props;
    return (
        <Router history={history}>
          {loader ? <Loader /> : null}
          <Navbar />
          {Routes}
          <Footer />
        </Router>
    );
  }
}
const mapStateToProps = ({ loader }) => ({
  loader
})
export default connect(mapStateToProps)(App);