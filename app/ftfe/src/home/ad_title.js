import React from 'react'
import { Carousel } from 'antd'

const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";
  const img2 =
  "http://imge.gmw.cn/site2/20160226/f04da226e54a183a3bc533.jpeg";
  const img3 =
  "http://www.cheung-wo.com/media/editor_images/images/IM2_MainPoster_sponsor%2004_26.jpg";
  const img4 =
  "https://qnam.smzdm.com/201801/02/5a4b66dbf1efe7034.jpg_e600.jpg";
  const img5 =
  "https://www.zizaifan.com/upload/201708/10/201708102204175993.jpg";

export default () => (
    
    
  
    
    <div  style={{marginBot:'2%'}}>
        <Carousel  effect="fade">
            <div><img src={img1}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img2}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img3}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img1}  style={{ height: '570px',width:'100%'}} /></div>
            <div><img src={img5}  style={{ height: '570px',width:'100%'}} /></div>
        </Carousel>
    </div>
    
  
  )
