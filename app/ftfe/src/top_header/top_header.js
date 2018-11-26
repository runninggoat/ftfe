import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'
import Logo from './logo'
import Category from './category'
import AlertBell from './alert_bell'
import MyIcon from '../my_icon'

export default class TopHeader extends Component {
  state ={
    scrollOut: false,
    scrollThreshold: 600,
    clientWidth: 1000,
    height: 42,
    alwaysShowBG: false,
    activeTab: 1,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.setState((state) => {
      return {
        clientWidth: this.refs.topheader.clientWidth,
      }
    })
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentDidUpdate () {
    if (document.URL.endsWith('search') && !this.state.alwaysShowBG) {
      this.setState({ alwaysShowBG: true })
    }
    if (!document.URL.endsWith('search') && this.state.alwaysShowBG) {
      this.setState({ alwaysShowBG: false })
    }
    if (document.URL.endsWith('search') && this.state.activeTab !== 0) {
      this.setState({ activeTab: 0 })
    } else if (document.URL.endsWith('/') && this.state.activeTab !== 1) {
      this.setState({ activeTab: 1 })
    } else if (document.URL.endsWith('funding') && this.state.activeTab !== 2) {
      this.setState({ activeTab: 2 })
    }
  }

  handleScroll (e) {
    // console.log(document.documentElement.scrollTop)
    if (!this.state.scrollOut && document.documentElement.scrollTop > this.state.scrollThreshold) {
      this.setState(() => {return { scrollOut: true }})
    } else if (this.state.scrollOut && document.documentElement.scrollTop < this.state.scrollThreshold) {
      this.setState(() => {return { scrollOut: false }})
    }
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
          position: this.state.scrollOut ? 'fixed' : 'absolute',
          width: '100%',
          height: `${this.state.height}px`,
          border: 0,
          // background: 'linear-gradient(rgba(45, 46, 45, 0.8), rgba(45, 46, 45, 0.01))',
          background: (this.state.scrollOut || this.state.alwaysShowBG) ? 'linear-gradient(135deg,rgba(48,35,174,1) 0%,rgba(200,109,215,1) 100%)' : 'transparent',
          zIndex: '99',
          transition: 'all 0.3s',
        }}
      >
        <Row type="flex" justify="start">
          <Col span={12}>
            <Row type="flex" justify="start">
              <Col span={4}></Col>
              <Col span={4}>
                <Logo></Logo>
              </Col>
              <Col span={4}>
                <Category
                  active={ this.state.activeTab === 1 }
                  subheight={ this.state.height }
                  subwidth={ this.state.clientWidth }
                  handleHover={ this.handleHover.bind(this) }
                ></Category>
              </Col>
              <Col span={4}>
                <a href="#/funding">
                  <div style={{ height: '60px' }}>
                    <span style={{
                        position: 'absolute',
                        lineHeight: '22px',
                        marginTop: '10px',
                        fontSize: '16px',
                        color: this.state.activeTab === 2 ? '#fff' : '#BCBCBC',
                        fontWeight: 400,
                      }}>
                      <span dangerouslySetInnerHTML={{ __html: '众&nbsp&nbsp&nbsp&nbsp&nbsp筹' }}></span>
                    </span>
                  </div>
                </a>
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
            </Row>
          </Col>
          <Col span={12}>
            <Row type="flex" justify="end" style={{
              color: 'white',
              fontSize: '22px',
              marginTop: '4px',
            }}>
              <Col
                span={1}
                onClick={ () => this.props.handleOpenUpload() }
                style={{ marginRight: '15px' }}
              >
                <Icon type="upload" theme="outlined" />
              </Col>
              <Col span={1} style={{ marginRight: '15px' }}>
                <a href="#/search" style={{ color: 'white' }}>
                  <MyIcon type="icon-search" />
                </a>
              </Col>
              <Col span={1} style={{ marginRight: '15px' }}>
                <AlertBell />
              </Col>
              <Col span={1} onClick={ () => this.props.handleOpenLogin() }>
                <MyIcon type="icon-people" />
              </Col>
              <Col span={3}></Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
