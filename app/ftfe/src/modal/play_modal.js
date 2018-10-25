import React, { Component } from 'react';
import { Modal,Button } from "antd";
import MovieList from './movie/movie_list';
import SidePanel from './comment/side_panel';
import CommentBar from './comment/comment_bar';
import PaidMovie from './movie/paid_movie';

import { Row, Col } from 'antd';

class PlayModal extends Component{
  

  state = { visible: true }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  render(){
    return(
      <div >
        <button onClick={this.showModal} >弹窗</button>
        
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          centered={true}
          width={'80%'}
          bodyStyle={{padding:'0px',margin:'5% 0'}}
        >
        <div style={{backgroundColor:'#343434'}}>
          <Row>
            <Col span={1} />
            <Col span={23} >
              <Row>
          <Col span={18}>
            <Row>
              <Col>
              <h1>这个播放列表的标题 </h1>
              <h2>这条视频的标题</h2>
              </Col>
            </Row>
            
            <Row>
              <Col>
                <PaidMovie />
              </Col>
            </Row>
            
            <Row>
              <Col>
              <h1>这个播放列表的标题 </h1>
              <h2>这条视频的标题</h2>
              </Col>
            </Row>
            
            
          </Col>
          
          <Col span={6} >
            <Row>
              <Col span={2} />
              <Col span={20}>
                <SidePanel/>  
              </Col>
              <Col span={2} />
            </Row>
            
          </Col>
        
        </Row>
            </Col>
          </Row>
          
        </div>
        </Modal>
        
      </div>
    );
  }
}

export default PlayModal;


// <Row>
//             <Col>
//               <h1>这个播放列表的标题 </h1>
//               <h2>这条视频的标题</h2>
//             </Col>
//           </Row>
          
//           <Row gutter={5}>
//             <Col span={18} >
//               <Row>
//                   <Col> <PaidMovie /></Col>
//               </Row>
//             </Col>
//             <Col span={6} style={{backgroundColor:'#5c5c5c'}}><SidePanel/>  
//             </Col>
//           </Row>



//             </Row>
//             <Row >
//                 <PaidMovie />
//             </Row>
//             <Row >
//                 <CommentBar />
//             </Row>
//           </Col>
//           <Col span={6} > <SidePanel/> </Col>
//         </Row>style={{backgroundColor:'#343434'}}
