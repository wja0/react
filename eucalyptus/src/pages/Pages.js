import React from 'react';
import {Switch , Route} from 'react-router-dom';
<<<<<<< HEAD
import {status, submit ,NotFound, problem ,Home , problemset, Tmp, Auth } from './index';
=======
import {status, submit ,NotFound, problem ,Home , problemset, Tmp, Login } from './index';
>>>>>>> 7c84df71d0a55f5a76100b55dfce7aca893f5048

const Pages = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/problemset' component={problemset} />
        <Route path='/problem/:pnum' component={problem} />
        <Route path='/status' component={status} />
        <Route path='/submit/' component={submit} />
        <Route path='/submit/:id' component={submit} />
        <Route path='/Tmp' component={Tmp} />
<<<<<<< HEAD
        <Route path='/login' component={Auth} />
=======
        <Route path='/Login' component={Login} />
>>>>>>> 7c84df71d0a55f5a76100b55dfce7aca893f5048
        <Route component={NotFound} />
    </Switch>
);

export default Pages