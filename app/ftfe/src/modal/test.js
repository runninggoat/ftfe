import React, { Component } from 'react';
import { Modal } from "antd";
import SidePanel from './comment/side_panel';
import CommentBar from './comment/comment_bar';
import PaidMovie from './movie/paid_movie';
import Comments from './comment/comment_editor';
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
        <div style={{backgroundColor:'rgba(0, 255, 255,0.5)'}}>
        
        <Row >
        
            <Col span={18}>
                <Row>
                    <Col>
                    <PaidMovie />
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                    <CommentBar />
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                    <Comments />
                    </Col>
                </Row>
            </Col>
            
            <Col span={6}>
                <SidePanel />
            </Col>
        </Row>
        </div>
        
        </Modal>
        
      </div>
    );
  }
}

export default PlayModal;


