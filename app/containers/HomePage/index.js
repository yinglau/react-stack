import React, {Component} from 'react';
import {toJS} from 'immutable';
import {connect} from 'react-redux';
import {compose} from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PropTypes from 'prop-types';

import {changeTitle} from './actions';
import saga from './saga';
import reducer from './reducer';

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps) {
    console.log('chg props', nextProps.home.get('title'));
  }

  render() {
    console.log('render', this.props.home);


    return (
      <div>
        this is a home title: {this.props.home && this.props.home.get('title')}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChgTitle: (title) => {
      return dispatch(changeTitle(title))
    },
    fetchPost: () => {
      return dispatch({type: 'HOME_FETCH'});
    }
  };
}

const mapStateToProps = (state) => {
  console.log('maptoprops', state.getIn(['home', 'title']))
  return {
    home: state.get('home')
  };
}

const withSaga = injectSaga({key: 'home', saga});
const withReducer = injectReducer({key: 'home', reducer})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withSaga, withConnect)(HomePage)
