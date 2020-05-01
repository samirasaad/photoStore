import React , {useState, useEffect} from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import  App  from "./containers/App";
import { useSelector } from "react-redux";

function Theme() {
  const theme = createMuiTheme(
      {
        typography: {
          fontFamily: [
            'PatrickHand-Regular'
          ]
      }, 
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
  return (
    <StylesProvider >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Theme;
