import React,{Component} from 'react';
import {Layout,Menu,Affix,Row,Col,Avatar,List,Icon} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {actionCreators} from "../../pages/home/store";
import Button from "antd/es/button/button";

const {Sider}=Layout;
const {SubMenu}=Menu;

const uid=sessionStorage.getItem('uid');
console.log("currentuid:",uid);
const path=`/profile/${uid}/1`;

class LeftSiderUI extends Component{
    render(){
        const data=[{title:"个人主页",type:"user",key:1},{title:"关注",type:"heart-o",key:3},{title:"粉丝",type:"heart",key:4}];
        return(
            <Sider width={200} style={{ background: '#fff'}}>
                <Affix offsetTop={20}>
                    <Row type="flex" align="middle" style={{marginLeft:20,width: '100%'}}>
                        <div >
                        <Avatar  style={{verticalAlign:"center"}} src={this.props.avatarUrl}  size="large"/>
                        <b style={{marginLeft:20,fontSize:20,verticalAlign:"center"}}>
                            {this.props.username}
                        </b>
                        </div>
                    </Row>
                    <Row >
                        <List
                            style={{marginLeft:25,marginTop:15}}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item=>(
                                <List.Item>
                                    <div >
                                        <a href={`/profile/${uid}/${item.key}`}>
                                            <Icon type={item.type}/>
                                            <font style={{marginLeft:20}}>
                                                {item.title}
                                            </font>
                                        </a>

                                    </div>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Affix>
            </Sider>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        avatarUrl:state.getIn(['home','avatarUrl']),
        username:state.getIn(['home','username'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeActiveKey(result){
            dispatch(actionCreators.changeActiveKey(result));
            console.log("key:",result);
        },

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftSiderUI);