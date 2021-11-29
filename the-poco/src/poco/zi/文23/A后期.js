
import React, {Component} from 'react';
import {Modal} from 'antd';
import { Link } from 'react-router-dom';

import './wen23.css';

import x from './images/x.png'
import jq2 from './images/jq2.jpg' 
import jq3 from './images/jq3.jpg' 

function error() {
    Modal.error({
      title: '该内容暂不支持查看！'
    });
  }

class App extends Component{
    render(){
        return(

            <div className='jiqiao'>
                <Link to="/p32/" >
                    <h3>如何给客片修出杂志感照片</h3>
                    <span className='s1'>2020-03-27</span>
                    <span>
                        <img src={jq2} className='s2' alt=''/>
                    </span>
                </Link>
                <Link to="/p33/" >
                    <h3>#本叔PS教程# | 摄影后期必备调色技巧之色相色谱条技法</h3>
                    <span className='s1'>2020-03-31</span>
                    <span>
                        <img src={jq3} className='s2' alt=''/>
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