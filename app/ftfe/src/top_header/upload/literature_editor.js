import React, { Component } from 'react'
import { Row, Col, Input, Select, Tag, InputNumber, Button } from 'antd'
import MyIcon from '../../my_icon'
import './my_style.css'

const TextArea = Input.TextArea
const Option = Select.Option
const CheckableTag = Tag.CheckableTag

export default class LiteratureEditor extends Component {
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
                  fontSize: '61px',
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
              <Title must={false} text="作品简介 (300字内)" marginTop="20px" />
              <CountableTextArea placeholder="请输入作品简介" maxLen={300} style={{
                width: '366px',
                marginTop: '10px',
              }} />
            </Col>
            <Col span={12}>
              <Title must={true} text="分类（至少一个）" />
              <Classification />
              <Title must={false} text="列表归属" marginTop="20px" />
              <CollectionSelecter />
              <Title must={true} text="定价￥" marginTop="20px" />
              <Pricing />
              <Title must={false} text="添加自定义标签（最多5个）" marginTop="20px" />
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

class Title extends Component {
  render () {
    let must = null
    if (this.props.must) {
      must = (
        <span style={{
          color: '#FF1367',
        }}>
          { '* ' }
        </span>
      )
    }
    return (
      <div style={{
        marginTop: this.props.marginTop,
        lineHeight: '22px',
        fontSize: '16px',
        fontWeight: 400,
        color: '#4A4A4A',
      }}>
        { must }
        <span>
          { this.props.text }
        </span>
      </div>
    )
  }
}

class CountableInput extends Component {
  state = {
    content: '',
    maxLen: this.props.maxLen,
  }

  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable input must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.state.maxLen) return
    let newState = {
      content: e.target.value,
    }
    this.setState((state) => {return newState})
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    return (
      <div style={ selfStyle }>
        <Input
          placeholder={this.props.placeholder}
          value={ this.state.content }
          onChange={ this.handleChange.bind(this) }
        />
        <span style={{
          position: 'absolute',
          top: '5px',
          right: '10px',
        }}>
          { this.state.content.length }/{ this.state.maxLen }
        </span>
      </div>
    )
  }
}

class CountableTextArea extends Component {
  state = {
    content: '',
    maxLen: this.props.maxLen,
  }

  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable text area must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.state.maxLen) return
    let newState = {
      content: e.target.value,
    }
    this.setState((state) => {return newState})
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    const rows = this.props.rows || 6
    return (
      <div style={ selfStyle }>
        <TextArea
          placeholder={this.props.placeholder}
          value={ this.state.content }
          rows={rows}
          onChange={ this.handleChange.bind(this) }
          style={{ backgroundColor: this.props.bgColor }}
        />
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        }}>
          { this.state.content.length }/{ this.state.maxLen }
        </span>
      </div>
    )
  }
}

class Classification extends Component {
  state = {
    chosen: {},
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (i) {
    console.log(i)
    this.setState((state) => {
      let c = Object.assign({}, this.state.chosen)
      if (c[i]) {
        c[i] = false
      } else {
        c[i] = true
      }
      return { chosen: c }
    })
  }

  render () {
    const classes = ['新闻', '动画', '综艺', '脱口秀', '评论', '电影', '纪录片', '美食', '旅行', '自然', '音乐']
    let tags = classes.map((v, i) => {
      return (
        <CheckableTag
          key={ v }
          checked={ this.state.chosen[i] }
          onChange={ () => this.handleChange(i) }
          style={this.state.chosen[i] ? {} : { background: '#EEEEEE', color: '#9B9B9B' }}
        >
          { v }
        </CheckableTag>
      )
    })
    let options = classes.map((v, i) => {
      return (
        <Option key={ v } value={i}>
          { v }
        </Option>
      )
    })
    return (
      <div>
        <Select
          showSearch
          placeholder="搜索分类"
          optionFilterProp="children"
          onChange={ this.handleChange }
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          style={{
            width: '280px',
            marginTop: '10px',
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          dropdownStyle={{
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          suffixIcon={ <MyIcon type="icon-spread" /> }
        >
          { options }
        </Select>
        <div style={{ width: '300px', marginTop: '20px', lineHeight: '30px' }}>
          { tags }
        </div>
      </div>
    )
  }
}

class CollectionSelecter extends Component {
  render () {
    const collections = ['新闻360', '人与自然', '科教频道', '财经第一线', '喜洋洋']
    let options = collections.map((v, i) => {
      return (
        <Option key={ v } value={i}>
          { v }
        </Option>
      )
    })
    return (
      <div>
        <Select
          showSearch
          placeholder="请选择视频列表"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          style={{
            width: '280px',
            marginTop: '10px',
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          dropdownStyle={{
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          suffixIcon={ <MyIcon type="icon-spread" /> }
        >
          { options }
        </Select>
      </div>
    )
  }
}

class Pricing extends Component {
  render () {
    return (
      <div>
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
      </div>
    )
  }
}
