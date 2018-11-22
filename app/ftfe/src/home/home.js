import React, { Component } from 'react'
import Ad from './ad_title'
import HotMovieList from './hot_movie_list'
import { Row, Col,Button,Icon,Carousel } from 'antd'
import WatchList from './watch_list'
import NewUpload from './new_upload'
import PlayModal from '../modal/play_modal'
import MyIcon from '../my_icon'
import { Tabs } from 'antd';
import './hot.less'

const TabPane = Tabs.TabPane;


class Home extends Component {
  render () {
    return (
      
      <Row gutter={12} type="flex" justify="center">
        <Col span ={24}>
          <Ad />
        </Col>
        <Col span ={24}><div style={{
          backgroundColor:'#FFFFFF',
          boxShadow:'0px 2px 31px 0px rgba(205,205,205,0.27)',
          height:54,
        }}> 
          <Row>
            <Col offset={6} span ={18} ><div style={{maxWidth:1440}}>
              <Tabs defaultActiveKey="1" size={'large'}>
                  <TabPane tab={<span style={{margin:'0 30%'}} >推&nbsp;&nbsp;荐</span>} key="1"></TabPane>
                  <TabPane tab={<span style={{margin:'0 30%'}} >视&nbsp;&nbsp;频</span>} key="2"></TabPane>
                  <TabPane tab={<span style={{margin:'0 30%'}} >文&nbsp;&nbsp;学</span>} key="3"></TabPane>
                  <TabPane tab={<span style={{margin:'0 30%'}} >其&nbsp;&nbsp;他</span>} key="4"></TabPane>
              </Tabs></div>
            </Col>
          </Row>
                
        </div></Col>
        
        <div
        style={{
          backgroundColor:'#FEFEFE',
          maxWidth:'1440px',
          minWidth:'1200px',
        }}
      >
        
        <Col span={24} >
               <Carousel>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
                <div><HotMovieList /></div>
              </Carousel>
        </Col>
        
        <Col span={24} >
               <Carousel>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
                <div><WatchList /></div>
              </Carousel>
        </Col>
        <Col span={24} >
          <div><NewUpload /></div>
        </Col>
        
        
        <Col span ={24}>
          <Row>
            <Col span={9} />
            <Col span={6} >
              <div style={{textAlign:'center'}}>
                <Button style={{
                  background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                  margin:'30px 0 60px 0',
                  width:'300px',
                  height:'45px',
                  boxShadow:'0px 5px 10px 0px rgba(255,79,81,0.66)',
                  borderRadius:'41px',
                  border:'0px'
                }}> 
                <MyIcon type="icon-refresh" theme="outlined" style={{color:'#FFFFFF'}} />
                <span style={{color:'#FFFFFF'}}>加载更多</span>
                </Button>
              </div>
            </Col>
            <Col span={9} />
          </Row>
          
        </Col>
        <PlayModal />
          </div>
          
      </Row>
      
      
    )
  }
}

export default Home
