import React, { Component } from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import Routes from '../index'

const routesList = Routes.map((e, i) => (
    <Route key={i} exact={e.exact} path={e.path} children={<e.main />} />
))

export class RouteComponent extends Component {

    render() {
        return (
            <Switch>
                {routesList}
            </Switch>

        )
    }
}

export default RouteComponent
