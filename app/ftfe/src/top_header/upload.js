import React, { Component } from 'react'
import { Row, Col, Icon, Input, Button, Tabs } from 'antd'

const TabPane = Tabs.TabPane

export default class UploadPanel extends Component {
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
          <Col span={15}>
            <div style={{
              height: '800px',
              width: '100%',
              background: '#212221',
              borderRadius: '10px',
            }}>
              <Row>
                <Col span={24}>
                  <div
                    onClick={ () => this.props.onCloseUpload('Close') }
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
                <Col span={24}>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
