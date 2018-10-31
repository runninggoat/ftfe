import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import Logo from './logo'
import Category from './category'
import AlertBell from './alert_bell'

export default class TopHeader extends Component {
  state ={
    clientWidth: 1000,
    height: 42,
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
          background: 'transparent',
          zIndex: '99',
        }}
      >
        <Row>
          <Col span={12}>
            <Row type="flex" justify="start">
              <Col span={4}></Col>
              <Col span={4}>
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
                      lineHeight: '22px',
                      marginTop: '10px',
                      fontSize: '16px',
                      color: '#BCBCBC',
                      fontWeight: 400,
                    }}>
                    <span dangerouslySetInnerHTML={{ __html: '众&nbsp&nbsp&nbsp&nbsp&nbsp筹' }}></span>
                  </span>
                </div>
              </Col>
              <Col span={4}>
                <div style={{ height: '60px' }}>
                  <span style={{
                      position: 'absolute',
                      lineHeight: '22px',
                      marginTop: '10px',
                      fontSize: '16px',
                      color: '#BCBCBC',
                      fontWeight: 400,
                    }}>
                    <span dangerouslySetInnerHTML={{ __html: '社&nbsp&nbsp&nbsp&nbsp&nbsp区' }}></span>
                  </span>
                </div>
              </Col>
              <Col span={4}>
                <div style={{ height: '60px' }}>
                  <span style={{
                      position: 'absolute',
                      lineHeight: '22px',
                      marginTop: '10px',
                      fontSize: '16px',
                      color: '#BCBCBC',
                      fontWeight: 400,
                    }}>
                    <span dangerouslySetInnerHTML={{ __html: '剧组服务' }}></span>
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
              <Col
                span={1}
                onClick={ () => this.props.handleOpenUpload() }
                style={{ marginRight: '15px' }}
              >
                <Icon type="upload" theme="outlined" />
              </Col>
              <Col span={1} style={{ marginRight: '15px' }}>
                <a href="/search" style={{ color: 'white' }}>
                  <Icon type="search" theme="outlined" />
                </a>
              </Col>
              <Col span={1} style={{ marginRight: '15px' }}>
                <AlertBell />
              </Col>
              <Col span={1} onClick={ () => this.props.handleOpenLogin() }>
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
