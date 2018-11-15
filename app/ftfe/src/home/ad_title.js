import React from 'react'
import { Carousel,Button} from 'antd'
import img1 from '../image/001.jpeg'
import img2 from '../image/003.jpg'
import img3 from '../image/004.jpeg'
import img4 from '../image/005.jpg'
import img5 from '../image/006.jpg'
import './hot.less'
import { Row,Col} from 'antd'



const ad1=(<div>

    <div style={{
    marginLeft:190,
    width:1250,
    height:570,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'50% 50%',
    backgroundColor:'black',
    overflow:'hidden',
    backgroundSize:'contain',
    backgroundImage:`url(${img1})`,
    }}>
    <span style={{
    position:'absolute',
    left:0,
    width:190,
    height:570,
    background:'#0058D1',
    }}></span>
    <div style={{
    width:1081,
    height:570,
    background:'linear-gradient(270deg,rgba(0,94,255,0) 0%,rgba(35,93,173,0.5) 28%,rgba(0,88,209,1) 100%)',
    }}></div>
    
    <div style={{
    position:'absolute',
    top:135,
    left:95, 
    width:405,
    }}>
            <div style={{lineHeight:50, fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{
            fontWeight:500,
            lineHeight:33,
            color:'rgba(255,255,255,1)',
            fontSize:24}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,
            color:'rgba(255,255,255,1)',
            fontSize:16,
            lineHeight:22,
            }}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>
    </div>

    </div>)
const ad2=(<div>

    <div style={{
    marginLeft:190,
    width:1250,
    height:570,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'50% 50%',
    backgroundColor:'black',
    overflow:'hidden',
    backgroundSize:'contain',
    backgroundImage:`url(${img2})`,
    }}>
    <span style={{
    position:'absolute',
    left:0,
    width:190,
    height:570,
    background:'#0058D1',
    }}></span>
    <div style={{
    width:1081,
    height:570,
    background:'linear-gradient(270deg,rgba(0,94,255,0) 0%,rgba(35,93,173,0.5) 28%,rgba(0,88,209,1) 100%)',
    }}></div>
    
    <div style={{
    position:'absolute',
    top:135,
    left:95, 
    width:405,
    }}>
            <div style={{lineHeight:50, fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{
            fontWeight:500,
            lineHeight:33,
            color:'rgba(255,255,255,1)',
            fontSize:24}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,
            color:'rgba(255,255,255,1)',
            fontSize:16,
            lineHeight:22,
            }}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>
    </div>

    </div>)
const ad3=(<div>

    <div style={{
    marginLeft:190,
    width:1250,
    height:570,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'50% 50%',
    backgroundColor:'black',
    overflow:'hidden',
    backgroundSize:'contain',
    backgroundImage:`url(${img3})`,
    }}>
    <span style={{
    position:'absolute',
    left:0,
    width:190,
    height:570,
    background:'#0058D1',
    }}></span>
    <div style={{
    width:1081,
    height:570,
    background:'linear-gradient(270deg,rgba(0,94,255,0) 0%,rgba(35,93,173,0.5) 28%,rgba(0,88,209,1) 100%)',
    }}></div>
    
    <div style={{
    position:'absolute',
    top:135,
    left:95, 
    width:405,
    }}>
            <div style={{lineHeight:50, fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{
            fontWeight:500,
            lineHeight:33,
            color:'rgba(255,255,255,1)',
            fontSize:24}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,
            color:'rgba(255,255,255,1)',
            fontSize:16,
            lineHeight:22,
            }}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>
    </div>

    </div>)
const ad4=(<div>

    <div style={{
    marginLeft:190,
    width:1250,
    height:570,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'50% 50%',
    backgroundColor:'black',
    overflow:'hidden',
    backgroundSize:'contain',
    backgroundImage:`url(${img4})`,
    }}>
    <span style={{
    position:'absolute',
    left:0,
    width:190,
    height:570,
    background:'#0058D1',
    }}></span>
    <div style={{
    width:1081,
    height:570,
    background:'linear-gradient(270deg,rgba(0,94,255,0) 0%,rgba(35,93,173,0.5) 28%,rgba(0,88,209,1) 100%)',
    }}></div>
    
    <div style={{
    position:'absolute',
    top:135,
    left:95, 
    width:405,
    }}>
            <div style={{lineHeight:50, fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{
            fontWeight:500,
            lineHeight:33,
            color:'rgba(255,255,255,1)',
            fontSize:24}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,
            color:'rgba(255,255,255,1)',
            fontSize:16,
            lineHeight:22,
            }}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>
    </div>

    </div>)
const ad5=(<div>

    <div style={{
    marginLeft:190,
    width:1250,
    height:570,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'50% 50%',
    backgroundColor:'black',
    overflow:'hidden',
    backgroundSize:'contain',
    backgroundImage:`url(${img5})`,
    }}>
    <span style={{
    position:'absolute',
    left:0,
    width:190,
    height:570,
    background:'#0058D1',
    }}></span>
    <div style={{
    width:1081,
    height:570,
    background:'linear-gradient(270deg,rgba(0,94,255,0) 0%,rgba(35,93,173,0.5) 28%,rgba(0,88,209,1) 100%)',
    }}></div>
    
    <div style={{
    position:'absolute',
    top:135,
    left:95, 
    width:405,
    }}>
            <div style={{lineHeight:50, fontWeight:600,color:'rgba(255,255,255,1)',fontSize:'36px'}}>这幅广告图的正标题</div>
            <br />
            <div style={{
            fontWeight:500,
            lineHeight:33,
            color:'rgba(255,255,255,1)',
            fontSize:24}}>这幅广告图的副标题</div>
            <br />
            <div style={{fontWeight:400,
            color:'rgba(255,255,255,1)',
            fontSize:16,
            lineHeight:22,
            }}>
            同言想人別安，多學水不事少百量他策自、交施力演線成，的打小放你，竟事清保身人張著大片國相院人靜連美海證體情孩幾一。度關文出學。
            </div>
        </div>
    </div>

    </div>)
        




export default () => (
    <div  style={{}}>
        <Carousel  effect="fade">
            <div>
            {ad1}
            </div>
            
            
            <div>
            {ad2}
            </div>
            
            <div>
            {ad3}
            </div>
            <div>
            {ad4}
            </div>
            <div>
            {ad5}
            </div>
        </Carousel>
        
        
        
    </div>
    
  
  )
