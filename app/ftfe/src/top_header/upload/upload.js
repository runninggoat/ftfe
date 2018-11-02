import React, { Component } from 'react'
import { Modal, Row, Col, Icon, Input, Button, Checkbox, Steps, Tag, Select, Tabs } from 'antd'
import { Player, BigPlayButton, ControlBar, VolumeMenuButton, LoadingSpinner } from 'video-react'
import 'video-react/dist/video-react.css'
import PicWall from '../picwall'
import MyIcon from '../../my_icon'

const Step = Steps.Step
const TextArea = Input.TextArea
const Option = Select.Option
const TabPane = Tabs.TabPane

export default class UploadPanel extends Component {
  state = {
    step: 1,
  }

  forwardStep () {
    this.setState((state) => {
      return { step: state.step + 1 }
    })
  }

  backwardStep () {
    this.setState((state) => {
      return { step: state.step - 1 }
    })
  }

  render () {
    let content = null
    switch (this.state.step) {
      case 1: {
        content = (
          <Col span={24}>
            <Step1 forwardStep={ this.forwardStep.bind(this) } />
          </Col>
        )
        break
      }
      case 2: {
        content = (
          <Col span={24}>
            <Step2
              forwardStep={ this.forwardStep.bind(this) }
              backwardStep={ this.backwardStep.bind(this) }
            />
          </Col>
        )
        break
      }
      case 3: {
        content = (
          <Col span={24}>
            <Step3
              forwardStep={ this.forwardStep.bind(this) }
              backwardStep={ this.backwardStep.bind(this) }
            />
          </Col>
        )
        break
      }
      case 4: {
        content = (
          <Col span={24}>
            <Step4
              backwardStep={ this.backwardStep.bind(this) }
            />
          </Col>
        )
        break
      }
      default: break
    }
    return (
      <Modal
        visible={ this.props.display }
        closable={ false }
        keyboard={ false }
        maskClosable={ false }
        footer={ null }
        width="1200px"
        style={{
          padding: 0,
          background: 'transparent',
        }}
        bodyStyle={{
          background: 'transparent',
          padding: 0,
        }}
        maskStyle={{
          background: 'linear-gradient(360deg,rgba(63,0,74,0.75) 0%,rgba(32,32,124,0.85) 100%)',
        }}
      >
        <div
          onClick={ () => this.props.onCloseUpload('Close') }
          style={{
            position: 'fixed',
            top: '31px',
            right: '41px',
            color: '#BCBCBC',
            fontSize: '32px',
          }}
        >
          <MyIcon type="icon-close" />
        </div>
        <Row type="flex" justify="center">
          {/* <Col span={20} style={{
            padding: '10px',
          }}>
            <Steps>
              <Step
                status={ this.state.step >= 1 ? 'finish' : 'wait' }
                title={<StepTitle text="基本信息" active={ this.state.step === 1 } />}
                icon={<Icon type="paper-clip" theme="outlined" />}
              />
              <Step
                status={ this.state.step >= 2 ? 'finish' : 'wait' }
                title={<StepTitle text="团队信息" active={ this.state.step === 2 } />}
                icon={<Icon type="team" theme="outlined" />}
              />
              <Step
                status={ this.state.step >= 3 ? 'finish' : 'wait' }
                title={<StepTitle text="补充信息" active={ this.state.step === 3 } />}
                icon={<Icon type="pay-circle" theme="outlined" />}
              />
              <Step
                status={ this.state.step >= 4 ? 'finish' : 'wait' }
                title={<StepTitle text="预览" active={ this.state.step === 4 } />}
                icon={<Icon type="eye" theme="outlined" />}
              />
            </Steps>
          </Col> */}
          <Col span={12}>
            <Row>
              <Col span={24}>
                <div style={{
                  width: '100%',
                  fontSize: '20px',
                  color: '#EEEEEE',
                  textAlign: 'center',
                }}>
                  { '选择文件类型' }
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: '10px' }}>
              <Col span={6}>
                <TypeButton icon="video-camera" text="视频" />
              </Col>
              <Col span={6}>
                <TypeButton icon="video-camera" text="音频" />
              </Col>
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: '10px' }}>
              <Col span={6}>
                <TypeButton icon="video-camera" text="文学" />
              </Col>
              <Col span={6}>
                <TypeButton icon="video-camera" text="其它(图片)" />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row>
          { content }
        </Row>
        <div style={{ clear: 'both' }}></div> */}
      </Modal>
    )
  }
}

