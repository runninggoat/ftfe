import React, { Component } from 'react'

class Category extends Component {
  state ={
    hover: false,
  }

  constructor (props) {
    super(props)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleEnter () {
    this.setState((state) => {
      return {
        hover: true,
      }
    })
  }

  handleLeave () {
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    let fw = 300
    if (this.state.hover) fw = 700
    return (
      <span
        onMouseEnter={ this.handleEnter }
        onMouseLeave={ this.handleLeave }
        style={{
          position: 'absolute',
          lineHeight: '100%',
          marginTop: '17px',
          fontSize: '20px',
          color: 'white',
          fontWeight: fw,
        }}
      >
        分类
      </span>
    )
  }
}

export default Category
