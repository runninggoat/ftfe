import React, { Component } from 'react'
import { Row, Col} from 'antd'
import SearchTop from './search_top'
import SearchList from './search_list'
import SmallSearch from './small_search'


export default class Search extends Component {
  state={
    scrollOut: false,
    scrollThreshold: 600,
    
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll (e) {
    //console.log(document.documentElement.scrollTop)
    if (!this.state.scrollOut && document.documentElement.scrollTop > this.state.scrollThreshold) {
      this.setState(() => {return { scrollOut: true }})
    } else if (this.state.scrollOut && document.documentElement.scrollTop < this.state.scrollThreshold) {
      this.setState(() => {return { scrollOut: false }})
    }
  }
  
  render () {
    return (
      <div style={{background:'#FFFFFF',}}>
        <Row>
          <Col span={24}>
            <SearchTop />
          </Col>
          {this.state.scrollOut?<Col span={24}>
            <div style={{
            position:'fixed', 
            top:'42px',
            width:'100%', height: 60,
            zIndex: 99,
            boxShadow:'0px 2px 31px 0px rgba(205,205,205,0.27)}',
            background:'#FFFFFF',
            }}>
              <SmallSearch />
            </div>
          </Col>:''}
          <Col span={24}>
            <SearchList />
          </Col>
        </Row>
      </div>
    )
  }
}
