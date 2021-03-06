import React,{Component} from 'react';
import 'antd/dist/antd.css'
import MyHeader from "../../common/header";
import MyContentUI from "../../common/contents/myContentUI";
import {BackTop} from 'antd';




class HomeUI extends Component{
    render(){
        return (
            <div>
                <MyHeader/>
                <MyContentUI/>
                <div>
                    <BackTop />
                    Scroll down to see the bottom-right
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                    button.
                </div>
            </div>
        )
    }
}
export default HomeUI;