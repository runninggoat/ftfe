import React, { Component } from "react";
import Ad from "../home/ad_title";
import { Row, Col, Button, Icon, Carousel } from "antd";
import PlayModal from "../modal/play_modal";
import Title from './title'
import MyIcon from "../my_icon";
import { Tabs } from "antd";
import "../home/hot.less";
import img1 from "../image/001.jpeg";
import img2 from "../image/003.jpg";
import img3 from "../image/004.jpeg";
import img4 from "../image/005.jpg";
import img5 from "../image/006.jpg";
import img9 from "../image/009.jpg";

const TabPane = Tabs.TabPane;
const color1='linear-gradient(270deg,rgba(250,217,97,1) 0%,rgba(249,163,63,1) 100%)'

class Home extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={24}>
          <Ad />
        </Col>
        <Col
          span={24}
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 31px 0px rgba(205,205,205,0.27)",
            height: 54
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              minWidth: "1200px",
              margin: "auto"
            }}
          >
            <Row type="flex" justify="center">
              <Col offset={1} span={22}>
                <Tabs
                  defaultActiveKey="1"
                  size={"large"}
                  style={{ marginLeft: "-30px" }}
                >
                  <TabPane tab={<span>推&nbsp;&nbsp;荐</span>} key="1" />
                  <TabPane tab={<span>预&nbsp;&nbsp;热</span>} key="2" />
                  <TabPane tab={<span>众凑中</span>} key="3" />
                  <TabPane tab={<span>成功项目</span>} key="4" />
                </Tabs>
              </Col>
              
            </Row>
            
            
          </div>
        </Col>
        <Col span={24} style={{
            margin:'50px 0 0',}}>
            <div >
                <Title img={img1} background={color1}/>
            </div>
        </Col>

        <PlayModal />
      </Row>
    );
  }
}

export default Home;
