
import React, {Component} from 'react';
import {Modal} from 'antd';


import './wen23.css';

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