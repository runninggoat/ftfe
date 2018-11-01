import React from 'react'
import { Carousel } from 'antd'
import img1 from '../image/001.jpeg'
import img2 from '../image/003.jpg'
import img3 from '../image/004.jpeg'
import img4 from '../image/005.jpg'
import img5 from '../image/006.jpg'


export default () => (
    <div  style={{marginBot:'2%'}}>
        <Carousel  effect="fade">
            <div><img src={img1}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img2}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img3}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img4}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img5}  style={{ height: '570px',width:'100%'}} /></div>
        </Carousel>
    </div>
    
  
  )
