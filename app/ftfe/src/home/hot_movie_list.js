import React from 'react'
import MovieCard from './movie_card'

import { Row, Col,Icon } from 'antd';
const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";
  
  
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
  
//   <Row gutter={4}>
                    
                    
//                     <Col span={24} >
//                         <h2 style={{color:'black',fontSize:'150%'}}>热门佳作
//                             <span style={{color:'grey',marginLeft:'1%'}}>POPULAR</span> 
//                             <span style={{color:'grey',fontSize: '50%',marginLeft:'1%'}}>查看更多</span>
//                         </h2>
//                     </Col>
                    
//                 </Row>
//                 <Col span={2} >
                
//                 </Col>
//               <Col span={8} >
//                 <div><img  style={{width: '100%', height: '300px',  backgroundSize:'cover',backgroundImage: `url(${img1})` }}/></div>
//               </Col>
//               <Col span={12} >
//                 <Row gutter={4}>
//                     <Col span={8} ><MovieCard /></Col>
//                     <Col span={8} ><MovieCard /></Col>
//                     <Col span={8} ><MovieCard /></Col>
//                 </Row>
//                 <Row gutter={4} style={{marginTop:'10px'}}>
//                     <Col span={8} ><MovieCard /></Col>
//                     <Col span={8} ><MovieCard /></Col>
//                     <Col span={8} ><MovieCard /></Col>
//                 </Row>
//               </Col>
//               <Col span={2}  style={{fontSize:'50px', position:'relative',top:'75px'}}>
//                 <Icon type="right" theme="outlined" />
//               </Col>