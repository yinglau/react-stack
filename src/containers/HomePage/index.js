import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { getNews } from './actions'
import saga from './saga'
import reducer from './reducer'
import { selectHomeNews } from './selectors'
import styles from './style.css'

class HomePage extends Component {
  componentDidMount () {
    this.props.getNews({
      tab: 'job',
      limit: 6
    })
  }

  renderListBox (res) {
    if (res && res.length) {
      return res.map(item => (
        <section key={item.id} className={styles.msgBox}>
          <span><img src={item.author.avatar_url} /></span>
          <article>
            <p><b>标题:</b> {item.title}</p>
            <p><b>发表日期:</b> {Date(item.create_at)}</p>
          </article>
        </section>
      ))
    } else {
      return null
    }
  }

  render () {
    const { homeNews } = this.props

    return (
      <div style={{ padding: '10px 0' }}>
        {homeNews.isRequest
          ? (<span>loading...</span>)
          : this.renderListBox(homeNews.data)
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getNews: (val) => {
      return dispatch(getNews(val))
    }
  }
}

const mapStateToProps = createStructuredSelector({
  homeNews: selectHomeNews()
})

const withSaga = injectSaga({ key: 'homePage', saga })
const withReducer = injectReducer({ key: 'homePage', reducer })
const withConnect = connect(mapStateToProps, mapDispatchToProps)

// containers propsTypes
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getNews: PropTypes.func,
  homeNews: PropTypes.object.isRequired
}

export default compose(withReducer, withSaga, withConnect)(HomePage)