class TypeButton extends Component {
  render () {
    return (
      <div style={{
        background: '#fff',
        height: '142px',
        width: '142px',
        borderRadius: '20px',
      }}>
        <div style={{
          width: '100%',
          textAlign: 'center',
        }}>
          {/* <MyIcon className="gradient-icon" type={ this.props.icon } style={{
            marginTop: '40px',
            fontSize: '37px',
          }} /> */}
          <Icon className="gradient-icon" type={ this.props.icon } theme="outlined" style={{
            marginTop: '40px',
            fontSize: '37px',
          }}/>
        </div>
        <div style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 400,
          color: '#FF1367',
          lineHeight: '22px',
          marginTop: '10px',
        }}>
          { this.props.text }
        </div>
      </div>
    )
  }
}

class StepTitle extends Component {
  render () {
    return (
      <div style={{
        color: this.props.active ? 'white' : '',
      }}>
        { this.props.text }
      </div>
    )
  }
}

class Step1 extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={24}>
            <div style={{
              marginLeft: '30px',
              color: 'white',
              fontSize: '30px',
              fontWeight: 700,
            }}>
              <Icon type="highlight" theme="outlined" />
              <span style={{
                marginLeft: '10px',
                textDecoration: 'underline',
              }}>{ '输入作品集名称' }</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <PicWall />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div>
              <Row style={{ padding: '0 30px', color: 'white', fontSize: '30px' }}>
                <Col span={1}>
                  <Icon type="smile" theme="outlined" />
                </Col>
                <Col span={1}>
                  <Icon type="user-add" theme="outlined" />
                </Col>
                <Col span={1}>
                  <Icon type="picture" theme="outlined" />
                </Col>
              </Row>
              <Row style={{ padding: '0 30px' }}>
                <Col span={24}>
                  <TextArea rows={4} placeholder="作品集介绍" />
                </Col>
              </Row>
              <Row type="flex" justify="end" style={{ padding: '0 30px', margin: '30px 0' }}>
                <Col span={4} style={{ textAlign: 'right' }}>
                  <Button
                    onClick={ () => this.props.forwardStep() }
                    type="primary"
                    style={{ width: '100%', color: 'black' }}
                  >下一步</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

class Contact extends Component {
  render () {
    return (
      <Row style={{ margin: '10px 0' }}>
        <Col span={4}>
          <div style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
            <img src={this.props.src} width="auto" height="100%" />
          </div>
        </Col>
        <Col span={19}>
          <div style={{ color: 'white', fontSize: '25px', fontWeight: 600 }}>{this.props.title}</div>
          <div>{this.props.follow}</div>
          <div>{this.props.subtitle}</div>
        </Col>
        <Col span={1}>
          <div style={{ color: 'black', marginTop: '20px', fontSize: '30px' }}>
            <Checkbox checked={ this.props.checked } />
          </div>
        </Col>
      </Row>
    )
  }
}

class Staff extends Component {
  render () {
    return (
      <Row style={{ margin: '10px 0' }}>
        <Col span={4}>
          <div style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
            <img src={this.props.src} width="auto" height="100%" />
          </div>
        </Col>
        <Col span={18}>
          <div style={{ color: 'white', fontSize: '25px', fontWeight: 600 }}>{this.props.title}</div>
          <div>{this.props.follow}</div>
          <div>{this.props.subtitle}</div>
        </Col>
        <Col span={2}>
          <div style={{ marginTop: '20px', fontSize: '20px', color: 'white' }}>
            <Icon type="close" theme="outlined" />
          </div>
        </Col>
      </Row>
    )
  }
}

