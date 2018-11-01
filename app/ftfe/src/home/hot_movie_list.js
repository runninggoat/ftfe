import React from 'react'
import HotMovieCard from './hot_movie_cards'

import { Row, Col } from 'antd';
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
                                        style={{padding:'1%',marginRight:'2%',background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)'}}
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
                        <Col span={6} ><HotMovieCard 
                        img={img1} title1={"自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥"}
                        type2={'访谈'} type1={'视频'}
                        /></Col>
                        <Col span={5} ><HotMovieCard /></Col>
                        <Col span={5} ><HotMovieCard 
                        img={img1} title1={"自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥"}
                        title2={'Mumford & Sons'} type2={'独立摇滚'}
                        /></Col>
                        <Col span={6} ><HotMovieCard /></Col>
                        <Col span={1} />
                    </Row>
                </Col>
                
                
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={5} ><HotMovieCard /></Col>
                        <Col span={6} ><HotMovieCard /></Col>
                        <Col span={6} ><HotMovieCard /></Col>
                        <Col span={5} ><HotMovieCard /></Col>
                        <Col span={1} />
                    </Row>
                </Col>
                
                
                
                
              
            </Row>
        
        </div>
 )