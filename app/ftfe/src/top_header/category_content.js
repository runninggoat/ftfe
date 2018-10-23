import React, { Component } from 'react'
import { Row, Col } from 'antd'

class Section extends Component {
  render () {
    return (
      <div>
        <h2 style={{ color: 'white' }}>
          { this.props.title }
        </h2>
        <p>
          { this.props.content }
        </p>
      </div>
    )
  }
}

export default class CategoryContent extends Component {
  render () {
    return (
      <Row
        style={{
          height: '100%',
          boxShadow: '0 2px 10px #212221',
        }}
      >
        <Col span={2}></Col>
        <Col span={20}>
          <Row
            type="flex"
            justify="start"
            gutter={68}
            style={{
              height: '100%',
              color: 'white',
              padding: '30px 0',
              fontSize: '16px',
            }}
          >
            <Col span={6}>
              <Section
                title="视频"
                content="全部 | 动画 | MTV | 真人秀 | 直播 | 专访 | 电影 | 电视剧 | 脱口秀 | 鬼畜 | 纪录片 | 游戏 | 其它"
              ></Section>
            </Col>
            <Col span={6}>
              <Section
                title="音乐"
                content="全部 | 流行音乐 | 说唱乐RAP | 乡村音乐 | 摇滚音乐 | 爵士乐 | R&B | 嘻哈HipHop | 古典音乐 | DJ | 翻唱 | 朋克 | 其它"
              ></Section>
            </Col>
            <Col span={6}>
              <Section
                title="文学"
                content="全部 | 音乐剧 | 爱情故事 | 科幻小说 | 非虚构类 | 言情小说 | 电影剧本 | 恐怖小说 | 其它"
              ></Section>
            </Col>
            <Col span={6}>
              <Section
                title="其它"
                content="舞蹈 | 科技 | 摄影 | 教程 | 美食 | 设计 | 创意 | 时尚 | 体育 | 时政"
              ></Section>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
