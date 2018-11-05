import React from 'react'
import MovieCard from './movie_cards'

import { Row, Col,Icon,Divider } from 'antd';

import img1 from'../image/006.jpg'
  
  
  
export default () => (
    
   
        <div style={{}}>
            <Row gutter={4}>
                
                <Col span={24} ><div style={{}}>
                    <Row>
                        <Col span={1} />
                            <Col span={11}>
                                <div style={{margin:'5% 0'}}>
                                    <span
                                        style={{padding:'1%',marginRight:'2%',background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,77,79,1) 100%)'}}
                                    />
                                    <span style={{fontSize:'150%',color:'#222222',}}>
                                        &nbsp;&nbsp;最新上传
                                    </span>
                                    <span style={{fontSize:'150%',color:'#BCBCBC',}}>
                                        &nbsp;&nbsp;LASTEST
                                    </span>
                                    <span style={{fontSize:'100%',color:'#BCBCBC',}}>
                                        &nbsp;&nbsp;查看更多 》
                                    </span>
                                </div>
                            </Col>
                    <Col span={0} />
                        
                    <Col span={11}>
                        <div style={{float:'right',margin:'6% 0' }}>
                        <span>
                            视频
                            <Divider type="vertical" />
                            <a href="#">文学</a>
                            <Divider type="vertical" />
                            <a href="#">音乐</a>
                            <Divider type="vertical" />
                            <a href="#">其他</a>
                        </span>
                        </div>
                        
                    </Col>
                    <Col span={1} />
                    </Row></div>
                </Col>
                
                
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={22} >
                            <Row gutter={12}>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'}
                                /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                            </Row>
                        </Col>
                        <Col span={1} />
                    </Row>
                </Col>
                <Col span={24} ><div style={{margin:'1% 0'}}>
                    <Row>
                        <Col span={1} />
                        <Col span={22} >
                            <Row gutter={12}>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                            </Row>
                        </Col>
                        <Col span={1} />
                    </Row></div>
                </Col>
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={22} >
                            <Row gutter={12}>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                                <Col span={6}><MovieCard 
                                    img={img1} title1={"自媒体《独白》团队访问徐峥：..."} title2={<span>&nbsp;</span>}
                                    type2={'访谈'} time={'1460:59'} /></Col>
                            </Row>
                        </Col>
                        <Col span={1} />
                    </Row>
                </Col>
              
            </Row>
        
        </div>
 )