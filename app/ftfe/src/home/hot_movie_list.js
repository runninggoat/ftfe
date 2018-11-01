import React from 'react'
import HotMovieCard from './hot_movie_cards'

import { Row, Col } from 'antd';

import img1 from'../image/001.jpeg'
import img3 from'../image/003.jpg'
import img4 from'../image/004.jpeg'
import img5 from'../image/005.jpg'
import img6 from'../image/006.jpg'
import img7 from'../image/007.jpg'
import img8 from'../image/008.jpg'
import img9 from'../image/009.jpg'
import img10 from'../image/010.jpg'
import img11 from'../image/011.jpg'
import img12 from'../image/012.jpg'
import img13 from'../image/013.jpg'
  
  
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
                        img={img6} title1={"自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥"}
                        type1={'视频'} type2={'访谈'} 
                        /></Col>
                        <Col span={5} ><HotMovieCard 
                        img={img4} title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
                        type1={'文学'} type2={'言情'} 
                        /></Col>
                        <Col span={5} ><HotMovieCard 
                        img={img13} title1={"BABEL"}
                        title2={'Mumford & Sons'} type1={'音乐'} type2={'独立摇滚'}
                        /></Col>
                        <Col span={6} ><HotMovieCard 
                        img={img1} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                        type1={'其他'} type2={'编舞'} 
                        /></Col>
                        <Col span={1} />
                    </Row>
                </Col>
                
                
                <Col span={24} >
                    <Row>
                        <Col span={1} />
                        <Col span={5} ><HotMovieCard 
                        img={img7} title1={"穿越清朝智斗妃嫔成皇后一统后宫"}
                        type1={'文学'} type2={'言情'} 
                        /></Col>
                        <Col span={6} ><HotMovieCard 
                        img={img12} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                        type1={'其他'} type2={'访谈'} 
                        /></Col>
                        <Col span={6} ><HotMovieCard 
                        img={img9} title1={"自媒体《独白》团队访问徐峥：药神不是药神，徐峥还是徐峥"}
                        type1={'视频'} type2={'访谈'} 
                        /></Col>
                        <Col span={5} ><HotMovieCard 
                        img={img10} title1={"BABEL"}
                        title2={'Mumford & Sons'} type1={'音乐'} type2={'独立摇滚'}
                        /></Col>
                        <Col span={1} />
                    </Row>
                </Col>
                
                
                
                
              
            </Row>
        
        </div>
 )