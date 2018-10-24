import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class BottomFooter extends Component {
  render () {
    return (
      <div style={{
        width: '100%',
        background: '#212221',
      }}>
        <Row justify="start">
          <Col offset={2} span={18}>
            <Row type="flex" justify="space-around">
              <Col span={3}>
                <div style={{
                  color: 'white',
                  fontSize: '40px',
                  padding: '30px 0',
                }}>FT 链</div>
              </Col>
              <Col span={3}>
                <Section
                  title="关于本站"
                  subtitles={[
                    '团队介绍',
                    '帮助',
                    '联系我们',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="加入我们"
                  subtitles={[
                    '企业文化',
                    '招聘信息',
                    '联系邮箱',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="商业合作"
                  subtitles={[
                    '业务范围',
                    '过往项目',
                    '合作洽谈',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="社区服务"
                  subtitles={[
                    '内容申诉',
                    '上传规则',
                    '客服',
                  ]}
                />
              </Col>
              <Col span={3}>
                <Section
                  title="手机APP"
                  subtitles={[
                    '安卓下载',
                    'IOS下载',
                    '关注公众号',
                  ]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={24}>
            <div style={{
              marginTop: '20px',
              marginBottom: '20px',
              color: '#BBBCBB',
              textAlign: 'center',
            }}>
              &copy; 2018 UnityLabs &reg; All rights reserved.
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

class Section extends Component {
  render () {
    const subtitles = this.props.subtitles.map((item, idx) => {
      return (
        <div>
          { item }
        </div>
      )
    })
    return (
      <div style={{
        color: '#BBBCBB',
        marginBottom: '20px',
      }}>
        <div style={{
          marginTop: '20px',
          fontSize: '20px',
        }}>
          { this.props.title }
        </div>
        { subtitles }
      </div>
    )
  }
}
