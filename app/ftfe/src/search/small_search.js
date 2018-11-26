import React, { Component } from "react";
import DropdownType from "./dropdown_type";
import { Row, Col } from "antd";
import MyIcon from "../my_icon";
import { Input } from "antd";
import { Tabs, Button } from "antd";

export default class SmallSearch extends Component {
  render() {
    return (
      <div style={{ height: 60 }}>
        <Row>
          <Col offset={2} span={2}>
            <div style={{ margin: "15px 0" }}>
              <DropdownType />
            </div>
          </Col>
          <Col span={7}>
            <div style={{ margin: "3% 0 0" }}>
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
          <Col span={2}>
            <Button
              style={{
                margin: "10% 30px",
                borderRadius: "18px",
                background:
                  "linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)",
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: 16,
                height: "36px",
                lineHeight: "16px",
                border: 0
              }}
            >
              搜索
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

// import React,{Component} from 'react'
// import { Row, Col} from 'antd'
// import { Select } from 'antd';

// import MyIcon from '../my_icon'
// import { Input } from 'antd';
// import { Tabs,Button } from 'antd';

// const Option = Select.Option;
// export default class SmallSearch extends Component {

//   render () {
//     return (
//         <div style={{
//         background:'#F8F8F8',
//         boxShadow:'0px 2px 31px 0px rgba(205,205,205,0.27)}',}}>
//         <Row>
//             <Col offset={2} span={2} >
//                 <Select
//                 defaultValue="作品"
//                 style={{ width: 128,height:60 }}
//                 size={'large'}
//                 dropdownStyle={{
//                 fontSize:'14px',
//                 fontWeight:400,
//                 color:'rgba(74,74,74,1)',
//                 lineHeight:'32px',}}
//                 >
//                     <Option value="作品">作&nbsp;&nbsp;品</Option>
//                     <Option value="众筹">众&nbsp;&nbsp;筹</Option>
//                     <Option value="用户">用&nbsp;&nbsp;户</Option>
//                     <Option value="剧组服务">剧组服务</Option>
//                 </Select>
//             </Col>
// <Col span ={7}>
//     <div style={{margin:"3% 0 0",}}>
//         <Input
//         placeholder="输入关键字搜索作品、众筹项目或用户"
//         prefix={<MyIcon type="icon-search" style={{fontSize:20, color: 'rgba(0,0,0,.25)' }} />}
//         />
//     </div>
// </Col>
// <Col span ={2}>
//     <Button style={{
//     margin:"10% 30px",
//     borderRadius:'18px',
//     background:'linear-gradient(90deg,rgba(255,132,135,1) 0%,rgba(255,19,103,1) 100%)',
//     color:'#FFFFFF',
//     fontWeight:400,
//     fontSize:16,
//     height:'36px',
//     lineHeight:'16px',
//     }}>
//       搜索
//     </Button>
// </Col>
//         </Row>
//     </div>
//     )
//   }
// }
