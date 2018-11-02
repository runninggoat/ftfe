import React from 'react'
import MovieCard from './new_upload_cards'

import { Row, Col,Icon,Divider } from 'antd';

import img1 from'../image/006.jpg'
  
  
  
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
                                        最新上传
                                    </span>
                                    <span style={{fontSize:'150%',color:'#BCBCBC',marginRight:'2%'}}>
                                        LASTEST
                                    </span>
                                    <span style={{fontSize:'100%',color:'#BCBCBC',marginRight:'2%'}}>
                                        查看更多 》
                                    </span>
                                </div>
                            </Col>
                    <Col span={7} />
                        
                    <Col span={4}>
                        <span>
                            视频
                            <Divider type="vertical" />
                            <a href="#">文学</a>
                            <Divider type="vertical" />
                            <a href="#">音乐</a>
                            <Divider type="vertical" />
                            <a href="#">其他</a>
                        </span>
                        
                    </Col>
                    <Col span={1} />
                    </Row>
                </Col>
                
                
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={22} >
                            <Row>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                            </Row>
                        </Col>
                        <Col span={1} />
                    </Row>
                </Col>
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={22} >
                            <Row>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                            </Row>
                        </Col>
                        <Col span={1} />
                    </Row>
                </Col>
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={22} >
                            <Row>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                                <Col span={6}><MovieCard /></Col>
                            </Row>
                        </Col>
                        <Col span={1} />
                    </Row>
                </Col>
              
            </Row>
        
        </div>
 )