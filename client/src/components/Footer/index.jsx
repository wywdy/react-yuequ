import React, { Component } from 'react'
import './footer.less'
import logo from './../../assets/images/logo.png'
export default class Footer extends Component {
    render() {
        return (
            <div className="wrap">
                <img src={logo}></img>
                <div>
                    <a href="#">关于语雀</a>
                    <a href="#">使用帮助</a>
                    <a href="#">数据安全</a>
                    <a href="#">服务协议</a>
                    <a href="#">English</a>
                </div>
            </div>
        )
    }
}
