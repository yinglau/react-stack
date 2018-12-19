import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'

import HomePage from '../HomePage'
import PersonalPage from '../PersonalPage'
import TestPage from '../TestPage'

export default function App () {
  return (
    <div>
      <div>this is header</div>
      <div>
        <Link to={'/'}>home</Link><br />
        <Link to={'/user'}>user</Link><br />
      </div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/user'} component={PersonalPage} />
        <Route exact path={'/test'} component={TestPage} />
      </Switch>
      <div>this is footer</div>
    </div>
  )
}
