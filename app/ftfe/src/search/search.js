import React, { Component } from 'react'
import { Row, Col} from 'antd'
import SearchTop from './search_top'
import SearchList from './search_list'
import SmallSearch from './small_search'


export default class Search extends Component {
  
  
  render () {
    return (
      <div style={{background:'#FEFEFE',}}>
        <Row>
          <Col span={24}>
            <SearchTop />
          </Col>
          <Col span={24}>
            <div style={{
            position:'fixed', 
            top:'42px',
            width:'100%', height: 60,
            zIndex: 99,
            boxShadow:'0px 2px 31px 0px rgba(205,205,205,0.27)}',
            background:'#F8F8F8',
            }}>
              <SmallSearch />
            </div>
          </Col>
          <Col span={24}>
            <SearchList />
          </Col>
        </Row>
      </div>
    )
  }
}
