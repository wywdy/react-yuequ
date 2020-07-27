import React, { Component } from 'react'
import './header.less'
import { Row, Col , Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import logo from './../../assets/images/logo.png'
import add from './../../assets/images/add.svg'
import xx from './../../assets/images/xx.svg'
import ava from './../../assets/images/ava.png'

const prefix = (
    <AudioOutlined
      style={{
        fontSize: 16
      }}
    />
  );
    
const navList=['工作台','空间','发现','帮助','反馈']  
export default class Header extends Component {
    state={
        navList,
        currentIndex:0
    }
    changeIndex=(index)=>{
        this.setState({
            currentIndex:index    
        })
    }
    render() {
        const {currentIndex} = this.state
        return (
            <div className="header">
                <Row justify="center">
                    <Col span={2} className="header_left">
                       <div>
                           <img src={logo} alt=""/>
                       </div>
                    </Col>
                    <Col span={10} className="header_center">
                       <div className="query">
                            <Input placeholder="搜索"
                              prefix={prefix}>
                            </Input>     
                       </div>
                       <div className="nav">
                            {
                                this.state.navList.map((item,index)=>{
                                    return <span 
                                        className={currentIndex==index?'act':''} 
                                        key={index}
                                        onClick={()=>this.changeIndex(index)}>
                                            {item}
                                        </span>
                                })
                            }
                       </div>
                    </Col>
                    <Col span={3} className="header_right">
                       <div><img src={add}></img></div>
                       <div><img src={xx}></img></div>
                       <div><img src={xx}></img></div>
                       <div><img src={ava} style={{borderRadius:'50%'}}></img></div>
                    </Col>      
                </Row>
            </div>
        )
    }
}
