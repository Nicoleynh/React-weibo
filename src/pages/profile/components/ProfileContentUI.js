import React,{Component} from 'react';
import {Layout,Breadcrumb,Menu,Icon} from 'antd';
import 'antd/dist/antd.css'
import EditProfileContentUI from "./EditProfileContentUI"
import {actionCreators} from "../store";
import {connect} from "react-redux";
import { Tabs, Radio } from 'antd';
import FollowListContentUI from "./FollowListContentUI";
import FollowerListContentUI from "./FollowerListContentUI";
import PersonalTweetContent from './PersonalTweetContent'
import OthersTweetContent from './OthersTweetContent'



const {Content} = Layout;
const TabPane = Tabs.TabPane;

class ProfileContentUI extends Component{
    constructor( props ) {
        super(props);
        this.state = {
            //clickKey:this.props.clickKey,//记录点击的链接，进行动态加载
        };
    }

    handleUserInfo(){//注意：是在组件加载完毕后立即执行
        const uid=this.props.uid;
        console.log("dhsajdhjashdka     ",uid)
        if(uid==sessionStorage.getItem('uid')){
            return(
                <Layout style={{ padding: '24px 0', background: '#fff'}}>
                    <Tabs
                        size="large"
                        disabled key="2"
                        defaultActiveKey={this.props.activeKey}
                        tabPosition={'left'}
                        // style={{ height: '900px'}}
                    >

                        <TabPane tab="微博" key="1"><PersonalTweetContent/></TabPane>
                        <TabPane tab="--基本信息--" key="2" disabled key="2"></TabPane>
                        <TabPane tab="关注" key="3"><FollowListContentUI/></TabPane>
                        <TabPane tab="粉丝" key="4"><FollowerListContentUI/></TabPane>
                        <TabPane tab="编辑个人资料" key="5"><EditProfileContentUI/></TabPane>
                    </Tabs>

                </Layout>
            );
        }else{
            return(
                <Layout style={{ padding: '24px 0', background: '#fff'}}>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition={'left'}
                        // style={{ height: '900px' }}
                    >
                        {/*<TabPane tab="基本信息" key="1" disabled key="1"></TabPane>*/}
                        {/*<TabPane tab="关注" key="2"><FollowListContentUI/></TabPane>*/}
                        {/*<TabPane tab="粉丝" key="3"><FollowerListContentUI/></TabPane>*/}
                        <TabPane tab="微博" key="1"><OthersTweetContent uid={this.props.uid}/></TabPane>
                        {/*<TabPane tab="编辑个人资料" key="2"><EditProfileContentUI/></TabPane>*/}
                    </Tabs>

                </Layout>
            )
        }
    }


    render(){
        return (
            <Content style={{marginLeft:'10%',marginRight:'10%'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>个人主页</Breadcrumb.Item>
                </Breadcrumb>
                {/*<div>*/}

                {/*</div>*/}
                {this.handleUserInfo()}
            </Content>
        )
    }



}


const mapStateToProps=(state)=>{
    return{
        //clickKey:state.getIn(['profile','clickKey']),
        clickUid:state.getIn(['profile','uid']),
        activeKey:state.getIn(['profile','activeKey']),
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleModifyClick(nickname,username,sex,email){
            console.log("form_data:",nickname,username,sex,email);
            dispatch(actionCreators.saveProfileDataAction(nickname,username,sex,email))

        },
        handlePasswordSave(password){
            dispatch(actionCreators.savePasswordAction(password));
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContentUI);