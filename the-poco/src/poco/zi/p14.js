
import React, {Component} from 'react';
import {Layout} from 'antd';
import {PhoneFilled} from '@ant-design/icons';
import './zi-css/p13.css';
import HeaT from './zi-Hea/Hea0通'

import p1a from './images/p14-1a.png';
import p1b from './images/p14-1b.png';
import p2a from './images/p14-2a.png';
import p2b from './images/p14-2b.png';
import p3a from './images/p14-3a.png';
import p3b from './images/p14-3b.png';

import DL1 from './登录-收藏';
import DL2 from './登录-写评论';
import DL3 from './登录-注册';


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
                    <h3>摄影旅游爱好者免费场地福利</h3>
                    <p><span>编辑：阿嘴儿</span><br/>
                    <span>2018-12-04 | 404478 浏览</span></p>
                    <p>POCO上有众多的摄影、旅游、美食等影像生活的达人和爱好者。 POCO一直以来给大家提供了一个网络的分享交流平台，
                        十多年来， POCOer们因为POCO认识彼此，很多还成为了好友知己。</p>
                    <p>近期， POCO会陆续提供一下线下分享交流的空间场所， 给众多POCOers们平时面对面的交流和分享所用。</p>
                    <p>今天第一个推出的合作空间就是位于海珠湖旁的唯品同创汇园区的“爱好研究所”。</p>
                    <div>
                        <img src={p1a} alt=''/>
                        <img src={p1b} alt=''/>
                    </div><br/>

                    <div className='text-bac'>
                        <p style={{color:'#fff',fontWeight: 'bold'}}>场地特色</p>
                    </div><br/>
                    <p>门店色调以性冷淡风为主，黑、白、灰，内部家具用了美式乡村风格，特意挑选不经打磨加工的榆木原木台凳。
                        时尚简约的环境、具有层次感的空间、搭配超大落地玻璃窗的独栋两层LOFT大场地。</p>
                    <div>
                        <img src={p2a} alt=''/>
                        <img src={p2b} alt=''/>
                    </div><br/>

                    <div className='text-bac'>
                        <p style={{color:'#fff',fontWeight: 'bold'}}>会员福利</p>
                    </div><br/>
                    <div>
                        <p>·只要你是热爱摄影、旅游的POCO会员，你可以申请免费在爱好研究所组织你的看片会、分享会、旅游前的聚会。
                        爱好研究所会提供投影等设备支持。</p>
                        <p>·如果你是POCO名人、红人、POCO首页推荐作品作者，均可以申请在POCO进行免费的摄影展览。</p>
                        <p>·如果你是旅游爱好者，拍了大量的旅游风光美图或者特别的旅游线路游记， 也可以申请在这里举行你的旅游分享会和看片会、视频播放活动等。</p>
                    </div><br/>
                    <p>现在正在举办POCO总版主黄牌老师的“风景在路上”影展。</p>
                    <div>
                        <img src={p3a} alt=''/>
                        <img src={p3b} alt=''/>
                    </div><br/>
                    <div className='text-bac'>
                        <p style={{color:'#fff',fontWeight: 'bold'}}>联系方式</p>
                    </div><br/>
                    <div style={{color: '#666',textAlign:'center'}}>
                        <p>有意者可咨询联系</p>
                        <PhoneFilled />
                        <p>0xx-xxxx****</p>
                        <p>or</p>
                        <p>微信号</p>
                        <p>**xx**</p>
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



