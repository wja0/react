import React from 'react';
import {Switch , Route} from 'react-router-dom';
import {status, submit ,NotFound, problem ,Home , problemset } from './index';

const Pages = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/problemset' component={problemset} />
        <Route path='/problem/:id' component={problem} />
        <Route path='/status' component={status} />
        <Route path='/submit/' component={submit} />
        <Route path='/submit/:id' component={submit} />
        <Route component={NotFound} />
    </Switch>
);

export default Pages