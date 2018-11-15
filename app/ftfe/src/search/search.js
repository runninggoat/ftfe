import React, { Component } from 'react'

import { Row, Col} from 'antd';
import { Input } from 'antd';
import { Tabs,Button } from 'antd';
import DropdownHot from './dropdown_hot';
import Dropdowning from './dropdown_ing';
const TabPane = Tabs.TabPane;


class Search extends Component {
  state={
    type:
      {
        video:[
            '动画','MTV','真人秀','访问','电影','电视剧','其他',
          ],
        music:['POP','RAP','Country','Rock','Jazz','R&B','Hip Hop','Classical','DJ','Indie','Punk','其他'],
        doc:['音乐剧本','言情小说','非虚构类','玄幻','恐怖','其他'],
        other:['编舞','科技','图片','设计','创意']
      }
        ,
    results: [
      {
        title: '',
        imgSrc: '',
        likes: '',
        watched: '',
      },
    ],
  }
  
  render () {
    let cards = this.state.results.map(result => {
      return (
        <div>result.title</div>
      )
    })
    let videos= this.state.type.video.map(v=>{
      return(
        <span style={{margin:'0 0 0 2% '}}>{v}</span>
        )
    })
    let musics= this.state.type.music.map(v=>{
      return(
        <span style={{margin:'0 0 0 2% '}}>{v}</span>
        )
    })
    let docs= this.state.type.doc.map(v=>{
      return(
        <span style={{margin:'0 0 0 2% '}}>{v}</span>
        )
    })
    let others= this.state.type.other.map(v=>{
      return(
        <span style={{margin:'0 0 0 2% '}}>{v}</span>
        )
    })
    return (
      <div>
        <Row>
        
          <Col span={24}>
            <div style={{margin:'2% 0 0%',}}>
            <Row>
            <Col span ={2} />
              <Col span ={20}><div style={{borderBottom:'1px solid #D8D8D8',}}>
                <Tabs defaultActiveKey="1" >
                  <TabPane tab='作品' key="1"></TabPane>
                  <TabPane tab="众筹" key="2"></TabPane>
                  <TabPane tab="用户" key="3"></TabPane>
                  <TabPane tab="剧组服务" key="4"></TabPane>
                </Tabs>
              </div></Col>
              <Col span ={2} />
          </Row></div>
          </Col>
          
          <Col span={24}>
            <div style={{}}>
            <Row>
            <Col span ={2} />
              <Col span ={6}><div style={{margin:"2% 0",}}>
                <Input  placeholder="Basic usage"  />
              </div></Col>
              <Col span ={16}>
                <Button style={{
                margin:"1% 1%",
                borderRadius:'18px',
                background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                }}>
                  搜索
                </Button>
              </Col>
          </Row></div>
          </Col>
          
          <Col span={2} />
          <Col span={20}>
            <div style={{margin:"1% 0",}}>
              <Row>
                <Col span={4}><div>视频</div></Col>
                <Col span={20}><div style={{color:'#CDCDCD'}}>全部 {videos}{videos}{videos}{videos}</div></Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />
          
          <Col span={2} />
          <Col offset={2} span={20}>
            <div style={{margin:"1% 0",}}>
              <Row>
                <Col  span={4}><div>音乐</div></Col>
                <Col span={20}><div style={{color:'#CDCDCD'}}>全部 {musics}</div></Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />
          
          <Col span={2} />
          <Col offset={2} span={20}>
            <div style={{margin:"1% 0",}}>
              <Row>
                <Col span={4}><div>文学</div></Col>
                <Col span={20}><div style={{color:'#CDCDCD'}}>全部 {docs}</div></Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />
          
          
          <Col span={2} />
          <Col offset={2} span={20}>
            <div style={{margin:"1% 0",}}>
              <Row>
                <Col span={4}><div>其他</div></Col>
                <Col span={20}><div style={{color:'#CDCDCD'}}>全部 {others}</div></Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />
          
          <Col span={2} />
          <Col offset={2} span={2} >
            <div style={{margin:'20px 0 0'}}>
              <DropdownHot />
            </div>
          </Col>
          <Col span={2} >
            <div style={{margin:'20px 0 0'}}>
              <Dropdowning />
            </div>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    )
  }
}

export default Search
