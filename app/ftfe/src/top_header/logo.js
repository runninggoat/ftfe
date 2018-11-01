import React, { Component } from 'react'

class Logo extends Component {
  render () {
    return (
      <a href="/" style={{ color: '#fff' }}>
        <span style={{
          position: 'absolute',
          lineHeight: '36px',
          marginTop: '4px',
          fontSize: '25px',
          fontWeight: '500',
        }}>
          FT 链
        </span>
      </a>
    )
  }
}

export default Logo
