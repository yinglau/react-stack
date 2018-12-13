import React from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';

export default function Common({match}) {
  return (
    <div>
      <div>this is header!!!</div>
      <div>
        <Link to={`/index`}>home</Link><br />
        <Link to={`/about`}>About</Link>
        <Link to={`/user`}>User</Link>
      </div>
      <Switch>
        <Route path={`/index`} render={() => <div>Home</div>} />
        <Route path={`/about`} render={() => <div>About</div>} />
        <Redirect from={'/'} to={'/index'} />
      </Switch>
      <div>this is footer</div>
    </div>
  )
}
