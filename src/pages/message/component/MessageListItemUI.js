import React from 'react'
import {Menu,Dropdown,Icon,List,Modal} from 'antd'
import {RightButton,MySpan,MyIcon,RightWord} from './styled'
import * as words from "../wordInternationalization";
import * as messageType from './messageType'
import MyModal from './MyModal'

const MessageListItemUI = (props)=>{
    function MyMenu(props){
        return(<Menu selectable={false} onClick={()=>{props.deleteAction(props.messageID)}} >
                    <Menu.Item >
                        <a>{words.MESSAGE_RIGHT_MENU[0]}</a>
                    </Menu.Item>
                </Menu>
        )
    };
    const RightDropdown =(
        <Dropdown overlay={<MyMenu messageID={props.item.messageId} deleteAction={props.deleteAction}/>}>
            <RightButton size="small" >
                <Icon type="down"/>
            </RightButton>
        </Dropdown>
    )
    function chooseMeta(){
        switch(props.messageType){
            case messageType.MENTION:
                return (
                    <List.Item
                        key={props.item.messageID}

                    >
                        <List.Item.Meta
                            title={
                                <MySpan fontSize="15px" marginLeft="50px" fontWeight="bold" marginTop="10px">
                                    <MyIcon type="exclamation-circle-o" />
                                    <a href={"/profile/"+props.item.srcUID+'/1'}>{props.item.nickName}</a>
                                </MySpan>
                            }
                            description={<MySpan fontSize="10px" marginLeft="60px" fontWeight="normal">在"{props.item.content.substring(0,5)}..."提到你</MySpan>}
                        />
                        <RightWord onClick={props.showModal}>显示全部</RightWord>
                       <MyModal item ={props.item}/>
                    </List.Item>
                )
            case messageType.COMMENT:
                return (
                    <List.Item
                        key={props.item.messageID}
                    >
                        <List.Item.Meta
                            title={
                                <MySpan fontSize="15px" marginLeft="50px" fontWeight="bold" marginTop="10px">
                                    <MyIcon type="exclamation-circle-o" />
                                    <a href={"/profile/"+props.item.srcUID+'/1'}>{props.item.nickName}</a>
                                </MySpan>
                            }
                            description={<MySpan fontSize="10px" marginLeft="60px" fontWeight="normal">在"{props.item.content.substring(0,5)}..."评论你</MySpan>}
                        />
                        <RightWord onClick={props.showModal}>显示全部</RightWord>
                        <MyModal item ={props.item}/>
                    </List.Item>
                );
            case messageType.LIKES:
                return(
                    <List.Item
                        key={props.item.messageID}
                    >
                        <List.Item.Meta
                            title={
                                <MySpan fontSize="15px" marginLeft="50px" fontWeight="bold" marginTop="10px">
                                    <MyIcon type="like-o" />
                                    <a href={"/profile/"+props.item.srcUID+'/1'}>{props.item.nickName}</a>
                                </MySpan>
                            }
                            description={<MySpan fontSize="10px" marginLeft="60px" fontWeight="normal">在"{props.item.content.substring(0,5)}..."点赞</MySpan>}
                        />
                        <RightWord onClick={props.showModal}>显示全部</RightWord>
                        <MyModal item ={props.item}/>
                    </List.Item>
                );
            case messageType.FORWARD:
                return(
                    <List.Item
                        key={props.item.messageID}
                    >
                        <List.Item.Meta
                            title={
                                <MySpan fontSize="15px" marginLeft="50px" fontWeight="bold" marginTop="10px">
                                    <MyIcon type="retweet" />
                                    <a href={"/profile/"+props.item.srcUID+'/1'}>{props.item.nickName}</a>
                                </MySpan>
                            }
                            description={<MySpan fontSize="10px" marginLeft="60px" fontWeight="normal">转发了你的微博"{props.item.content.substring(0,5)}..."</MySpan>}
                        />
                        <RightWord onClick={props.showModal}>显示全部</RightWord>
                        <MyModal item ={props.item}/>
                    </List.Item>
                );
            case messageType.FOLLOW:
                return(
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <MySpan fontSize="15px" marginLeft="50px" fontWeight="bold" marginTop="10px">
                                    <MyIcon type="star-o" />
                                    <a href={"/profile/"+props.item.srcUID+'/1'}>{props.item.nickName}</a>
                                </MySpan>
                            }
                            description={<MySpan fontSize="10px" marginLeft="60px" fontWeight="normal">"{props.item.content.substring(0,5)}..."</MySpan>}
                        />
                        <RightWord onClick={props.showModal}>显示全部</RightWord>
                        <MyModal item ={props.item}/>
                    </List.Item>
                );
            default:
                return(
                    <List.Item/>
                )
        }
    }
    return(
        chooseMeta()
    )
}
export default MessageListItemUI;