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
    const { loading } = this.props;
    return (
        <div >
        {loading ? <Loader /> : null}
          <Router history={history}>
            <Navbar />
            {Routes}
            <Footer />
          </Router>
        </div>
    );
  }
}
const mapStateToProps = ({ loader }) => ({
  loader
})
export default connect(mapStateToProps)(App);