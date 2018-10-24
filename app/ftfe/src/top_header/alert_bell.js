import React, { Component } from 'react'
import { Row, Col, Icon, Badge, List } from 'antd'

export default class AlertBell extends Component {
  state ={
    hover: false,
  }

  handleEnter (e) {
    // console.log('enter')
    this.setState((state) => {
      return {
        hover: true,
      }
    })
  }

  handleLeave (e) {
    // console.log('leave')
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    let list = null
    if (this.state.hover) {
      const data = [
        {
          icon: 'heart',
          text: '关注收藏',
          count: 100,
        },
        {
          icon: 'like',
          text: '点 赞',
          count: 6,
        },
        {
          icon: 'message',
          text: '评 论',
        },
        {
          icon: 'pay-circle',
          text: '糖分收益',
        },
      ]
      list = (
        <div style={{
            position: 'absolute',
            top: '60px',
            left: '-90px',
            width: '200px',
            background: '#212221',
            borderRadius: '10px',
        }}>
          <div style={{
            marginTop: '-40px',
            marginLeft: '80px',
            width: 0,
            height: 0,
            borderTop: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderBottom: '20px solid #212221',
            borderLeft: '20px solid transparent',
          }}></div>
          <List
            itemLayout="horizontal"
            dataSource={ data }
            renderItem={item => {
              let badge = null
              if (item.count) {
                badge = (
                  <Col span={4}>
                    <Badge count={item.count} style={{
                      backgroundColor: '#F8E71C',
                      color: 'black',
                    }}></Badge>
                  </Col>
                )
              }
              return (
                <ItemRow
                  item={ item }
                  badge={ badge }
                />
              )
            }}
          />
        </div>
      )
    }
    return (
      <div
        onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }
        style={{ position: 'relative' }}
      >
        <Badge
          status="default"
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#F8E71C',
            color: 'black',
          }}
        >
          <Icon type="bell" theme="outlined" style={{ fontSize: '25px' }} />
        </Badge>
        { list }
      </div>
    )
  }
}

class ItemRow extends Component {
  state ={
    hover: false,
  }

  handleEnter () {
    // console.log('enter')
    this.setState((state) => {
      return {
        hover: true,
      }
    })
  }

  handleLeave () {
    // console.log('leave')
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    const item = this.props.item
    const badge = this.props.badge
    return (
      <List.Item style={{
        border: 0,
        background: this.state.hover ? '#F8E71C' : '',
      }}>
        <Row
          onMouseEnter={ this.handleEnter.bind(this) }
          onMouseLeave={ this.handleLeave.bind(this) }
          style={{
            color: this.state.hover ? 'black' : 'white',
            fontSize: '20px',
            fontWeight: 700,
            width: '100%',
          }}
        >
          <Col span={4} offset={2}>
            <Icon type={ item.icon } theme="outlined"></Icon>
          </Col>
          <Col span={12}>
            { item.text }
          </Col>
          { badge }
        </Row>
      </List.Item>
    )
  }
}
