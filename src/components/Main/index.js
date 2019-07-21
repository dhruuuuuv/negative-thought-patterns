import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import DistortionsPage from '../../pages/DistortionsPage';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/distortion/:distortion' component={DistortionsPage} />
        <Route component={NotFoundPage} />
      </Switch>

    </main>
  )
}

export default Main
