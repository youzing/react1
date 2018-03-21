import React from 'react';
import '../../public/css/index.pcss'
import {HashRouter, Route, NavLink} from 'react-router-dom'
import Seconds from '../common/Seconds'
import Shop from '../shop/Index';
import demo1 from '../demo/demo1/Index';
import demo2 from '../demo/demo2/Index';
const Index = ({}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/" activeClassName="selected" exact>首页</NavLink>
                <NavLink to="/Shop" activeClassName="selected" exact>商城</NavLink>
                <NavLink to="/demo1" activeClassName="selected" exact>demo1</NavLink>
                <NavLink to="/demo2" activeClassName="selected" >demo2</NavLink>
            </div>
            <Route exact path="/" component={() => <Seconds title="首页"/>}/>
            <Route path="/Shop" component={Shop}/>
            <Route path="/demo1" component={demo1}/>
            <Route path="/demo2" component={demo2}/>
        </div>
    </HashRouter>;
export default Index;