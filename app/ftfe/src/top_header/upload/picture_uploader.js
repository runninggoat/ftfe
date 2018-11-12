import React, { Component } from 'react'
import { Row, Col, Input, Select, Tag, InputNumber, Button } from 'antd'
import MyIcon from '../../my_icon'
import { Title, CountableInput, CountableTextArea, Classification, AlbumSelector } from './common'

export default class PictureUploader extends Component {
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
                { '上传图片' }
              </div>
            </Col>
          </Row>
          <Row type="flex" justify="start" style={{ marginTop: '30px' }}>
            <Col span={12}>
              <Title must={true} text="标题（30字内）" />
              <CountableInput placeholder="请输入作品标题" maxLen={30} style={{
                width: '390px',
                marginTop: '10px',
              }} />
              <div style={{
                position: 'relative',
                marginTop: '27px',
                width: '390px',
                height: '439px',
                padding: '0 80px 0 80px',
                background: 'rgba(248,248,248,1)',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <input
                  type="file"
                  name="pic"
                  accept=".png,.jpg,.jpeg,.gif,.svg"
                  multiple="multiple"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    opacity: 0,
                    filter: 'alpha(opacity=0)',
                    cursor: 'pointer',
                  }}
                />
                <MyIcon className="gradient-icon" type="icon-picture" style={{
                  marginTop: '138px',
                  fontSize: '41px',
                }} />
                <div style={{
                  marginTop: '18px',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  color: '#4A4A4A',
                }}>
                  { '选择图片上传（png/jpeg/jpg）建议尺寸大于 735*420' }
                </div>
              </div>
            </Col>
            <Col span={12}>
              <Title must={false} text="作品简介 (300字内)" />
              <CountableTextArea rows={4} placeholder="请输入作品简介" maxLen={300} style={{
                width: '366px',
                marginTop: '10px',
              }} />
              <Title must={true} text="分类（至少一个）" margin="16px 0 0 0"/>
              <Classification
                selectStyle={{
                  width: '300px',
                  marginTop: '10px',
                  backgroundColor: '#F8F8F8',
                  borderRadius: '4px',
                }}
                radioPartStyle={{
                  width: '400px',
                  margin: '10px 0',
                  lineHeight: '30px',
                }}
              />
              <Title must={false} text="列表归属" margin="20px 0 0 0" />
              <AlbumSelector />
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
          <Row type="flex" justify="end" style={{ marginTop: '5px' }}>
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
