import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import {Home} from './pages'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        
        {/* <MainLayout exact path="*" component={Page404} /> */}
      </Switch>
    </BrowserRouter>
  )
}

