import React, { Component } from 'react'
import {Table , Input , Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import './../Doc/doc.less'
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
        title: '归属',
        dataIndex: 'ascription'
    },
    {
        title: '编辑时间',
        dataIndex: 'edit_time',
        sorter: true
    },
    {
      align:"right",  
      render:()=>(
          <Button type="default">管理</Button>
      )
    },
  ];
  
const data = [
    {
        key: '1',
        name: '张三',
        ascription: '岱宗如何',
        edit_time: '2020-06-22'
    },
    {
        key: '2',
        name: '李四',
        ascription: '岱宗如何',
        edit_time: '2020-06-22'
    },
    {
        key: '3',
        name: 'John Brown',
        ascription: '岱宗如何',
        edit_time: '2020-07-12',
    },
   
];
export default class Know extends Component {
    render() {
        return (
            <div className="know">
                <Table
                pagination={false} 
                columns={columns}
                dataSource={data}
                title={() => (
                    <div className="doc_header">
                        <div>知识库</div>
                        <div className="query">
                            <Input placeholder="搜索"
                              prefix={prefix}>
                            </Input>
                            <Button type="primary">新建知识库</Button>   
                        </div>
                    </div>
                )}
                />
            </div>
        )
    }
}
