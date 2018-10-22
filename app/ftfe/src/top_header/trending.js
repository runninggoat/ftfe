import React, { Component } from 'react'

class Trending extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <span style={{
        position: 'absolute',
        lineHeight: '100%',
        marginTop: '17px',
        fontSize: '20px',
        fontWeight: '300',
      }}>
        热门
      </span>
    )
  }
}

export default Trending
