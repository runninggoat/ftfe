import React, { Component } from 'react'
import { Modal, Row, Col, Icon, Input, Button, Tabs } from 'antd'

const TabPane = Tabs.TabPane

export default class LoginPanel extends Component {

  handleLogin () {
    this.props.onCloseLogin('Login')
  }

  handleSignup () {
    this.props.onCloseLogin('Signup')
  }

  render () {
    return (
      <Modal
        visible={ this.props.display }
        closable={ false }
        keyboard={ false }
        maskClosable={ false }
        footer={ null }
        width="350px"
        bodyStyle={{
          width: '100%',
          background: '#212221',
          padding: 0,
        }}
      >
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
          <Col span={12}>
            <div style={{
              marginTop: '-20px',
              color: 'white',
              fontSize: '30px',
              fontWeight: 700,
              textAlign: 'center',
            }}>FT 链</div>
          </Col>
        </Row>
        <LoginForm
          onLogin={ this.handleLogin.bind(this) }
          onSignup={ this.handleSignup.bind(this) }
        />
        <div style={{ clear: 'both' }}></div>
      </Modal>
    )
  }
}

class TabTitle extends Component {
  render () {
    return (
      <div style={{
        color: this.props.active ? '' : 'white',
      }}>
        { this.props.text }
      </div>
    )
  }
}

class LoginForm extends Component {
  state = {
    activeKey: 1,
    visual: false,
  }

  handleChange (k) {
    this.setState((state) => {
      return { activeKey: parseInt(k) }
    })
  }

  toggleVisual () {
    this.setState((state) => {
      return { visual: !state.visual }
    })
  }

  render () {
    return (
      <Row type="flex" justify="center">
        <Col span={18}>
          <Tabs
            onChange={ this.handleChange.bind(this) }
            defaultActiveKey="1"
            size="large"
            tabBarStyle={{ border: 0, textAlign:'center' }}
          >
            <TabPane tab={ <TabTitle text="登录" active={ this.state.activeKey === 1 } /> } key="1">
              <Row type="flex" justify="center" style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="邮箱/手机号码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Input
                    type={ this.state.visual ? 'text' : 'password' }
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    suffix={<Icon type="eye" style={{ color: 'rgba(0,0,0,.35)' }} onClick={() => this.toggleVisual()} />}
                    placeholder="密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Button
                    onClick={ () => this.props.onLogin() }
                    type="primary"
                    style={{
                      color: 'black',
                      width: '100%',
                    }}
                  >登录</Button>
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Col span={24}>
                  <p style={{
                    color: 'white',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    fontSize: '16px',
                  }}>忘记密码？</p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab={ <TabTitle text="注册" active={ this.state.activeKey === 2 } /> } key="2">
              <Row type="flex" justify="center" style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="邮箱/手机号码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Input
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="设置密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Input
                    type="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                    placeholder="重复确认密码"
                  />
                </Col>
              </Row>
              <Row type="flex" justify="center" style={{ marginTop: '20px', marginBottom: '40px' }}>
                <Col span={24}>
                  <Button
                    onClick={ () => this.props.onSignup() }
                    type="primary"
                    style={{
                      color: 'black',
                      width: '100%',
                    }}
                  >注册</Button>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    )
  }
}
