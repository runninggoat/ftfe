import React from "react";
import { Row, Col, Button,} from "antd";
import img1 from "../image/001.jpeg";
import MyIcon from "../my_icon";
import { Tag } from 'antd';
import { Tooltip, Progress } from 'antd';

const Title = (props) =>{
    return(
        <div style={{
            backgroundColor:'#FFFFFF',
            width:1200,
            height:273,
            background:'rgba(255,255,255,1)',
            boxShadow:'0px 2px 15px 0px rgba(0,0,0,0.05)',
            borderRadius:16,
        }}>
            <div style={{
                backgroundImage:`url(${
                    props.img ? props.img : "black"
                })`,
                width:395,
                height:273,
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                
            }}>
                <div style={{
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 0 273px 155px',
                    borderColor:' transparent transparent #fff transparent',
                    float: 'right',
                }}>
                </div>
                <Button
                shape='circle'
                 style={{
                    position: 'absolute',
                    top: '106px',
                    left: '283px',
                    width:71,
                    height:71,
                    color:'#fff',
                    background: props.background?props.background:'black',
                }}>
                    <MyIcon type={'icon-play_fill'} 
                    style={{fontSize:40}}/>
                </Button>
                    
            </div>
            <div  style={{
                position: 'absolute',
                top: 0, 
                left: 395,
            }}>
                <div style={{
                    fontSize:26,
                    fontWeight:500,
                    color:'rgba(0,0,0,1)',
                    lineHeight:'37px',
                    margin:'28px 0 14px',
                }}> 
                    这个项目的标题这个项目的标题
                </div>
                <div>
                <Tag style={{
                    margin:"0 5px",
                    color:"#9B9B9B",
                    width:55,
                    height:20,
                    background:'rgba(238,238,238,1)',
                    borderRadius:'10px',
                    textAlign: 'center',
                }}>动画</Tag>
                <Tag style={{
                    margin:"0 5px",
                    color:"#9B9B9B",
                    width:55,
                    height:20,
                    background:'rgba(238,238,238,1)',
                    borderRadius:'10px',
                    textAlign: 'center',
                }}>视频</Tag>
                <Tag style={{
                    margin:"0 5px",
                    color:"#9B9B9B",
                    width:55,
                    height:20,
                    background:'rgba(238,238,238,1)',
                    borderRadius:'10px',
                    textAlign: 'center',
                }}>原创</Tag>
                </div>
                <div>
                    <Progress percent={25} 
                    successPercent={2} 
                    status="active"
                    strokeColor='red'
                    />
                </div>


            </div>
                    
        </div>
        
    
)}

export default Title