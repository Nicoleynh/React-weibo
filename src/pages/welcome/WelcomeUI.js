import React,{Component} from 'react';
import {Layout,Breadcrumb,Input} from 'antd';
import 'antd/dist/antd.css'
import MyHeader from "../../common/header";
import LoginForm from "./components/LoginForm";



const {Content} = Layout;


class WelcomeUI extends Component{
    render(){
        return (
            <div>
                <MyHeader/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        Content
                        <LoginForm
                        />
                    </div>
                    <Input onChange={this.props.handleInputChange}/>
                    <label>{this.props.inputValue}</label>
                </Content>
            </div>
        )
    }
}
export default WelcomeUI;