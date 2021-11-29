
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
                    <h3>#本叔PS教程# | 摄影后期必备调色技巧之色相色谱条技法</h3>
                    <p><span>编辑：请叫我Crystal | 作者：本叔就是本切鸣</span><br/>
                    <span>2020-03-31 | 12538000 浏览</span></p>
                    <div style={{textAlign:'center'}}>
                    <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=j09424vmxk0" allowFullScreen="true">
                    </iframe>
                    <p><span>今天来教大家学习的是摄影后期技巧之色相色谱条技法</span><br/>
                        <span>牛油果色是很多小伙伴的个人“认证色”</span><br/>
                        <span>那么怎样从色谱条里调出来呢？</span><br/>
                        <span>今天这堂课大家就要认真学习咯~</span><br/>
                        <span>希望小伙伴们有所收获哈</span>
                    </p><br/>
                        <div><br/>
                            <span>黑科技修图引领者  人民邮电出版社签约作者</span><br/>
                            <span>知名摄影博主  上海名人汇成员</span><br/>
                            <span>微博签约自媒体</span><br/>
                            <span>微博：@本叔就是本切鸣</span><br/>
                            <span>微信公众号：本叔摄影后期课堂</span></div>
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

