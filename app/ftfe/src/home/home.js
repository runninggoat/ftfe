import React, { Component } from 'react'
import Ad from './ad_title'
import HotMovieList from './hot_movie_list'
import { Row, Col,Button,Icon } from 'antd'
import WatchList from './watch_list'
import NewUpload from './new_upload'
import PlayModal from '../modal/test'
import { Tabs } from 'antd';
import './home.css'

import { Carousel } from 'antd';

const TabPane = Tabs.TabPane;


class Home extends Component {
  render () {
    return (
      <div
        style={{
          background:'rgba(254,254,254,1)'
        }}
      >
      <Row gutter={12}>
        
        <Col span ={24}>
          <Ad />
        </Col>
        
        
        
        <Col><div style={{
          background:'#FFFFFF'
        }}>
          <Row>
            <Col span ={1} />
              <Col span ={11}>
                
                <Tabs defaultActiveKey="1" >
                  <TabPane tab="推荐" key="1"></TabPane>
                  <TabPane tab="视频" key="2"></TabPane>
                  <TabPane tab="文学" key="3"></TabPane>
                  <TabPane tab="其他" key="4"></TabPane>
                </Tabs>
                
              </Col>
              <Col span ={12} />
          </Row>
        
        </div></Col>
        
        
        
        
        <Col span={24} >
            <Row>
               <Carousel>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
              </Carousel>
            </Row>
        </Col>
        
        <Col span={24} >
            <Row>
               <Carousel>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
              </Carousel>
            </Row>
        </Col>
        <Col span={24} >
            <Row>
               <Carousel>
                <div><NewUpload /></div>
                <div><NewUpload /></div>
                <div><NewUpload /></div>
                <div><NewUpload /></div>
                <div><NewUpload /></div>
              </Carousel>
            </Row>
        </Col>
        
        
        
        
        
        <Col span ={24}><div><Button  size={'large'} style={{margin:'0 10%',width:'80%'}}> <Icon type="redo" theme="outlined" />加载更多</Button></div></Col>
          
      </Row>
      <PlayModal />
      </div>
    )
  }
}

export default Home
// <Col span ={24}>
//           <WatchList />
          
//         </Col>
        
        
//         <Col span ={24}>
//           <NewUpload />
//         </Col>