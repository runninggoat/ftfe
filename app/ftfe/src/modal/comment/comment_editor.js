import React from 'react';
import CommentEditor from './comment_editor';
import CommentComments from './comment_comments';



import { Input,Icon,Button } from 'antd';
const { TextArea } = Input;


export default () => (
  <div style={{padding:'2.5%', margin:'1% 1% 1% 1%',backgroundColor:'purple'}}>
  
    <TextArea style={{ margin: '5px 0' }} placeholder="Autosize height based on content lines" autosize={{ minRows: 3, maxRows: 3 }} />
    <span style={{fontSize:'15px',margin: '5px 0'}}>
      <Icon type="smile" theme="filled" style={{fontSize:'15px',marginLeft:'5px',marginRight: '5px'}}/>
      <Icon type="tag" theme="outlined" style={{fontSize:'15px',marginRight: '5px'}}/>
      <Icon type="diff" theme="filled" style={{fontSize:'15px',marginRight: '5px'}} />
      <Button size={'small'} style={{fontSize:'15px',float: 'right'}} >发表</Button>
    </span>
    
    <div>
    <h2>热门评论</h2>
    <h3><CommentComments /></h3>
    <h2>最新评论</h2>
    <h3><CommentComments /></h3>

    </div>
      
   
  </div>);