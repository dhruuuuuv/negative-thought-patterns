import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>

    </main>
  )
}

export default Main
