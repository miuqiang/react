import React ,{ Component, Suspense, lazy  } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('../views/login'));
const Layout = lazy(() => import('../views/layout'));

export default class RouterWrap extends Component {
  render() {
    return(
      <div id="router">
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component = {Layout} exact></Route>
              <Route path="/login" component = {Login}></Route>
            </Switch>
          </Suspense>
        </HashRouter>
      </div>
    )
  }
}