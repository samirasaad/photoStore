import React , {useState, useEffect} from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import  App  from "./containers/App";
import { useSelector } from "react-redux";

function Theme() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const  lang  = useSelector(state => state.locale.lang);
  const [direction, setDirection] = useState(lang === 'en' ? 'ltr' : 'rtl');
  useEffect(() => {
    setDirection(lang === 'en' ? 'ltr' : 'rtl')
  }, [lang])
  const theme = createMuiTheme(
      { 
      direction : lang === 'en' ? 'ltr' : 'rtl',
      palette: {
        primary: {
            main : '#000000'
        },
        secondary : {
            main : '#acacac'
        }
      }
    }
    );
    document.body.dir = direction;
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Theme;
