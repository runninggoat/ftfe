import React, { Component } from 'react'
import { Row, Col, Icon, Badge } from 'antd'
import Logo from './logo'
import Category from './category'

class TopHeader extends Component {
  state ={
    clientWidth: 1000,
    height: 60,
  }

  componentDidMount () {
    this.setState((state) => {
      return {
        clientWidth: this.refs.topheader.clientWidth,
      }
    })
  }

  handleHover (e) {
    this.setState((state) => {
      return {
        clientWidth: this.refs.topheader.clientWidth,
      }
    })
  }

  render () {
    return (
      <div
        ref="topheader"
        style={{
          position: 'fixed',
          width: '100%',
          height: `${this.state.height}px`,
          border: 0,
          // background: 'linear-gradient(rgba(45, 46, 45, 0.8), rgba(45, 46, 45, 0.01))',
          background: 'rgba(45, 46, 45, 0.7)',
          zIndex: '999',
        }}
      >
        <Row>
          <Col span={12}>
            <Row type="flex" justify="start">
              <Col span={4}></Col>
              <Col span={5}>
                <Logo></Logo>
              </Col>
              <Col span={4}>
                <Category
                  subheight={ this.state.height }
                  subwidth={ this.state.clientWidth }
                  handleHover={ this.handleHover.bind(this) }
                ></Category>
              </Col>
              <Col span={4}>
                <div style={{ height: '60px' }}>
                  <span style={{
                      position: 'absolute',
                      lineHeight: '100%',
                      marginTop: '17px',
                      fontSize: '20px',
                      color: 'white',
                      fontWeight: 300,
                    }}>
                    众筹
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="end" style={{
              color: 'white',
              fontSize: '25px',
              marginTop: '10px',
            }}>
              <Col span={1} style={{ marginRight: '15px' }}>
                <a href="/search" style={{ color: 'white' }}>
                  <Icon type="search" theme="outlined" />
                </a>
              </Col>
              <Col span={1} style={{ marginRight: '15px' }}>
                <Badge count={5} style={{ backgroundColor: '#F8E71C', color: 'black' }}>
                  <Icon type="bell" theme="outlined" style={{ fontSize: '25px' }} />
                </Badge>
              </Col>
              <Col span={1}>
                <Icon type="user" theme="outlined" />
              </Col>
              <Col span={3}></Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TopHeader
