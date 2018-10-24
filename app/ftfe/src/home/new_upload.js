import React from 'react'
import MovieCard from './movie_card'

import { Row, Col } from 'antd';
const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";
  
  
export default () => (
    
   
        <div>
            <Row gutter={4}>
                <Row gutter={4}>
                    
                    <Col span={2} />
                    <Col span={20} ><h2 style={{color:'white',fontSize:'150%'}}>最新上传 <span style={{color:'black',fontSize: '50%'}}>查看更多</span></h2></Col>
                    <Col span={2} />
                </Row>
                
                
              
                <Row gutter={4}>
                    <Col span={2} />
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={2} />
                </Row>
                <Row gutter={4} style={{marginTop:'10px'}}>
                    <Col span={2} />
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={2} />
                </Row>
                <Row gutter={4} style={{marginTop:'10px'}}>
                    <Col span={2} />
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={4} ><MovieCard /></Col>
                    <Col span={2} />
                    
                </Row>
              
            </Row>
        
        </div>
   

  )