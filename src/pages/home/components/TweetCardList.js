import React,{Component} from 'react'
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {actionCreators} from "../store";
import TweetCard from './TweetCard'


class TweetCardList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {tweetList}=this.props
        console.log("tweetList"+tweetList)
        return(
            <div>
                {
                    tweetList.map((tweetItem)=>{
                        return(
                            <TweetCard key={tweetItem.get('tid')}  tweetInfo={tweetItem}/>
                            )
                    })
                }
            </div>
        )
    }
}

const mapStatesToProps = (state)=>{
    return {
        tweetList:state.getIn(['home','tweetList'])
    }
}

export default connect(mapStatesToProps)(TweetCardList);