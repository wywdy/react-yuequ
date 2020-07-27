import React, { Component } from 'react';
import { Menu } from 'antd';
import './left_nav.less';
import {sliderList} from './../../config/sliderList'
const { SubMenu } = Menu;
export default class LeftNav extends Component {
    render() {
        return (
            <Menu className="silder">
                {
                    sliderList.map((item,index)=>{
                        return  <SubMenu key={item.id} title={ <span>{item.name}</span> }></SubMenu>
                    })
                }
              
            </Menu>
        )
    }
}
