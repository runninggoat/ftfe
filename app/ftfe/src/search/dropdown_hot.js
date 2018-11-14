import React from 'react'
import { Menu, Dropdown, Icon } from 'antd';
import MyIcon from '../my_icon'

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="">从高到低</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="">从低到高</a>
    </Menu.Item>
  </Menu>
);
export default() =>(
<div>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="">
     <MyIcon type='icon-round' /> 热度 <Icon type="down" />
    </a>
  </Dropdown>
</div>
)