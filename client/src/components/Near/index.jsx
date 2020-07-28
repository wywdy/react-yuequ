import React, { Component } from 'react'
import {Table} from 'antd'
import './near.less'

const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      render: text => (
        <span>
            <b style={{color:"#74b9ff"}} className="iconfont icon-wendang"></b>
            <a style={{color:"black",marginLeft:"5px"}}>{text}</a>
        </span>
      )
    },
    {
      title: '浏览时间',
      dataIndex: 'time',
      align: 'right',
    },
  ];
  
const data = [
    {
        key: '1',
        name: 'John Brown',
        time: '2020-07-22'
    },
    {
        key: '2',
        name: 'Jim Green',
        time: '2020-07-26'
    },
];

export default class Near extends Component {
    render() {
        return (
            <div className="near">
                 <Table
                pagination={false} 
                columns={columns}
                dataSource={data}
                title={() => '最近浏览'}
                />
            </div>
        )
    }
}
