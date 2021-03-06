import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';

import './index.css';
import {Layout} from 'antd';
import 'antd/dist/antd.css'
import Welcome from './pages/welcome/loadable'
import Home from './pages/home/loadable'
import MyFooter from "./common/footer";
import Message from './pages/message/Message';
import ProfileUI from "./pages/profile/ProfileUI";

import Register from "./pages/register/loadable";



const Index = (
    <Provider store={store}>
        <div>
            <Layout className="layout">
                <BrowserRouter>
                    <div>
                        <Route path='/welcome' exact component={Welcome}/>
                        <Route path='/home' exact component={Home}/>
                        <Route path='/profile/:uid' exact component={ProfileUI}/>
                        <Route path='/register' exact component={Register}/>
                        <Route path='/' exact render={()=><Redirect to='/welcome'/>}/>
                        <Route path='/message' exact component = {Message}/>
                    </div>
                </BrowserRouter>
                <MyFooter/>
            </Layout>
        </div>
    </Provider>
)

ReactDOM.render(Index, document.getElementById('root'));

