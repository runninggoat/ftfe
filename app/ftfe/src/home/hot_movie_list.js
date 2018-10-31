import React from 'react'
import MovieCard from './hot_movie_cards'

import { Row, Col } from 'antd';
  
  
  
export default () => (
    
   
        <div>
            <Row gutter={4}>
                
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                            <Col span={11}>
                                <div style={{marginBot:'2%'}}>
                                    <span
                                        style={{padding:'1%',marginRight:'2%',background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,77,79,1) 100%)'}}
                                    />
                                    <span style={{fontSize:'150%',color:'#222222',marginRight:'2%'}}>
                                        热门佳作
                                    </span>
                                    <span style={{fontSize:'150%',color:'#BCBCBC',marginRight:'2%'}}>
                                        POPULAR
                                    </span>
                                    <span style={{fontSize:'100%',color:'#BCBCBC',marginRight:'2%'}}>
                                        查看更多 》
                                    </span>
                                </div>
                            </Col>
                    <Col span={12} />
                    </Row>
                </Col>
                
                
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={6} ><MovieCard /></Col>
                        <Col span={5} ><MovieCard /></Col>
                        <Col span={5} ><MovieCard /></Col>
                        <Col span={6} ><MovieCard /></Col>
                        <Col span={1} />
                    </Row>
                </Col>
                
                
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={5} ><MovieCard /></Col>
                        <Col span={6} ><MovieCard /></Col>
                        <Col span={6} ><MovieCard /></Col>
                        <Col span={5} ><MovieCard /></Col>
                        <Col span={1} />
                    </Row>
                </Col>
                
                
                
                
              
            </Row>
        
        </div>
 )