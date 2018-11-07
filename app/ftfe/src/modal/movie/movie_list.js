import React, {Component} from 'react';

import { Row, Col } from 'antd';

export default class extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div >
        <div style={{
                borderTopRightRadius:'18px',borderTopLeftRadius:'18px',width:'100%',}}>
            <img  src={this.props.img}  style={{height:'127px',width:'100%', 
                borderTopRightRadius:'18px',borderTopLeftRadius:'18px',}}/>
        </div>
        <div style={{width:'100%',borderBottomRightRadius:'18px',borderBottomLeftRadius:'18px',padding:'2% 5%',
                height:'39px',fontWeight:500,background:'#FFFFFF'}}>
                相关视频1
        </div>
    </div>
            )
    }
}