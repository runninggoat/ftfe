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
      
      <Row type="flex" justify="center">
        <Col span ={24}>
          <Ad />
        </Col>
        <Col
          span ={24}
          style={{
            backgroundColor:'#FFFFFF',
            boxShadow:'0px 2px 31px 0px rgba(205,205,205,0.27)',
            height:54,
          }}
        >
          <div style={{
              maxWidth:'1440px',
              minWidth:'1200px',
              margin: 'auto',
            }}
          > 
            <Row type="flex" justify="center">
              <Col offset={1} span ={22} >
                <Tabs defaultActiveKey="1" size={'large'} style={{ marginLeft: '-30px' }}>
                    <TabPane tab={<span>推&nbsp;&nbsp;荐</span>} key="1"></TabPane>
                    <TabPane tab={<span>视&nbsp;&nbsp;频</span>} key="2"></TabPane>
                    <TabPane tab={<span>文&nbsp;&nbsp;学</span>} key="3"></TabPane>
                    <TabPane tab={<span>其&nbsp;&nbsp;他</span>} key="4"></TabPane>
                </Tabs>
              </Col>
            </Row>
          </div>
        </Col>
        
        <Col span={24} style={{ marginTop: '5px' }}>
          <div style={{
              backgroundColor:'#FEFEFE',
              maxWidth:'1440px',
              minWidth:'1200px',
              margin: 'auto',
              position:'relative',
            }}
          >
            <Carousel>
              <div><HotMovieList /></div>
              <div><HotMovieList /></div>
              <div><HotMovieList /></div>
              <div><HotMovieList /></div>
              <div><HotMovieList /></div>
            </Carousel>
            <div style={{
            width:60,
            position:'absolute', 
            top: 345,
            right: 1400,
            }}>
                <Button className='homepage-btn'>
                    <MyIcon className='homepage-icon' type={ 'icon-enter-copy'}/>
                </Button>
            </div>
            <div style={{
            width:60,
            position:'absolute', 
            top: 345,
            left: 1400,
            }}>
                <Button className='homepage-btn'>
                    <MyIcon className='homepage-icon' type={ 'icon-enter'}/>
                </Button>
            </div>
          </div>
        </Col>
        
        <Col span={24} >
          <div style={{
              backgroundColor:'#FEFEFE',
              maxWidth:'1440px',
              minWidth:'1200px',
              margin: 'auto',
              position:'relative',
            }}
          >
            <Carousel>
              <div><WatchList /></div>
              <div><WatchList /></div>
              <div><WatchList /></div>
              <div><WatchList /></div>
              <div><WatchList /></div>
            </Carousel>
            <div style={{
            width:60,
            position:'absolute', 
            top: 345,
            right: 1400,
            }}>
                <Button className='homepage-btn'>
                    <MyIcon className='homepage-icon' type={ 'icon-enter-copy'}/>
                </Button>
            </div>
            <div style={{
            width:60,
            position:'absolute', 
            top: 345,
            left: 1400,
            }}>
                <Button className='homepage-btn'>
                    <MyIcon className='homepage-icon' type={ 'icon-enter'}/>
                </Button>
            </div>
          </div>
        </Col>
        <Col span={24} >
          <div style={{
              backgroundColor:'#FEFEFE',
              maxWidth:'1440px',
              minWidth:'1200px',
              margin: 'auto',
            }}
          >
            <div><NewUpload /></div>
          </div>
        </Col>
        
        
        <Col span ={24}>
          <div style={{
              backgroundColor:'#FEFEFE',
              maxWidth:'1440px',
              minWidth:'1200px',
              margin: 'auto',
            }}
          >
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
          </div>
        </Col>
        <PlayModal />
      </Row>
    )
  }
}

export default Home
