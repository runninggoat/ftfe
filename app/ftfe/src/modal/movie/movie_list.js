import React, {Component} from 'react';

import { Row, Col,Tag} from 'antd';

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
                <div >{this.props.time?(<Tag style={{position:'absolute',bottom:'30%',right:'5%',border:0,borderRadius:'10px',background:"#222222"}}>
                  <span style={{color:'#FFFFFF'}}>{this.props.time}</span> 
                </Tag>):''}</div>
        </div>
        <div style={{width:'100%',borderBottomRightRadius:'18px',borderBottomLeftRadius:'18px',padding:'2% 5%',
                height:'39px',fontWeight:500,background:'#FFFFFF'}}>
                相关视频1
        </div>
    </div>
            )
    }
}