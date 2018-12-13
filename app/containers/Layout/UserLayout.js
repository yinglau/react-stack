import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

export default function UserLayout({match}) {
  console.log('xxxxx', match);

  return (
    <div>
      <div>this is header!!!</div>
      <div>
        <Link to={`/index`}>index</Link><br />
        <Link to={`${match.url}/home`}>user home</Link><br />
        <Link to={`${match.url}/info`}>user info</Link>
      </div>
      <Switch>
        <Route exact path={`${match.url}/home`} render={() => <div>User Home</div>} />
        <Route path={`${match.url}/info`} render={() => <div>User Info</div>} />
      </Switch>
      <div>this is footer</div>
    </div>
  )
}
