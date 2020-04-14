import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ar from 'react-intl/locale-data/ar';
import Theme from './Theme';

addLocaleData(en);
addLocaleData(ar);

ReactDOM.render(
  <Provider store={store}>
    <Theme />
  </Provider>,
  document.querySelector('#root')
);