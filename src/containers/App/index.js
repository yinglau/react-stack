import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './style.css'
import HomePage from '../HomePage'
import Header from '../../components/Header'

export default function App () {
  return (
    <div>
      <Header />
      <div className='container'>
        <div>
          <Link to={'/'}>首页</Link>
          <Link to={'/test'}>TEST</Link>
        </div>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
        </Switch>
      </div>
    </div>
  )
}
