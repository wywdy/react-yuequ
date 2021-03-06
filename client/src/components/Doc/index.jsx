import React, { Component } from 'react'
import {Table , Tag ,Input , Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import './doc.less'
const prefix = (
    <SearchOutlined 
      style={{
        fontSize: 16
      }}
    />
  );
const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true,
      render: text => (
        <span>
            <b style={{color:"#74b9ff"}} className="iconfont icon-wendang"></b>
            <a style={{color:"black",marginLeft:"5px"}}>{text}</a>
        </span>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      filters: [
        {
          text: '所有',
          value: 'London',
        },
        {
          text: '未发布',
          value: 'New York',
        },
        {
          text: '分享中',
          value: 'York',
        },
        {
          text: '未更新',
          value: 'York2',
        },
      ],
      render:text=>(<Tag>{text}</Tag>)
    },
    {
        title: '归属',
        dataIndex: 'ascription'
    },
    {
        title: '最后编辑',
        dataIndex: 'last_edit',
        sorter: true
    },
    {
      align:"right",  
      render:()=>(
          <Button type="default">编辑</Button>
      )
    },
  ];
  
const data = [
    {
        key: '1',
        name: '张三',
        status: '未发布',
        ascription: '岱宗如何',
        last_edit: '2020-07-22',
    },
    {
        key: '2',
        name: '李四',
        status: '未发布',
        ascription: '岱宗如何',
        last_edit: '2020-07-22',
    },
    {
        key: '3',
        name: 'John Brown',
        status: '未发布',
        ascription: '岱宗如何',
        last_edit: '2020-07-22',
    },
   
];
export default class Doc extends Component {
    render() {
        return (
            <div className="doc">
                 <Table
                pagination={false} 
                columns={columns}
                dataSource={data}
                title={() => (
                    <div className="doc_header">
                        <div>我编辑的</div>
                        <div className="query">
                            <Input placeholder="搜索"
                              prefix={prefix}>
                            </Input>
                            <Button type="primary">新建</Button>   
                        </div>
                    </div>
                )}
                />
            </div>
        )
    }
}
