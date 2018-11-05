import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'

export default class LiteratureEditor extends Component {
  render () {
    return (
      <Col span={24}>
        <div style={{
          width: '1090px',
          paddingTop: '30px',
          paddingBottom: '45px',
          paddingLeft: '56px',
          background: '#fff',
          borderRadius: '15px',
          boxShadow: '0px 2px 15px 0px rgba(0,0,0,0.05)',
        }}>
          <Row type="flex" justify="start">
            <Col span={24}>
              <div style={{
                lineHeight: '24px',
                fontSize: '24px',
                fontWeight: 400,
                color: 'rgba(74,74,74,1)',
              }}>
                { '编辑文章' }
              </div>
            </Col>
          </Row>
          <Row type="flex" justify="start">
            <Col span={24}>
              <div style={{
                lineHeight: '22px',
                fontSize: '16px',
                fontWeight: 400,
                color: '#4A4A4A',
              }}>
                <span style={{
                  color: '#FF1367',
                }}>
                  { '* ' }
                </span>
                <span>
                  { '标题（30字内）' }
                </span>
              </div>
              <Input placeholder="请输入作品标题" />
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}
