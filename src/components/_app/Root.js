import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Main from './Main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey, green } from '@material-ui/core/colors';
import { IntlProvider } from 'react-intl';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[800]
    },
    secondary: green,
  },
  status: {
  },
});


export default class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <IntlProvider locale={"pt-BR"}>
          <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
              <Main />
            </ConnectedRouter>
          </ThemeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};