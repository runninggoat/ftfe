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
  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable input must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.props.maxLen) return
    this.props.handleChange(e.target.value)
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    return (
      <div style={ selfStyle }>
        <Input
          placeholder={this.props.placeholder}
          value={ (this.props.value || '') }
          disabled={ this.props.disabled || false }
          onChange={ this.handleChange.bind(this) }
        />
        <span style={{
          position: 'absolute',
          height: '100%',
          right: '10px',
        }}>
          { (this.props.value || '').length + '/' + this.props.maxLen }
        </span>
      </div>
    )
  }
}

export class CountableTextArea extends Component {
  constructor (props) {
    super(props)
    if (!this.props.maxLen) throw new Error('Countable text area must define max length.')
  }

  handleChange (e) {
    // console.log(e.target.value)
    if (e.target.value.length > this.props.maxLen) return
    this.props.handleChange(e.target.value)
  }

  render () {
    let selfStyle = Object.assign({}, this.props.style)
    selfStyle.position = 'relative'
    const rows = this.props.rows || 6
    return (
      <div style={ selfStyle }>
        <TextArea
          placeholder={this.props.placeholder}
          value={ this.props.value }
          rows={rows}
          disabled={ this.props.disabled || false }
          onChange={ this.handleChange.bind(this) }
          style={{ backgroundColor: this.props.bgColor }}
        />
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        }}>
          { this.props.value.length }/{ this.props.maxLen }
        </span>
      </div>
    )
  }
}

export class Classification extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (i) {
    let c = Object.assign({}, (this.props.value || {}))
    c[i] = !c[i]
    this.props.handleChange(c)
  }

  render () {
    const classes = this.props.classes
    let tags = classes.map((v, i) => {
      return (
        <CheckableTag
          key={ v }
          checked={ (this.props.value || {})[i] }
          onChange={ () => this.handleChange(i) }
          style={(this.props.value || {})[i] ? {} : { background: '#EEEEEE', color: '#9B9B9B' }}
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
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: (this.props.disabled || false) ? '' : 'none',
        }}></div>
        <Select
          showSearch
          placeholder="搜索分类"
          optionFilterProp="children"
          disabled={ this.props.disabled || false }
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

export class AlbumSelector extends Component {
  render () {
    const albums = this.props.albums
    let options = albums.map((v, i) => {
      return (
        <Option key={ v } value={v}>
          { v }
        </Option>
      )
    })
    let select = (
      <Select
        showSearch
        placeholder="请选择归属列表"
        optionFilterProp="children"
        disabled={ this.props.disabled }
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        onChange={ (v) => this.props.handleChange(v) }
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
    )
    if (this.props.value) {
      select = (
        <Select
          showSearch
          placeholder="请选择归属列表"
          optionFilterProp="children"
          disabled={ this.props.disabled }
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          value={ this.props.value }
          onChange={ (v) => this.props.handleChange(v) }
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
      )
    }
    return (
      <div>
        { select }
      </div>
    )
  }
}
