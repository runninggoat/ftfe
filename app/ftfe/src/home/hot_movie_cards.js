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
      <img src={this.props.img?this.props.img:img1} style={{width: '100%', height: '245px',  backgroundSize:'cover', 
        borderTopLeftRadius:'16px',borderTopRightRadius:'16px'
      }} />
      
      <div style={{background:'rgba(255,255,255,1)',boxShadow:'0px 2px 15px 0px rgba(0,0,0,0.05)',
        borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px',
      }}> 
        <div>
          <Tag style={{position:'absolute',top:'5%',left:'5%',background:"linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)"}}>
            <span style={{color:'#FFFFFF',borderRadius:'10px'}}>{this.props.type1?this.props.type1:'音乐'}</span> 
          </Tag>
      </div>
        <div style={{fontWight:'900',color:'rgba(0,0,0,1)',padding:'2%',
        }}>{this.props.title?this.props.title:'自媒体《独白》团队访问徐峥：药神不是药神,徐峥还是徐峥?'}
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
  

  
  export default HotMovieCard;