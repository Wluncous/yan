
import React, {Component} from 'react';
import {Modal} from 'antd';
import { Link } from 'react-router-dom';

import './wen23.css';

import jq1 from './images/jq1.jpg' 
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
                <Link to="/p31/" >
                    <h3>摄影师私藏的8个拍摄道具：你也可以拍摄出杂志感大片</h3>
                    <span className='s1'>2021-05-14</span>
                    <span>
                        <img src={jq1} className='s2' alt=''/>
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