import React,{Component} from 'react';
import { Tag } from 'antd';


import img1 from'../image/006.jpg'  
  
class UploadCard extends Component{
  constructor(props) {
    super(props)
    }
  render(){
    
    return(
      
      <div style={{margin:'2%'}}>
      <img src={this.props.img?this.props.img:img1} style={{width: '100%', height: '245px',  backgroundSize:'cover', 
        borderTopLeftRadius:'16px',borderTopRightRadius:'16px'
      }} />
      
      <div style={{background:'rgba(255,255,255,1)',boxShadow:'0px 2px 15px 0px rgba(0,0,0,0.05)',
        borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px',
      }}> 
       
        <div style={{fontWight:'900',color:'rgba(0,0,0,1)',padding:'2%',
        }}>{this.props.title?this.props.title:'自媒体《独白》团队访问徐峥：...'}
          <div>{this.props.title2?this.props.title2:''}</div>
        </div>
        <div style={{color:'#9B9B9B',padding:'2%',}}>
          <Tag color="#EEEEEE"><span style={{color:'#9B9B9B',borderRadius:'10px'}}>{this.props.type2?this.props.type2:'言情'}</span> </Tag>
          <span style={{float:'right'}}>X 9,999   X 10万</span>
        </div>
      </div>
    </div>
      
      )}
}
  

  
  export default UploadCard;