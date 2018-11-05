import React from 'react';

import { Table } from 'antd';

export default () => (
  
  <div style={{borderTop:'1px solid rgba(216,216,216,1)'}}>
    <Table 
    dataSource={dataSource} 
    columns={columns}
    showHeader={false}
    align='center'
    pagination={false}
     />
  </div>
  )

const dataSource = [{
  key: '1',
  name: '作者',
  address: '导演老安'
}, {
  key: '2',
  name: '编号',
  address: 'asdasdasdasdasdasdasdasdasdasdasda'
}, {
  key: '3',
  name: 'ID',
  address: 'asdasdasdasdasdasdasdasdasdasdasda'
}, {
  key: '4',
  name: '时间戳',
  address: 'asdasdasdasdasdasdasdasdasdasdasda'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];