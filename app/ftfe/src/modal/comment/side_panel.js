import React from 'react';
import MovieList from '../movie/movie_list';
import { Button,Tabs } from "antd";
import { Row, Col } from 'antd';

const TabPane = Tabs.TabPane;
export default () => (
  <div >
    <Row>
      <Col>
        <div style={{padding:'2.5%', margin:'3% 3% 3% 1%',backgroundColor:'blue',borderRadius:'16px'}}>
        <Row>
          <Col>
            <MovieList />
          </Col>
        </Row>
        
        <Row>
          <Col>
            <h1>
              导演老李
            </h1>
            <h2>
              100 作品  202.33万 粉丝
            </h2>
            <h3>
              议义结众积把度引这状科，派多人度越已况看石外，第证-京坝事定该采。指则影研上确干它平局提，属该众代共列点口交场满道，位备励行才乱枝情据型。矿住青共实走的先图江，切切每须都素可利等率，路马H定隶军志严。易越参向北我细角农体，志量后说次八正须较领，连别届秃术型制矿。
            </h3>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Row>
              <Col>
                <Button  type="primary">打赏</Button>
              </Col>
            </Row>
             <Row>
              <Col>
                <Button ghost>关注</Button>
              </Col>
            </Row>
          </Col>
        </Row></div>
        
        <div style={{padding:'2.5%', margin:'3% 3% 3% 1%',backgroundColor:'pink',borderRadius:'16px'}}>
        <Row>
          <Col>
          
            <Row>
              <Col><h1>视频表列</h1></Col>
           
            
              <Col><div><MovieList /></div></Col>
           
            
              <Col><div><MovieList /></div></Col>
            
            
              <Col><div><MovieList /></div></Col>
            
            
              <Col><div><MovieList /></div></Col>
            </Row>
            
          </Col>
        </Row>
        </div>
        
      </Col>
    </Row>
  </div>
);
/*
        <Row>
      <Col>
        <Button  type="primary">打赏</Button>
      </Col>
      <Col>
        <Button ghost>关注</Button>
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
      */