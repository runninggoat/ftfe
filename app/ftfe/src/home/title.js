import React from 'react'
import { Row, Col,Button,Icon,Carousel } from 'antd'

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default () => (
    <div style={{
    maxWidth:1440,
    margin:'0 0',
    minWidth:1200, 
    }}>
        <Tabs defaultActiveKey="1" size={'large'}>
            <TabPane tab={<span  >推&nbsp;&nbsp;荐</span>} key="1"></TabPane>
            <TabPane tab={<span  >视&nbsp;&nbsp;频</span>} key="2"></TabPane>
            <TabPane tab={<span  >文&nbsp;&nbsp;学</span>} key="3"></TabPane>
            <TabPane tab={<span  >其&nbsp;&nbsp;他</span>} key="4"></TabPane>
        </Tabs>
    </div>
                        
)