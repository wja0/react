import React from 'react';
import {Switch , Route} from 'react-router-dom';
import {status, submit ,NotFound, problem ,Home , problemset, Tmp, Login, User } from './index';
import Register from '../layout/Register';


const Pages = () => (
    <Switch>
        <Route exact path="/" render={(props) => <Home bh={false}/>} />
        <Route path='/problemset' component={problemset} />
        <Route path='/problem/:id' component={problem} />
        <Route path='/status/:id' component={status} />
        <Route path='/submit/:id' component={submit} />
        {/* <Route path='/submit/:id' render={(props) => <submit />} /> */}
        <Route path='/Tmp' component={Tmp} />
        <Route path='/Login' component={Login} />
        <Route path='/user' component={User} />
        <Route exact path='/Register' component={Register}/>
        <Route exact path='/Register/done' component={Home}/>
        <Route component={NotFound} />
    </Switch>
);

export default Pages