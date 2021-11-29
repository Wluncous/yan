
import React, {Component} from 'react';
import {Modal} from 'antd';
import { Link } from 'react-router-dom';

import './wen23.css';

import p2312 from './images/p23-12.jpg'
import p14 from '../images/p14-1a.png';
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
                <Link to="/p231/" >
                    <h3>海信、佳能强强联合，推进消费级8K影像解决方案！</h3>
                    <span className='s1'>2020-03-31</span>
                    <span>
                        <img src={p2312} className='s2' alt=''/>
                    </span>
                </Link>
                <Link to="/p14/" >
                    <h3>摄影旅游爱好者免费场地福利</h3>
                    <span className='s1'>2020-03-31</span>
                    <span>
                        <img src={p14} className='s2' alt=''/>
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