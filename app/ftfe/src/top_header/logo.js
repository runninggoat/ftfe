import React, { Component } from 'react'

class Logo extends Component {
  render () {
    return (
        <a href="/" style={{ color: 'white' }}>
        <span style={{
          position: 'absolute',
          lineHeight: '100%',
          marginTop: '13px',
          fontSize: '30px',
          fontWeight: '500',
        }}>
          FT 链
        </span>
      </a>
    )
  }
}

export default Logo
