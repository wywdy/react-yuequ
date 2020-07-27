import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Menu } from 'antd';
import {sliderList} from './../../config/sliderList'
//import { withRoute } from 'react-router-dom'
import './left_nav.less';
const { Item } = Menu;
class LeftNav extends Component {
   
    handleClick=(path)=>{
        console.log(path)
        this.props.history.push(path)
    }
    render() {
        return (
            <Menu className="silder">
                {
                    sliderList.map((item,index)=>{
                        return(
                                <Item className="silder_item" key={item.id} onClick={()=>{this.handleClick(item.path)}}>
                                    <span className={'iconfont ' + item.icon}></span>
                                    <span>{item.name}</span>
                                </Item>
                        ) 
                    })
                }
            </Menu>
        )
    }
}
export default withRouter(LeftNav)
