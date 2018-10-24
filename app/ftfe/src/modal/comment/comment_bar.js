import React from 'react';
import { Tabs } from 'antd';
import Intro from './introduction';
import CommentEditor from './comment_editor';
import CopyRight from './copy_right';
const TabPane = Tabs.TabPane;


const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";


export default () => (
  
  <div style={{width: '70%', height:'auto'}} >
    <Tabs defaultActiveKey="3">
      <TabPane tab="简介" key="1"><Intro /></TabPane>
      <TabPane tab="评论" key="2"><CommentEditor /></TabPane>
      <TabPane tab="版权" key="3"><CopyRight /></TabPane>
    </Tabs>
  </div>
  )