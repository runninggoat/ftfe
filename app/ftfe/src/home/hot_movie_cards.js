import React,{Component} from 'react';
import { Tag } from 'antd';


const img1 ="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";
  
  
class HotMovieCard extends Component{
  constructor(props) {
    super(props)
    }
  render(){
    
    return(
      
      <div style={{margin:'2%'}}>
        
        
        <div style={{width: '100%', height: '245px',
          backgroundPosition:'50% 50%',
          backgroundColor:'black',
          backgroundRepeat:'no-repeat',
          backgroundSize:'contain',
          borderTopLeftRadius:'16px',borderTopRightRadius:'16px',backgroundImage : `url(${this.props.img?this.props.img:img1})`}}>
        
            <span><Tag style={{float:'right',position:'relative',top:'85%',border:0,borderRadius:'10px',background:"#222222"}}>
              <span style={{color:'#FFFFFF'}}>{this.props.time?this.props.time:'00:00'}</span> 
            </Tag></span>
            <span><Tag style={{float:'left',margin:'5%',border:0,borderRadius:'10px',background:"linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)"}}>
              <span style={{color:'#FFFFFF'}}>{this.props.type1?this.props.type1:'音乐'}</span> 
            </Tag></span>
        
        </div>
        
        <div style={{background:'rgba(255,255,255,1)',boxShadow:'0px 2px 15px 0px rgba(0,0,0,0.05)',
          borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px',
        }}> 
         
          
        
            <div style={{fontWight:'900',color:'rgba(0,0,0,1)',padding:'2%',
            }}>{this.props.title1?this.props.title1:'自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥?'}
              <div style={{color:'rgba(155,155,155,1)'}}>{this.props.title2?this.props.title2:''}</div>
            </div>
            
            <div style={{color:'#9B9B9B',padding:'2%'}}>
              <Tag color="#EEEEEE" style={{borderRadius:'10px'}}><span style={{color:'#9B9B9B'}}>{this.props.type2?this.props.type2:'言情'}</span> </Tag>
              <span style={{float:'right'}}>X 9,999   X 10万</span>
            </div>
        </div>
    </div>
      
      )}
}
  

  
  export default HotMovieCard;