class Step2 extends Component {
  render () {
    return (
      <div>
        <Row gutter={60} style={{ padding: '30px' }}>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <div style={{
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: 700,
                }}>{ '联系人列表' }</div>
              </Col>
              <Col span={24}>
                <div style={{
                  borderRadius: '10px',
                  background: '#515251',
                  padding: '10px',
                  marginTop: '10px',
                }}>
                  <Row>
                    <Col span={24}>
                      <Input prefix={<Icon type="search" theme="outlined" />} placeholder="搜索联系人" />
                    </Col>
                    <Col span={24}>
                      <Contact
                        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3543921072,1009527204&fm=26&gp=0.jpg"
                        title="导演老安"
                        follow="9,999 人关注"
                        subtitle="那然了屋民以當地跑英門年痛時"
                        checked={true}
                      />
                      <Contact
                        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1483221051,3902052946&fm=26&gp=0.jpg"
                        title="导演小刚"
                        follow="9,876 人关注"
                        subtitle="怎那升山影不智全小善思你"
                        checked={true}
                      />
                      <Contact
                        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2041009640,2080817026&fm=11&gp=0.jpg"
                        title="演员小冰"
                        follow="1,024 人关注"
                        subtitle="起證的人要夠任然灣寫兩方？"
                        checked={false}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <div style={{
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: 700,
                }}>{ '团队成员列表' }</div>
              </Col>
              <Col span={24}>
                <div style={{
                  borderRadius: '10px',
                  background: '#515251',
                  padding: '10px',
                  marginTop: '10px',
                }}>
                  <Row>
                    <Col span={24}>
                      <Staff
                        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3543921072,1009527204&fm=26&gp=0.jpg"
                        title="导演老安"
                        follow="9,999 人关注"
                        subtitle="那然了屋民以當地跑英門年痛時"
                      />
                      <Staff
                        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1483221051,3902052946&fm=26&gp=0.jpg"
                        title="导演小刚"
                        follow="9,876 人关注"
                        subtitle="怎那升山影不智全小善思你"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" justify="end" gutter={20} style={{ padding: '0 30px', margin: '30px 0' }}>
          <Col span={4} style={{ textAlign: 'right' }}>
            <Button
              onClick={ () => this.props.backwardStep() }
              type="default"
              style={{ width: '100%', color: 'white', background: 'transparent' }}
            >上一步</Button>
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            <Button
              onClick={ () => this.props.forwardStep() }
              type="primary"
              style={{ width: '100%', color: 'black' }}
            >下一步</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

class Step3 extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={24}>
            <div style={{
              marginLeft: '30px',
              color: 'white',
              fontSize: '25px',
              fontWeight: 700,
            }}>{ '分 类' }</div>
          </Col>
          <Col span={24}>
            <div style={{ padding: '20px 30px', marginBottom: '30px' }}>
              <Tag closable>动画</Tag>
              <Tag closable>电影</Tag>
              <Tag closable>剧本</Tag>
            </div>
          </Col>
          <Col span={24}>
            <div style={{
              marginLeft: '30px',
              color: 'white',
              fontSize: '25px',
              fontWeight: 700,
            }}>{ '价 格' }</div>
          </Col>
          <Col span={24}>
            <div style={{ padding: '20px 30px', marginBottom: '30px' }}>
              <Row type="flex" justify="start">
                <Col span={1} style={{ color: 'white', fontSize: '25px' }}>
                  <Icon type="plus-circle" theme="outlined" />
                </Col>
                <Col span={5}>
                  <Input defaultValue="￥30.00" />
                </Col>
                <Col span={1} style={{ color: 'white', fontSize: '25px', textAlign: 'right' }}>
                  <Icon type="minus-circle" theme="outlined" />
                </Col>
                <Col span={5} offset={1}>
                  <Select defaultValue="0" style={{ width: '100%' }}>
                    <Option value="0">每个视频</Option>
                    <Option value="1">整个合集</Option>
                  </Select>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={24}>
            <div style={{
              marginLeft: '30px',
              color: 'white',
              fontSize: '25px',
              fontWeight: 700,
            }}>{ '其它信息' }</div>
          </Col>
          <Col span={24}>
            <div style={{ padding: '20px 30px', marginBottom: '30px' }}>
              <TextArea rows={5} placeholder="其它信息" />
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="end" gutter={20} style={{ padding: '0 30px', margin: '30px 0' }}>
          <Col span={4} style={{ textAlign: 'right' }}>
            <Button
              onClick={ () => this.props.backwardStep() }
              type="default"
              style={{ width: '100%', color: 'white', background: 'transparent' }}
            >上一步</Button>
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            <Button
              onClick={ () => this.props.forwardStep() }
              type="primary"
              style={{ width: '100%', color: 'black' }}
            >下一步</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

class TabTitle extends Component {
  render () {
    return (
      <div style={{
        color: this.props.active ? '' : 'white',
      }}>
        { this.props.text }
      </div>
    )
  }
}

class StaffSlim extends Component {
  render () {
    return (
      <Row style={{ margin: '10px 0' }}>
        <Col span={8}>
          <div style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
            <img src={this.props.src} width="auto" height="100%" />
          </div>
        </Col>
        <Col span={16}>
          <div style={{ color: 'white', fontSize: '25px', fontWeight: 600 }}>{this.props.title}</div>
          <div>{this.props.follow}</div>
          <div style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '1',
          }}>{this.props.subtitle}</div>
        </Col>
      </Row>
    )
  }
}

class SideList extends Component {
  state = {
    activeKey: 1,
  }

  handleChange (k) {
    this.setState((state) => {
      return { activeKey: parseInt(k) }
    })
  }

