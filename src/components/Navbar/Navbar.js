import React, { Component } from 'react';
import { setCurrentLang } from '../../store/actions/Lang';
import { connect } from 'react-redux';
import messages from './../../assets/Local/messages';
import Button from '@material-ui/core/Button';

const Navbar = ({ lang, setCurrentLang }) => {
  const message = messages[lang]
  const switchLang = (lang) => {
    setCurrentLang(lang === 'ar' ? 'en' : 'ar');
  }

  const renderLangSwitcher = (langBtn, lang) => {
    console.log(lang);
    return (
      <div className="m-3">
        <Button 
          variant="contained"
          color="primary"
          onClick={() => switchLang(lang)}>
          {langBtn}
        </Button>
      </div>
    )
  }

  return (
    <div>
      {renderLangSwitcher(message.langBtn, lang)}
    </div>
  )

}

const mapStateToProps = ({ locale: { lang } }) => {
  return { lang: lang }
}

export default connect(mapStateToProps, { setCurrentLang })(Navbar);