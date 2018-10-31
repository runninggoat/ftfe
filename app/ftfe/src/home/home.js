import React, { Component } from 'react'
import Ad from './ad_title'
import HotMovieList from './hot_movie_list'
import { Row, Col,Button,Icon } from 'antd'
import WatchList from './watch_list'
import NewUpload from './new_upload'
import PlayModal from '../modal/test'
import { Tabs } from 'antd';
import './home.css'

const TabPane = Tabs.TabPane;


class Home extends Component {
  render () {
    return (
      <div
        style={{
          backgroundColor:'white'
        }}
      >
      <Row gutter={12}>
        
        <Col span ={24}>
          <Ad />
        </Col>
        
        
          <Col span ={1} />
          <Col span ={11}>
            <div>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="推荐" key="1"></TabPane>
              <TabPane tab="视频" key="2"></TabPane>
              <TabPane tab="文学" key="3"></TabPane>
              <TabPane tab="其他" key="4"></TabPane>
            </Tabs>
            </div>
          </Col>
          <Col span ={12} />
        
         
        
        
        
        <Col span ={24}>
          <HotMovieList />
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