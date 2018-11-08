import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input, Select, Tag, InputNumber, Button } from 'antd'
import MyIcon from '../../my_icon'
import { Title, CountableInput, CountableTextArea, Classification, CollectionSelecter } from './common'
import './my_style.css'

const Option = Select.Option
const CheckableTag = Tag.CheckableTag
const md5 = require('js-md5')

class LiteratureEditor_ extends Component {
  constructor (props) {
    super(props)

    // Init upload ID for literature information
    let parts = []
    parts[0] = this.props.literatureInfo.uploadType
    parts[1] = (new Date()).getTime() + ''
    parts[2] = Math.floor(Math.random() * 1e5)
    this.props.set('uploadId', md5(parts.join('-')))
  }

  render () {
    return (
      <Col span={24} style={{
        width: '1090px',
      }}>
        <div style={{
          paddingTop: '30px',
          paddingBottom: '45px',
          paddingLeft: '56px',
          paddingRight: '56px',
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
          <Row type="flex" justify="start" style={{ marginTop: '25px' }}>
            <Col span={24}>
              <Title must={true} text="标题（30字内）" />
              <CountableInput placeholder="请输入作品标题" maxLen={30} style={{
                width: '560px',
                marginTop: '10px',
              }} />
            </Col>
          </Row>
          <Row type="flex" justify="start" style={{ marginTop: '20px' }}>
            <Col span={12}>
              <Title must={true} text="封面" />
              <div style={{
                marginTop: '13px',
                width: '367px',
                padding: '57px 60px 51px 60px',
                background: 'rgba(248,248,248,1)',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <MyIcon type="icon-picture" style={{
                  fontSize: '41px',
                  color: 'rgba(188,188,188,1)',
                }} />
                <div style={{
                  marginTop: '18px',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  color: 'rgba(188,188,188,1)',
                }}>
                  { '选择图片上传（png/jpeg/jpg）建议尺寸大于 735*420' }
                </div>
              </div>
              <Title must={false} text="作品简介 (300字内)" margin="20px 0 0 0" />
              <CountableTextArea placeholder="请输入作品简介" maxLen={300} style={{
                width: '366px',
                marginTop: '10px',
              }} />
            </Col>
            <Col span={12}>
              <Title must={true} text="分类（至少一个）" />
              <Classification
                selectStyle={{
                  width: '300px',
                  marginTop: '10px',
                  backgroundColor: '#F8F8F8',
                  borderRadius: '4px',
                }}
                radioPartStyle={{
                  width: '300px',
                  margin: '10px 0',
                  lineHeight: '30px',
                }}
              />
              <Title must={false} text="列表归属" margin="20px 0 0 0" />
              <CollectionSelecter />
              <Title must={true} text="定价￥" margin="20px 0 0 0" />
              <InputNumber
                min={0}
                max={Infinity}
                step={1}
                precision={2}
                placeholder="输入金额"
                style={{
                  width: '280px',
                  marginTop: '10px',
                  backgroundColor: '#F8F8F8',
                  borderRadius: '4px',
                  border: 0,
                }}
              />
              <Title must={false} text="添加自定义标签（最多5个）" margin="20px 0 0 0" />
              <Input placeholder="例：#搞笑；#原创" style={{ marginTop: '10px', width: '348px' }} />
            </Col>
          </Row>
          <Row type="flex" justify="start" style={{ marginTop: '20px' }}>
            <Col span={24}>
              <Title must={false} text="正文内容 (20,000字内)" />
              <div style={{
                width: '100%',
                marginTop: '10px',
                padding: '13px',
                backgroundColor: '#F8F8F8',
              }}>
                <MyIcon type="icon-Smile" style={{ fontSize: '24px', color: '#4A4A4A' }} />
                <MyIcon type="icon-at" style={{ fontSize: '24px', color: '#4A4A4A', marginLeft: '20px' }} />
                <MyIcon type="icon-picture" style={{ fontSize: '24px', color: '#4A4A4A', marginLeft: '20px' }} />
              </div>
              <CountableTextArea maxLen={20000} rows={20} placeholder="请输入正文内容" bgColor="#fff" style={{ width: '100%' }} />
            </Col>
          </Row>
          <Row type="flex" justify="end" style={{ marginTop: '35px' }}>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button
                type="primary"
                onClick={ () => this.props.handleGoBack() }
                style={{
                  color: '#FF1367',
                  width: '140px',
                  height: '40px',
                  marginRight: '30px',
                  border: '1px solid #FF1367',
                  borderRadius: '20px',
                  background: '#fff',
                  fontSize: '16px',
                  fontWeight: '400',
                }}
              >
                <div>{ '上一步' }</div>
              </Button>
              <Button
                type="primary"
                style={{
                  color: '#FF1367',
                  width: '140px',
                  height: '40px',
                  marginRight: '30px',
                  border: '1px solid #FF1367',
                  borderRadius: '20px',
                  background: '#fff',
                  fontSize: '16px',
                  fontWeight: '400',
                }}
              >
                <div>{ '保存草稿' }</div>
              </Button>
              <Button
                type="primary"
                style={{
                  color: '#fff',
                  width: '140px',
                  height: '40px',
                  border: 0,
                  borderRadius: '20px',
                  background: 'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                  boxShadow: '0px 5px 10px 0px rgba(255,79,81,0.66)',
                  fontSize: '16px',
                  fontWeight: '400',
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: '提&nbsp&nbsp&nbsp交' }}></div>
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    literatureInfo: state.uploadInfo.literatureInfo,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    set: (key, value) => {
      dispatch({
        type: 'SET',
        key: key,
        value: value,
      })
    },
  }
}

const LiteratureEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiteratureEditor_)

export default LiteratureEditor
