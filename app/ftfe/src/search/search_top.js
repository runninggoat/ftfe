import React, { Component } from "react";
import { Row, Col } from "antd";
import MyIcon from "../my_icon";
import { Input } from "antd";
import { Tabs, Button } from "antd";
import { Tag } from "antd";
import DropdownHot from "./dropdown_hot";
import Dropdowning from "./dropdown_ing";

const TabPane = Tabs.TabPane;

const { CheckableTag } = Tag;

class MyTag extends React.Component {
  state = { checked: false };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <CheckableTag
        {...this.props}
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    );
  }
}

export default class SearchTop extends Component {
  state = {
    type: {
      video: ["动画", "MTV", "真人秀", "访问", "电影", "电视剧", "其他"],
      music: [
        "POP",
        "RAP",
        "Country",
        "Rock",
        "Jazz",
        "R&B",
        "Hip Hop",
        "Classical",
        "DJ",
        "Indie",
        "Punk",
        "其他"
      ],
      doc: ["音乐剧本", "言情小说", "非虚构类", "玄幻", "恐怖", "其他"],
      other: ["编舞", "科技", "图片", "设计", "创意"]
    },
    results: [
      {
        title: "",
        imgSrc: "",
        likes: "",
        watched: ""
      }
    ]
  };
  render() {
    let videos = this.state.type.video.map((v, k) => {
      return (
        <span style={{ margin: "0 10px 0 0" }} key={k}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    let musics = this.state.type.music.map((v, k) => {
      return (
        <span key={k} style={{ margin: "0 10px 0 0" }}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    let docs = this.state.type.doc.map((v, k) => {
      return (
        <span key={k} style={{ margin: "0 10px 0 0" }}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    let others = this.state.type.other.map((v, k) => {
      return (
        <span key={k} style={{ margin: "0 10px 0 0" }}>
          <MyTag>{v}</MyTag>
        </span>
      );
    });
    return (
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 2px 31px 0px rgba(205,205,205,0.27)}"
        }}
      >
        <Row>
          <Col span={24}>
            <div style={{ margin: "55px 0px 8px " }}>
              <Row>
                <Col span={2} />
                <Col span={20}>
                  <div style={{ borderBottom: "1px solid #D8D8D8" }}>
                    <Tabs defaultActiveKey="1" size={"large"}>
                      <TabPane tab="作&nbsp;&nbsp;品" key="1" />
                      <TabPane tab="众&nbsp;&nbsp;筹" key="2" />
                      <TabPane tab="用&nbsp;&nbsp;户" key="3" />
                      <TabPane tab="剧组服务" key="4" />
                    </Tabs>
                  </div>
                </Col>
                <Col span={2} />
              </Row>
            </div>
          </Col>

          <Col span={24}>
            <div style={{}}>
              <Row>
                <Col span={2} />
                <Col span={7}>
                  <div style={{ margin: "2% 0" }}>
                    <Input
                      placeholder="输入关键字搜索作品、众筹项目或用户"
                      prefix={
                        <MyIcon
                          type="icon-search"
                          style={{ fontSize: 20, color: "rgba(0,0,0,.25)" }}
                        />
                      }
                    />
                  </div>
                </Col>
                <Col span={15}>
                  <Button
                    style={{
                      margin: "1% 1%",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      fontSize: 16,
                      height: "36px",
                      lineHeight: "16px"
                    }}
                  >
                    搜索
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col span={2} />
          <Col span={20}>
            <div style={{ margin: "1% 0" }}>
              <Row>
                <Col span={2}>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(74,74,74,1)",
                      lineHeight: "22px"
                    }}
                  >
                    视频
                  </div>
                </Col>
                <Col span={22}>
                  <div
                    style={{
                      color: "#9B9B9B",
                      fontSize: 14,
                      lineHeight: "30px"
                    }}
                  >
                    <MyTag>
                      <span style={{ margin: "0 10px 0 0" }}>全部</span>
                    </MyTag>
                    {videos}
                    {videos}
                    {videos}
                    {videos}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />

          <Col span={2} />
          <Col offset={2} span={20}>
            <div style={{ margin: "1% 0" }}>
              <Row>
                <Col span={2}>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(74,74,74,1)",
                      lineHeight: "22px"
                    }}
                  >
                    音乐
                  </div>
                </Col>
                <Col span={22}>
                  <div
                    style={{
                      color: "#9B9B9B",
                      fontSize: 14,
                      lineHeight: "30px"
                    }}
                  >
                    <MyTag>
                      <span style={{ margin: "0 10px 0 0" }}>全部</span>
                    </MyTag>
                    {musics}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />

          <Col span={2} />
          <Col offset={2} span={20}>
            <div style={{ margin: "1% 0" }}>
              <Row>
                <Col span={2}>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(74,74,74,1)",
                      lineHeight: "22px"
                    }}
                  >
                    文学
                  </div>
                </Col>
                <Col span={22}>
                  <div
                    style={{
                      color: "#9B9B9B",
                      fontSize: 14,
                      lineHeight: "30px"
                    }}
                  >
                    <MyTag>
                      <span style={{ margin: "0 10px 0 0" }}>全部</span>
                    </MyTag>{" "}
                    {docs}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />

          <Col span={2} />
          <Col offset={2} span={20}>
            <div style={{ margin: "1% 0" }}>
              <Row>
                <Col span={2}>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(74,74,74,1)",
                      lineHeight: "22px"
                    }}
                  >
                    其他
                  </div>
                </Col>
                <Col span={22}>
                  <div
                    style={{
                      color: "#9B9B9B",
                      fontSize: 14,
                      lineHeight: "30px"
                    }}
                  >
                    <MyTag>
                      <span style={{ margin: "0 10px 0 0" }}>全部</span>
                    </MyTag>{" "}
                    {others}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={2} />

          <Col span={2} />
          <Col offset={2} span={2}>
            <div style={{ margin: "20px 0 20px" }}>
              <MyIcon
                type="icon-rank"
                style={{ fontSize: 24, float: "left", color: "#FF1367" }}
              />
              <DropdownHot />
            </div>
          </Col>
          <Col span={2}>
            <div style={{ margin: "20px 0 20px" }}>
              <MyIcon
                type="icon-time"
                style={{ fontSize: 24, float: "left", color: "#FF1367" }}
              />
              <Dropdowning />
            </div>
          </Col>
          <Col span={2} />
        </Row>
      </div>
    );
  }
}
