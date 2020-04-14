import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { setCurrentLang } from '../../store/actions/Lang';
import { connect } from 'react-redux';
import messages from './../../assets/Local/messages';

const Navbar = ({lang, setCurrentLang})=> {
  const message = messages[lang]
  const switcher = (lang) => {
    setCurrentLang(lang === 'ar' ? 'en' : 'ar');
  }

  const renderLangSwitcher = (langBtn, lang) => {
    console.log(lang);
    return (
      <div className="m-3">
        <Button variant="dark"
          className="mr-3"
          id="en"
          onClick={() => switcher(lang)}>
          {langBtn}
        </Button>
      </div>
    )
  }
  
  return(
    <Container>
      {renderLangSwitcher(message.langBtn, lang)}
      <h1>{message.home}</h1>
    </Container>
  )
  
}

const mapStateToProps = ({locale:{lang}}) => {
  return { lang: lang }
}

export default connect(mapStateToProps, { setCurrentLang })(Navbar);