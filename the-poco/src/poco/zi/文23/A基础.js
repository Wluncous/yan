
import React, {Component} from 'react';
import {Modal} from 'antd';
import { Link } from 'react-router-dom';

import './wen23.css';

import p13 from '../images/p13-1.jpg';
import x from './images/x.png'

function error() {
    Modal.error({
      title: '该内容暂不支持查看！'
    });
  }


class App extends Component{
    render(){
        return(
            <div className='jiqiao'>
                <Link to="/p13/" >
                    <h3>这些父母向宫崎骏致敬！竟然高度还原了《千与千寻》的经典场景！</h3>
                    <span className='s1'>2020-03-31</span>
                    <span>
                        <img src={p13} className='s2' alt=''/>
                    </span>
                </Link>
                <div onClick={error} >
                    <h3>预置框架 内容待添加</h3>
                    <span className='s1'>1940-01-01</span>
                    <span>
                        <img src={x} className='s2' alt=''/>
                    </span>
                </div>
                <div onClick={error} >
                    <h3>预置框架 内容待添加</h3>
                    <span className='s1'>1940-01-01</span>
                    <span>
                        <img src={x} className='s2' alt=''/>
                    </span>
                </div>
                <div onClick={error} >
                    <h3>预置框架 内容待添加</h3>
                    <span className='s1'>1940-01-01</span>
                    <span>
                        <img src={x} className='s2' alt=''/>
                    </span>
                </div>
            </div>
        )
    };
}

export default App;