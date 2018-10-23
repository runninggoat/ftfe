import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './category_content.css'

export default class CategoryContent extends Component {
  render () {
    return (
      <Row
        type="flex"
        justify="space-around"
        style={{
          color: 'white',
          height: '100%',
          boxShadow: '0 2px 10px #212221',
        }}
      >
        <Col span={4}>
          <div className="category">
            <h2 className="category-title">视频</h2>
            <p>动画 | 音乐视频MV | 直播 | 专访 | 电影 | 电视剧 | 其它</p>
          </div>
        </Col>
        <Col span={4}>
          <div className="category">
            <h3 className="category-title">音乐</h3>
            <p>流行音乐 | 说唱乐RAP | 乡村音乐 | 摇滚音乐 | 爵士乐 | R&B | 嘻哈HipHop | 古典音乐 | DJ | 唱片 | 朋克 | 其它</p>
          </div>
        </Col>
        <Col span={4}>
          <div className="category">
            <h3 className="category-title">小说/脚本</h3>
            <p>音乐剧 | 爱情故事 | 科幻小说 | 非科幻小说 | 言情小说 | 电影剧本 | 其它</p>
          </div>
        </Col>
        <Col span={4}>
          <div className="category">
            <h3 className="category-title">其它</h3>
            <p>舞蹈 | 科技 | 摄影 | 设计 | 创意 | 体育 | 时政</p>
          </div>
        </Col>
      </Row>
    )
  }
}
