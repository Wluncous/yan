
import React, {Component} from 'react';
import {Layout} from 'antd';
import '../zi-css/p13.css';
import HeaT from '../zi-Hea/Hea0通'


import DL1 from '../登录-收藏';
import DL2 from '../登录-写评论';
import DL3 from '../登录-注册';


const { Header,Content } = Layout;




class App extends Component{
    render(){
        return(
            <Layout>
                {/* 头部↓ */}
                <Header>
                <div >
                    <div className='option'>
                        <HeaT />{/*抽屉 */}
                    </div>
                    <div className='cc_title'>
                        POCO
                    </div>
                </div>
                </Header>
                {/* 内容↓ */}
                <div>
                <Content className='p13z'>
                    <h3>如何给客片修出杂志感照片</h3>
                    <p><span>编辑：追风的晓晓 | 作者：岑宝蓝</span><br/>
                    <span>2020-03-27 | 18438861 浏览</span></p>
                    <div style={{textAlign:'center'}}>
                    <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=y3077sbci0w" allowFullScreen="true">
                    </iframe>
                    <div><br/>
                        <span>摄影：岑宝蓝</span><br/>
                        <span>微博：@岑宝蓝</span><br/>
                        <span>微信公众号：岑宝蓝</span></div>
                    </div>
                    <div className='recomend'>
                        <DL1/>
                        
                    </div>
                    <div className='title'></div>
                    <div className='comment'>
                        <div className='write'>
                            <DL2/>
                        </div>
                        <h5>评论</h5>
                    </div>
                    <div >
                        <p className='cc-list'>请<DL3/>后查看</p>
                    </div>
                </Content>
                </div>
            </Layout>
        )
    };
}

export default App;

