import React from 'react'
import { Carousel,Button} from 'antd'
import img1 from '../image/001.jpeg'
import img2 from '../image/003.jpg'
import img3 from '../image/004.jpeg'
import img4 from '../image/005.jpg'
import img5 from '../image/006.jpg'
import './hot.less'

const ad1=(<div style={{position:'absolute',
            top:'135px',
            left:'95px',
            marginRight:'60%',
            }}>
            <div style={{fontWeight:600,
            color:'rgba(255,255,255,1)',
            fontSize:'36px',
            maxWidth:'405px',
            maxHeight:'50px',
            }}>这幅广告图的正标题</div>
            <br />
            <div style={{
            fontWeight:600,
            color:'rgba(255,255,255,1)',
            fontSize:'24px',
            maxWidth:'405px',
            maxHeight:'33px',
            }}>这幅广告图的副标题</div>
            <br />
            <div style={{
            fontWeight:400,
            color:'rgba(255,255,255,1)',
            fontSize:'16px',
            maxWidth:'405px',
            maxHeight:'66px',
            }}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
            <br />
            <br />
            <div style={{fontSize:'16px'}}>
                <Button style={{
                width:150,
                height:40,
                background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
                color:'#FFFFFF',
                borderRadius:20,
                border:'none'
                }}><span >播放</span></Button> 
                <Button style={{
                width:150,
                height:40,
                borderRadius:20,
                background:'none',
                color:'#FFFFFF',
                marginLeft:30,
                }}><span >收藏</span></Button> 
            </div>
        </div>)
const ad2=(<div style={{position:'absolute',top:'20%',left:'10%', marginRight:'60%'}}>
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'150%'}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,color:'rgba(255,255,255,1)',fontSize:'100%'}}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>)
const ad3=(<div style={{position:'absolute',top:'20%',left:'10%', marginRight:'60%'}}>
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'150%'}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,color:'rgba(255,255,255,1)',fontSize:'100%'}}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>)
const ad4=(<div style={{position:'absolute',top:'20%',left:'10%', marginRight:'60%'}}>
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'150%'}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,color:'rgba(255,255,255,1)',fontSize:'100%'}}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>)
const ad5=(<div style={{position:'absolute',top:'20%',left:'10%', marginRight:'60%'}}>
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'150%'}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,color:'rgba(255,255,255,1)',fontSize:'100%'}}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>)
        




export default () => (
    <div  style={{}}>
        <Carousel  effect="fade">
            <div>
            </div>
            
            
            <div><div style={{backgroundRepeat:'no-repeat',
            backgroundPosition:'50% 50%',
            backgroundColor:'black',overflow:'hidden',
            backgroundSize:'contain',height: '570px',width:'100%',
            backgroundImage:`url(${img2})`}}>
            </div>
            {ad2}
            </div>
            <div><div style={{backgroundRepeat:'no-repeat',
            backgroundPosition:'50% 50%',
            backgroundColor:'black',overflow:'hidden',
            backgroundSize:'contain',height: '570px',width:'100%',
            backgroundImage:`url(${img3})`}}>
            </div>
            {ad3}
            </div>
            <div><div style={{backgroundRepeat:'no-repeat',
            backgroundPosition:'50% 50%',
            backgroundColor:'black',overflow:'hidden',
            backgroundSize:'contain',height: '570px',width:'100%',
            backgroundImage:`url(${img4})`}}>
            </div>
            {ad4}
            </div>
            <div><div style={{backgroundRepeat:'no-repeat',
            backgroundPosition:'50% 50%',
            backgroundColor:'black',overflow:'hidden',
            backgroundSize:'contain',height: '570px',width:'100%',
            backgroundImage:`url(${img5})`}}>
            </div>
            {ad5}
            </div>
        </Carousel>
        
        
        
    </div>
    
  
  )