  render () {
    return (
      <div>
        <Tabs
          onChange={ this.handleChange.bind(this) }
          defaultActiveKey="1"
          size="large"
          tabBarStyle={{ border: 0, textAlign:'center' }}
        >
          <TabPane tab={ <TabTitle text="播放队列" active={ this.state.activeKey === 1 } /> } key="1">
            <Row type="flex" justify="center">
              <Col span={24} style={{ marginBottom: '10px' }}>
                <img
                  alt="Side list"
                  src="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200"
                  width="100%"
                  height="auto"
                />
              </Col>
              <Col span={24} style={{ marginBottom: '10px' }}>
                <img
                  alt="Side list"
                  src="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200"
                  width="100%"
                  height="auto"
                />
              </Col>
              <Col span={24} style={{ marginBottom: '10px' }}>
                <img
                  alt="Side list"
                  src="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200"
                  width="100%"
                  height="auto"
                />
              </Col>
              <Col span={24} style={{ marginBottom: '10px' }}>
                <img
                  alt="Side list"
                  src="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200"
                  width="100%"
                  height="auto"
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab={ <TabTitle text="团队" active={ this.state.activeKey === 2 } /> } key="2">
            <Row type="flex" justify="center">
              <Col span={24}>
                <StaffSlim
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3543921072,1009527204&fm=26&gp=0.jpg"
                  title="导演老安"
                  follow="9,999 人关注"
                  subtitle="那然了屋民以當地跑英門年痛時"
                />
                <StaffSlim
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1483221051,3902052946&fm=26&gp=0.jpg"
                  title="导演小刚"
                  follow="9,876 人关注"
                  subtitle="怎那升山影不智全小善思你"
                />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

class Step4 extends Component {
  state = {
    h: 100,
  }

  componentDidMount () {
    this.setState((state) => {
      return { h: this.refs.parent.clientHeight }
    })
  }

  render () {
    return (
      <div ref="parent">
        <Row>
          <Col span={18} style={{ background: '#2D2E2D' }}>
            <Row>
              <Col span={24}>
                <div style={{
                  marginLeft: '30px',
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: 700,
                }}>{ '合集的标题' }</div>
              </Col>
              <Col span={24}>
                <div style={{
                  marginLeft: '30px',
                  color: 'grey',
                  fontSize: '25px',
                  fontWeight: 600,
                }}>{ '视频的标题' }</div>
              </Col>
              <Col span={24}>
                <div style={{ padding: '30px' }}>
                  <Player
                    poster="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200" preload='metadata'
                  >
                    <BigPlayButton position="center" />
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    <LoadingSpinner />
                    <ControlBar autoHide={true} >
                    <VolumeMenuButton vertical />
                    </ControlBar>
                  </Player>
                </div>
              </Col>
              <Col span={24}>
                <div style={{
                  padding: '30px',
                  wordBreak: 'break-all',
                  color: 'grey',
                  fontSize: '20px',
                }}>
                  <img
                    alt="Introduction"
                    src="https://pic.36krcnd.com/201804/21023539/7g8t9syx7cwv6lrm.png!1200"
                    width="300px"
                    height="auto"
                    style={{ float: 'left', marginRight: '20px' }}
                  />
                  { '作乎出這心我建。候元入聲腳來於處天一人，和希何可然提我結少型人方轉樹，清費家整，說助歌來小，由質明山。否家人環車的來。顯不需會位衣興天。為依看母形是地進理的燈試產應錢。學破記，加可後雖，備出感告也然北卻人廣古子。重思嚴如我場出樂到另康辦經。電代作了來綠國臺究一意次龍，或外遠他並發。至發和告日空辦個聲接經溫？一定關了任晚算小快；流歡財所畫。當行道際聽該口理多的指大我的養灣先來親飛失得條是業操大校般學選活格德學吃：常民說。的同通跑一久價人後己，怎那升山影不智全小善思你……何處全行一度；我管負樂視線晚紅稱生曾小城點實有下……起證的人要夠任然灣寫兩方？氣高或說且業久多愛市如上管部面不師如然吃：手政加人量機著心經！子特片麼制隊，院紀說是文友，登教告色的會特童常流，成戲人環：好全少義如。海我球……以中家始目百組紅實而打公他高可任類使型，醫長省。空類以重，日感因生藝人明全到濟天今告多，入微們復林病會這心低個可：藝經房知有育看根少四自成特華我可不劇原是五理？' }
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={6} style={{ background: '#515251', padding: '20px', height: this.state.h + 'px' }}>
            <Row>
              <Col span={24}>
                <Button
                  onClick={ () => this.props.backwardStep() }
                  type="default"
                  style={{ width: '100%', color: 'white', background: 'transparent' }}
                >上一步</Button>
              </Col>
              <Col span={24} style={{ marginTop: '20px' }}>
                <Button
                  type="primary"
                  style={{ width: '100%', color: 'black' }}
                >提 交</Button>
              </Col>
              <Col span={24} style={{ marginTop: '40px' }}>
                <SideList />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
