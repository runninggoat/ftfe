import React, { Component } from 'react'
import Ad from './ad_title'
import HotMovieList from './hot_movie_list'
import { Row, Col,Button,Icon } from 'antd'
import WatchList from './watch_list'
import NewUpload from './new_upload'
import PlayModal from '../modal/play_modal'

class Home extends Component {
  render () {
    return (
      <div
        style={{
          backgroundColor:'grey'
        }}
      >
      <Row gutter={12}>
        <Row>
          <Ad />
        </Row>
        <Row>
          <HotMovieList />
          <PlayModal />
        </Row>
        <Row>
          <WatchList />
        </Row>
        <Row>
          <NewUpload />
        </Row>
        <Row>
          <Col span={8}  />
          <Col span={8} ><Button ghost size={'large'} style={{margin:'0 10%',width:'80%'}}> <Icon type="redo" theme="outlined" />加载更多</Button></Col>
          <Col span={8}  />
        </Row>
      </Row>
      </div>
    )
  }
}

export default Home
