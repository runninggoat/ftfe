import React, { Component } from 'react'
import { Modal, Row, Col, Icon, Input, Button, Checkbox, Steps, Tag, Select, Tabs } from 'antd'
import MyIcon from '../../my_icon'
import LiteratureEditor from './literature_editor'

const Step = Steps.Step
const TextArea = Input.TextArea
const Option = Select.Option
const TabPane = Tabs.TabPane

export default class UploadPanel extends Component {
  state = {
    step: 1,
    uploadType: 'literature',
  }

  forwardStep () {
    this.setState((state) => {
      return { step: state.step + 1 }
    })
  }

  backwardStep () {
    this.setState((state) => {
      return { step: state.step - 1 }
    })
  }

  handleChooseType (t) {
    this.setState((state) => {return { uploadType: t }})
  }

  render () {
    let content = null
    switch (this.state.uploadType) {
      case null:
      case '':
      case 'unknow': {
        content = (
          <Col span={12}>
            <Row>
              <Col span={24}>
                <div style={{
                  width: '100%',
                  fontSize: '20px',
                  color: '#EEEEEE',
                  textAlign: 'center',
                }}>
                  { '选择文件类型' }
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
              <Col span={6} style={{ marginRight: '25px' }}>
                <TypeButton icon="video-camera" text="视频" t="video" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
              <Col span={6}>
                <TypeButton icon="video-camera" text="音频" t="audio" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
              <Col span={6} style={{ marginRight: '25px' }}>
                <TypeButton icon="video-camera" text="文学" t="literature" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
              <Col span={6}>
                <TypeButton icon="video-camera" text="其它(图片)" t="figure" onChooseType={ this.handleChooseType.bind(this) } />
              </Col>
            </Row>
          </Col>
        )
        break
      }
      case 'literature': {
        content = (
          <LiteratureEditor />
        )
      }
      default: break
    }
    return (
      <Modal
        visible={ this.props.display }
        closable={ false }
        keyboard={ false }
        maskClosable={ false }
        footer={ null }
        width="1200px"
        style={{
          padding: 0,
          background: 'transparent',
        }}
        bodyStyle={{
          background: 'transparent',
          padding: 0,
        }}
        maskStyle={{
          background: 'linear-gradient(360deg,rgba(63,0,74,0.75) 0%,rgba(32,32,124,0.85) 100%)',
        }}
      >
        <div
          onClick={ () => this.props.onCloseUpload('Close') }
          style={{
            position: 'fixed',
            top: '31px',
            right: '41px',
            color: '#BCBCBC',
            fontSize: '32px',
          }}
        >
          <MyIcon type="icon-close" />
        </div>
        <Row type="flex" justify="center">
          { content }
        </Row>
      </Modal>
    )
  }
}

class TypeButton extends Component {
  render () {
    console.log(this.props.t)
    return (
      <div
        onClick={ () => this.props.onChooseType(this.props.t) }
        style={{
          background: '#fff',
          height: '142px',
          width: '142px',
          borderRadius: '20px',
        }}
      >
        <div style={{
          width: '100%',
          textAlign: 'center',
        }}>
          {/* <MyIcon className="gradient-icon" type={ this.props.icon } style={{
            marginTop: '40px',
            fontSize: '37px',
          }} /> */}
          <Icon className="gradient-icon" type={ this.props.icon } theme="outlined" style={{
            marginTop: '40px',
            fontSize: '37px',
          }}/>
        </div>
        <div style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 400,
          color: '#FF1367',
          lineHeight: '22px',
          marginTop: '10px',
        }}>
          { this.props.text }
        </div>
      </div>
    )
  }
}
