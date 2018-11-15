import React, { Component } from 'react'
import { Row, Col} from 'antd'
import Card from './search_card'

export default class Search extends Component {
    render(){
        return(
            <div style={{background:'#FEFEFE'}}>
                <Row>
                    <Col span={2} />
                    <Col span={4} >
                        <Card />
                    </Col>
                    <Col span={4} >
                        <Card />
                    </Col>
                    <Col span={4} >
                        <Card />
                    </Col>
                    <Col span={4} >
                        <Card />
                    </Col>
                    <Col span={4} >
                        <Card />
                    </Col>
                    <Col span={2} />
                </Row>
            
            </div>
        )
    }
}