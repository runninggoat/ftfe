import React from 'react'
import MovieCard from './hot_movie_cards'

import { Row, Col,Icon } from 'antd';
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
                                        我的关注
                                    </span>
                                    <span style={{fontSize:'150%',color:'#BCBCBC',marginRight:'2%'}}>
                                        FAVOURATE
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