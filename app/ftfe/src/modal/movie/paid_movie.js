import React from 'react';
import { Player,BigPlayButton,ControlBar,VolumeMenuButton,LoadingSpinner } from "video-react";
import { Button } from "antd";
import "video-react/dist/video-react.css";

import { Row, Col,Tag } from 'antd';

const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";



export default () => (
  
  <div style={{padding:'2.5%', margin:'1% 1% 1% 1%',backgroundColor:'green',borderRadius:'16px'}}>
    <Row>
      <Col>
      
        <Row>
          <Col>
            <Player poster={img1} preload='metadata'>
              <BigPlayButton position="center" />
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <LoadingSpinner />
              <ControlBar autoHide={true} >
              <VolumeMenuButton vertical />
              </ControlBar>
            </Player>
            <h1>这个视频标题</h1>
            <h2>2018-10-30 12:59:22</h2>
          </Col>
        </Row>
        
        <Row>
          
          <Col span={6}>
            <Tag color="magenta">视频</Tag>
            <Tag color="red">动画</Tag>
            <Tag color="volcano">原创</Tag>
          
          </Col>
          <Col span={6}/>
          <Col span={12}>
            <div style={{float:'right'}}>
            9,999 观看 9,999 赞 已收藏 分享
            </div>
          </Col>
        </Row>
    
      </Col>
    </Row>
  
    
    
  </div>
  )




