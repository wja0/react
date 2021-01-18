import React from 'react'
import {Switch , Route} from 'react-router-dom'
import {NotFound, problem ,Home , problemset } from './index';

const Pages = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/problemset' component={problemset} />
        <Route path='/problem' component={problem} />
        <Route component={NotFound} />
    </Switch>
);

export default Pages