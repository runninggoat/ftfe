import React, { Component } from 'react'

class Trending extends Component {
  state ={
    hover: false,
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
    let jumbo = null
    if (this.state.hover) {
    // if (true) {
      jumbo = (
        <div
          style={{
            position: 'fixed',
            top: `${this.props.subheight}px`,
            left: 0,
            width: `${this.props.subwidth}px`,
            height: '200px',
            background: 'rgba(37, 38, 37, 1.0)',
          }}
        ></div>
      )
    }
    let fw = 300
    if (this.state.hover) fw = 700
    return (
      <div
        onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }
        style={{ height: '60px' }}
      >
        <span
          style={{
            position: 'absolute',
            lineHeight: '100%',
            marginTop: '17px',
            fontSize: '20px',
            color: 'white',
            fontWeight: fw,
          }}
        >
          热门
        </span>
        { jumbo }
      </div>
    )
  }
}

export default Trending
