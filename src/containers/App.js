import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from '../routes/History';
import Routes from '../routes/Routes';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from '../assets/Local/messages';
import Navbar from "../components/Navbar/Navbar";
import Loader from "../components/Loader/Loader";

// ========== General styles ==========
import './App.scss';
class App extends Component {
  render() {
    const { lang, loading } = this.props;
    return (
      <IntlProvider
        locale={lang}
        messages={messages[lang]}>
        <div className={lang === 'ar' ? 'rtl' : 'ltr'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {loading ? <Loader /> : null}
          <Router history={history}>
            <Navbar />
            {Routes}
          </Router>
        </div>
      </IntlProvider>
    );
  }
}
const mapStateToProps = ({ locale: { lang }, loader }) => ({
  lang: lang,
  loader: loader,
})
export default connect(mapStateToProps)(App);