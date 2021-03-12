import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Register from '../layout/Register';
import Done from '../layout/Done'
import {status, submit ,NotFound, problem ,Home , problemset, Tmp, Login, User, source } from './index';

const Pages = () => (
    <Switch>
        {/* <Route exact path="/" render={(props) => <Home bh={false}/>} /> */}
        <Route exact path="/" component={Home}/>
        <Route path='/problemset' component={problemset} />
        <Route path='/problem/:id' component={problem} />
        <Route path='/status/:id' component={status} />
        <Route path='/submit/:id' component={submit} />
        {/* <Route path='/submit/:id' render={(props) => <submit />} /> */}  
        <Route path='/user/:id' component={User} />
        <Route path='/Tmp' component={Tmp} />
        <Route path='/Login' component={Login} />
        <Route exact path='/Register' component={Register}/>
        <Route path='/Register/Done' component={Done}/>
        <Route path='/source:subNum' component={source} />
        <Route component={NotFound} />
    </Switch>
);

export default Pages
