import React, { Component,createRef } from 'react'
import './header.less'
import { Row, Col , Input, Popconfirm} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logo from './../../assets/images/logo.png'
import add from './../../assets/images/add.svg'
import xx from './../../assets/images/xx.svg'
import zj from './../../assets/images/zj.svg'
import ava from './../../assets/images/ava.png'

const prefix = (
    <SearchOutlined 
      style={{
        fontSize: 16
      }}
    />
  );
    
const navList=['工作台','空间','发现','帮助','反馈']  
export default class Header extends Component {
    constructor(){
        super()
        this.state={
            navList,
            currentIndex:0,
            visible:false
        }
        this.update=createRef()
    }
    changeIndex=(index)=>{
        this.setState({
            currentIndex:index    
        })
    }
    componentDidMount(){
       const ele=this.update.current
       const that = this
       ele.onmouseover=function(){
           that.setState({
               visible:true
           })
       }
       ele.onmousedown=function(){
        that.setState({
            visible:false
        })
       }
    }
    render() {
        const {currentIndex} = this.state
        return (
            <div className="header">
                <Row justify="center">
                    <Col span={4} className="header_left">
                       <div>
                           <img src={logo} alt=""/>
                       </div>
                    </Col>
                    <Col span={9} className="header_center">
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
                    <Col span={4} className="header_right">
                       <div ref={this.update}>
                        <Popconfirm
                            placement="bottomRight"
                        >
                            <img src={add}></img>
                        </Popconfirm>   
                        </div>
                        <div><img src={zj}></img></div>
                        <div><img src={xx}></img></div>
                        <div><img src={ava} style={{borderRadius:'50%'}}></img></div>
                    </Col>      
                </Row>
               
            </div>
        )
    }
}
