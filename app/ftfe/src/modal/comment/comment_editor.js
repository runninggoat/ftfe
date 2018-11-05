import React from 'react';
import CommentEditor from './comment_editor';
import CommentComments from './comment_comments';
import { Row, Col } from 'antd';


import { Input,Icon,Button } from 'antd';
const { TextArea } = Input;


export default () => (
  <div style={{padding:'2.5%', margin:'1% 1% 1% 1%',backgroundColor:'purple',borderRadius:'16px'}}>
    
    <Row>
      <Col>
        <Row>
          <Col>
            <div style={{ margin: '1% 0' }}>
              <TextArea  placeholder="Autosize height based on content lines" autosize={{ minRows: 3, maxRows: 3 }} />
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col span={3}>
            <Row>
              <Col span={8}>
                <Icon type="smile" theme="filled" style={{fontSize:'150%',marginLeft:'1%',marginRight: '1%'}}/>
              </Col >
              <Col span={8}>
                <Icon type="tag" theme="outlined" style={{fontSize:'150%',marginRight: '1%'}}/>
              </Col>
              <Col span={8}>
                <Icon type="diff" theme="filled" style={{fontSize:'150%',marginRight: '1%'}} />
              </Col>
            </Row>
          </Col>
          
          <Col span={20} />
          <Col span={1}>
            <Button size={'small'} style={{fontSize:'15px',float: 'right'}} >发表</Button>
          </Col>
        </Row>
        
        
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <div style={{fontSize:'150%',marginTop: '15%'}}>
                  热门评论
                </div>
              </Col>
              <Col span={21} />
            </Row>
            
            <Row>
              <Col>
                <div><CommentComments /></div>
              </Col>
            </Row>
          </Col>
        </Row>
        
        
        
      </Col>
    </Row>

      
   
  </div>);