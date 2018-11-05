import React from 'react';
import { Tabs } from 'antd';
import Intro from './introduction';
import Staff from './staff';
import CopyRight from './copy_right';
const TabPane = Tabs.TabPane;


const img1 =
  "https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200";


export default () => (
  
  <div style={{padding:'2.5%', margin:'1% 1% 1% 1%',backgroundColor:'red',borderRadius:'16px'}} >
    <Tabs defaultActiveKey="1">
      <TabPane tab="简介" key="1"><Intro /></TabPane>
      <TabPane tab="团队" key="2"><Staff /></TabPane>
      <TabPane tab="版权" key="3"><CopyRight /></TabPane>
    </Tabs>
  </div>
  )