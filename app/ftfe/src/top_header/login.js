import React, { Component } from 'react'
import { Row, Col, Icon, Input, Button } from 'antd'

export default class LoginPanel extends Component {
  render () {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(45, 46, 45, 0.3)',
      }}>
        <Row
          type="flex"
          justify="center"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            marginTop: '100px',
            width: '100%',
          }}
        >
          <Col span={6}>
            <div style={{
              width: '100%',
              height: '300px',
              background: '#212221',
              borderRadius: '10px',
            }}>
              <Row>
                <Col span={24}>
                  <div
                    onClick={ () => this.props.onCloseLogin('Close') }
                    style={{
                      color: 'white',
                      fontSize: '30px',
                      float: 'right',
                      marginRight: '6px',
                      textAlign: 'center',
                    }}
                  >
                    <Icon type="close" theme="outlined" />
                  </div>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col span={8}>
                  <div style={{
                    color: 'white',
                    fontSize: '30px',
                    fontWeight: 700,
                  }}>LOGIN</div>
                </Col>
              </Row>
              <LoginForm />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

class LoginForm extends Component {
  render () {
    return (
      <Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={16} offset={4}>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
              placeholder="User Name"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={16} offset={4}>
            <Input
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
              placeholder="Password"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={16} offset={4}>
            <Button type="primary" style={{
              color: 'black',
              width: '100%',
            }}>LOGIN</Button>
          </Col>
        </Row>
      </Row>
    )
  }
}
