import React, { Component } from 'react'
import { Row, Col} from 'antd'
import SearchTop from './search_top'
import SearchList from './search_list';



class Search extends Component {
  
  
  render () {
    return (
      <div style={{background:'#FEFEFE',}}>
        <Row>
          <Col span={24}>
            <SearchTop />
          </Col>
          <Col span={24}>
            <SearchList />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Search
