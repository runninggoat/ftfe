import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'

export default class LoginPanel extends Component {
  render () {
    return (
      <div>
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
              <div
                onClick={ () => this.props.onCloseLogin('Close') }
                style={{
                  color: 'white',
                  fontSize: '30px',
                  float: 'right',
                  marginRight: '6px',
                }}
              >
                <Icon type="close" theme="outlined" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
