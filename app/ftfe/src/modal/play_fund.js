import React, { Component } from "react";
import { Modal } from "antd";
import { Tabs } from "antd";
import SidePanel from "./comment/side_panel";
import CommentBar from "./comment/comment_bar";
import PaidMovie from "./movie/paid_movie";
import Comments from "./comment/comment_editor";
import ProjectDetail from './fund/project_details'
import Timeline from './fund/timeline'
import { Row, Col, Progress, Tag, Button, Divider } from "antd";
import img12 from "../image/012.jpg";
import img11 from "../image/011.jpg";
import MyIcon from "../my_icon";
import {
  Player,
  BigPlayButton,
  ControlBar,
  VolumeMenuButton,
  LoadingSpinner
} from "video-react";
const TabPane = Tabs.TabPane;
export default class PlayModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showFund() {
    this.setState({
      visible: true
    });
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          closable={false}
          footer={null}
          centered={true}
          width={"1270px"}
          bodyStyle={{ padding: "0px", margin: "5% 0" }}
        >
          <div
            onClick={() => this.handleCancel()}
            style={{
              position: "fixed",
              top: "65px",
              right: "50px",
              color: "white",
              fontSize: "30px",
              float: "right",
              marginRight: "6px",
              textAlign: "center"
            }}
          >
            <MyIcon type="icon-close" />
          </div>
          <div>
            <Row>
              <Col
                span={24}
                style={{
                  height: "678px",
                  background: "rgba(255,255,255,1)",
                  borderRadius: "16px"
                }}
              >
                <Row>
                  <Col span={24}>
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: 500,
                        color: "rgba(0,0,0,1)",
                        lineHeight: "45px",
                        margin: "30px 0 0px 38px"
                      }}
                    >
                      这个视频的标题这个视频的标题
                      <Tag
                        style={{
                          margin: "0 5px 0 20px",
                          color: "#9B9B9B",
                          width: 55,
                          height: 20,
                          background: "rgba(238,238,238,1)",
                          borderRadius: "10px",
                          textAlign: "center"
                        }}
                      >
                        动画
                      </Tag>
                      <Tag
                        style={{
                          margin: "0 5px",
                          color: "#9B9B9B",
                          width: 55,
                          height: 20,
                          background: "rgba(238,238,238,1)",
                          borderRadius: "10px",
                          textAlign: "center"
                        }}
                      >
                        视频
                      </Tag>
                      <Tag
                        style={{
                          margin: "0 5px",
                          color: "#9B9B9B",
                          width: 55,
                          height: 20,
                          background: "rgba(238,238,238,1)",
                          borderRadius: "10px",
                          textAlign: "center"
                        }}
                      >
                        原创
                      </Tag>
                    </div>
                  </Col>
                  <Col span={19}>
                    <div style={{ width: "969px", margin: "20px 0 52px 41px" }}>
                      <Player poster={img12} preload="metadata">
                        <BigPlayButton position="center" />
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <LoadingSpinner />
                        <ControlBar autoHide={true}>
                          <VolumeMenuButton vertical />
                        </ControlBar>
                      </Player>
                    </div>
                  </Col>
                  <Col span={5} style={{ textAlign: "center" }}>
                    <Progress
                      type="circle"
                      percent={this.props.percent}
                      showInfo={false}
                    />
                    <div style={{}}>
                      {this.props.percent == 0 ? (
                        <div
                          style={{
                            color: "rgb(255, 19, 103)",
                            fontSize: "24px",
                            fontWeight: 500,
                            lineHeight: "40px",
                            position: "absolute",
                            top: "40px",
                            right: "95px"
                          }}
                        >
                          预热中
                        </div>
                      ) : this.props.percent == 100 ? (
                        <div
                          style={{
                            color: "#52C41A",
                            fontSize: "40px",
                            fontWeight: 500,
                            lineHeight: "40px",
                            position: "absolute",
                            top: "40px",
                            right: "80px"
                          }}
                        >
                          {this.props.percent}%
                        </div>
                      ) : (
                        <div
                          style={{
                            color: "rgb(16, 142, 233)",
                            fontSize: "40px",
                            fontWeight: 500,
                            lineHeight: "40px",
                            position: "absolute",
                            top: "40px",
                            right: "85px"
                          }}
                        >
                          {this.props.percent}%
                        </div>
                      )}
                    </div>
                    <Button
                      style={{
                        margin: "41px 0 18px",
                        background:
                          "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
                        boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
                        borderRadius: "16px",
                        border: "none",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "16px",
                        color: "rgba(255,255,255,1)",
                        width: 185,
                        height: 40
                      }}
                    >
                      {" "}
                      购&nbsp;&nbsp;买
                    </Button>

                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 400,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "28px"
                      }}
                    >
                      2018.09.11
                    </div>
                    <div
                      style={{
                        marginTop: 15,
                        marginBottom: 21,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "25px"
                      }}
                    >
                      截止日期
                    </div>
                    <div style={{ margin: "0 98px" }}>
                      <Divider
                        style={{
                          width: 70,
                          height: 1,
                          background: "rgba(216,216,216,1)"
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 21,
                        marginBottom: 15,
                        fontSize: 28,
                        fontWeight: 400,
                        color:
                          this.props.money == 0
                            ? "rgba(155,155,155,1)"
                            : this.props.money == "20,000"
                            ? "rgb(135, 208, 104)"
                            : "rgb(16, 142, 233)",
                        lineHeight: "28px"
                      }}
                    >
                      {this.props.money}
                    </div>
                    <div
                      style={{
                        marginBottom: 21,
                        fontSize: 18,
                        fontWeight: 500,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "25px"
                      }}
                    >
                      已募集资金 (糖分)
                    </div>
                    <div style={{ margin: "0 98px" }}>
                      <Divider
                        style={{
                          width: 70,
                          height: 1,
                          background: "rgba(216,216,216,1)"
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 21,
                        marginBottom: 15,
                        fontSize: 28,
                        fontWeight: 400,
                        color: "rgba(155,155,155,1)",
                        lineHeight: "28px"
                      }}
                    >
                      20,000
                    </div>
                    <div>目标资金 (糖分)</div>
                  </Col>
                </Row>
              </Col>
              <Col span={19}>
                <div
                  style={{
                    width: 980,
                    marginTop: "15px",
                    background: "rgba(255, 255, 255, 1)",
                    boxShadow: "0px 2px 15px 0px rgba(0,0,0,0.05)",
                    borderRadius: "16px"
                  }}
                >
                  <Tabs defaultActiveKey="1" size={'large'} tabBarStyle={{textAlign:'center', }}>
                    <TabPane tab="项目详情" key="1">
                    <ProjectDetail img={img11}/>
                    </TabPane>
                    <TabPane tab="动&nbsp;&nbsp;态" key="2">
                     <Timeline />
                    </TabPane>
                    <TabPane tab="问&nbsp;&nbsp;答" key="3">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
                </div>
              </Col>
              <Col span={5} />
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}
