import React, { Component } from 'react';
import { Modal } from "antd";
import SidePanel from './comment/side_panel';
import CommentBar from './comment/comment_bar';
import PaidMovie from './movie/paid_movie';
import Comments from './comment/comment_editor';
import { Row, Col,Button} from 'antd';
import MyIcon from '../my_icon'
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
          width={'90%'}
          bodyStyle={{padding:'0px',margin:'5% 0'}}
          
        >
        <div >
        <Row >
        
            <Col span={19}>
                <Row>
                    <Col>
                    <div id='top'>
                    <PaidMovie />
                    </div>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                    <CommentBar />
                    </Col>
                    
                </Row>
                <Row>
                    <Col><div id='comment'>
                    <Comments />
                    </div></Col>
                </Row>
            </Col>
            
            <Col span={5}>
                <Row>
                  <Col><SidePanel /></Col>
                  <Col>
                    <div style={{position:'fixed',top:'80%'}}>
                      <div style={{
                      }}><a href='#top' >&nbsp;<Button 
                        style={{width:'68px',height:'68px',
                        background:'rgba(238,238,238,1',
                        borderRadius:'17px'}}
                      ><MyIcon type='icon-totop' style={{fontSize:29,color:'#BCBCBC'}} /></Button></a></div>
                      <br />
                      <div style={{}}><a href='#comment' >&nbsp;<Button 
                        style={{width:'68px',height:'68px',
                        background:'rgba(238,238,238,1',
                        borderRadius:'17px'}}
                        ><MyIcon type='icon-interactive' style={{fontSize:40,color:'#BCBCBC'}}/></Button></a></div>
                    </div>
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


