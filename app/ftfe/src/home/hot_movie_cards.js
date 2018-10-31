import React from 'react';
import { Tag } from 'antd';

const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";

export default () => (
  
    <div style={{margin:'2%'}}>
      <img src={img1} style={{width: '100%', height: '245px',  backgroundSize:'cover', 
        borderTopLeftRadius:'16px',borderTopRightRadius:'16px'
      }} />
      <div style={{background:'rgba(255,255,255,1)',boxShadow:'0px 2px 15px 0px rgba(0,0,0,0.05)',
        borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px',
      }}> 
        <div style={{fontWight:'900',color:'rgba(0,0,0,1)',margin:'3%',
        }}>自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥
        </div>
        <div style={{color:'#9B9B9B'}}>
          <Tag color="#EEEEEE"><span style={{color:'#9B9B9B'}}>访谈</span> </Tag>
          <span style={{float:'right'}}>X 9,999   X 10万</span>
        </div>
      </div>
    </div>
  
   
  )