import React, { Component } from 'react'
import { Row, Col, Input, Select, Tag, InputNumber, Button } from 'antd'
import MyIcon from '../../my_icon'

const TextArea = Input.TextArea
const Option = Select.Option
const CheckableTag = Tag.CheckableTag

export class Title extends Component {
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
        margin: this.props.margin,
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

export class CountableInput extends Component {
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

export class CountableTextArea extends Component {
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

export class Classification extends Component {
  state = {
    chosen: {},
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (i) {
    // console.log(i)
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
    const classes = ['新闻', '动画', '综艺', '电影', '纪录片', '美食', '旅行', '自然']
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
          style={ this.props.selectStyle }
          dropdownStyle={{
            backgroundColor: '#F8F8F8',
            borderRadius: '4px',
          }}
          suffixIcon={ <MyIcon type="icon-spread" /> }
        >
          { options }
        </Select>
        <div style={ this.props.radioPartStyle }>
          { tags }
        </div>
      </div>
    )
  }
}

export class CollectionSelecter extends Component {
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
