import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { defaultAction } from './actions'
import saga from './saga'
import reducer from './reducer'
import { getDefaultState } from './selectors'

class HomePage extends Component {
  componentDidMount () {

  }

  clickAction = () => {
    this.props.defaultAction(Math.random())
  }

  render () {
    return (
      <div>
        <p>this is home default state: <b>{this.props.homeDefaultState}</b></p>
        <div onClick={this.clickAction}>press me!</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    defaultAction: (val) => {
      return dispatch(defaultAction(val))
    }
  }
}

const mapStateToProps = createStructuredSelector({
  homeDefaultState: getDefaultState()
})

const withSaga = injectSaga({ key: 'homePage', saga })
const withReducer = injectReducer({ key: 'homePage', reducer })
const withConnect = connect(mapStateToProps, mapDispatchToProps)

// containers propsTypes
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  defaultAction: PropTypes.func,
  homeDefaultState: PropTypes.string.isRequired
}

export default compose(withReducer, withSaga, withConnect)(HomePage)
