import React from 'react';
import MovieList from '../movie/movie_list';
import { Button,Tabs } from "antd";
import { Row, Col } from 'antd';

const TabPane = Tabs.TabPane;

export default () => (
  <div >
    <Row>
      <Col span={1}/>
      <Col span={22}>
        <Row>
      <Col>
        <Button  type="primary">打赏</Button>
      </Col>
      <Col>
        <Button  type="primary">分享</Button>
      </Col>
        <Button ghost>赞</Button>
      <Col>
        <Button ghost>添加到收藏</Button>
      </Col>
      <Col>
        <h4>99,999 次观看</h4><h4>99,999 条评论</h4>
      </Col>
      
    </Row>
    <Row>
        <Col>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="播 放" key="1"><MovieList /></TabPane>
            <TabPane tab="团 队" key="2"><MovieList /></TabPane>
          </Tabs>
        </Col>
      
    </Row>
      </Col>
      <Col span={1}/>
    </Row>
  </div>
);
