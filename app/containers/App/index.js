/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'redux/selectors/app';
import { loadUserAction } from 'redux/actions/app';

import Header from 'components/Header';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  height: 100%;
`;

const defaultUserId = 1;

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  static propTypes = {
    loadCurrentUser: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  };

  static defaultProps = {
    currentUser: null,
  };

  componentDidMount() {
    this.props.loadCurrentUser(); // this should be done at login page in the real world.
  }

  render() {
    return (
      <React.Fragment>
        <AppWrapper>
          <Header currentUser={this.props.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </AppWrapper>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadCurrentUser: () => dispatch(loadUserAction(defaultUserId)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
