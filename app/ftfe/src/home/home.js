import React, { Component } from 'react'
import Ad from './ad_title'
import HotMovieList from './hot_movie_list'
import { Row, Col,Button,Icon,Carousel } from 'antd'
import WatchList from './watch_list'
import NewUpload from './new_upload'
import PlayModal from '../modal/play_modal'
import { Tabs } from 'antd';
import './home.css'


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
        
        
        
        <Col span ={24}><div style={{
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
          <div><NewUpload /></div>
        </Col>
        
        
        <Col span ={24}>
          <Row>
            <Col span={9} />
            <Col span={6} >
              <div>
                <Button style={{
                  background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                  margin:'0 10%',
                  width:'80%',
                  boxShadow:'0px 5px 10px 0px rgba(255,79,81,0.66)',
                  borderRadius:'41px',
                  border:'0px'
                }}> 
                <Icon type="redo" theme="outlined" style={{color:'#FFFFFF'}} />
                <span style={{color:'#FFFFFF'}}>加载更多</span>
                </Button>
              </div>
            </Col>
            <Col span={9} />
          </Row>
          
        </Col>
          
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