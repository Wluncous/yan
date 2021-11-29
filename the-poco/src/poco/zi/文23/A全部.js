
import React, {Component} from 'react';
import {Modal} from 'antd';
import { Link } from 'react-router-dom';

import './wen23.css';

import jq1 from './images/jq1.jpg' 
import jq2 from './images/jq2.jpg' 
import jq3 from './images/jq3.jpg' 
import p2312 from './images/p23-12.jpg'
import p13 from '../images/p13-1.jpg';
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
                <Link to="/p31/" >
                    <h3>摄影师私藏的8个拍摄道具：你也可以拍摄出杂志感大片</h3>
                    <span className='s1'>2021-05-14</span>
                    <span>
                        <img src={jq1} className='s2' alt=''/>
                    </span>
                </Link>
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
                <Link to="/p231/" >
                    <h3>海信、佳能强强联合，推进消费级8K影像解决方案！</h3>
                    <span className='s1'>2020-03-31</span>
                    <span>
                        <img src={p2312} className='s2' alt=''/>
                    </span>
                </Link>
                <Link to="/p13/" >
                    <h3>这些父母向宫崎骏致敬！竟然高度还原了《千与千寻》的经典场景！</h3>
                    <span className='s1'>2020-03-31</span>
                    <span>
                        <img src={p13} className='s2' alt=''/>
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
            </div>
        )
    };
}

export default App;