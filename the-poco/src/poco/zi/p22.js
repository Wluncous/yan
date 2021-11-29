
import React, {Component} from 'react';
import {Layout,Image,Tabs,Modal} from 'antd';

import './zi-css/zi.css';

import Hea22 from './zi-Hea/Hea22图片'
import HeaF from './zi-Hea/Hea21分类'

import p221 from './images/p22-1.jpg';
import p222 from './images/p22-2.jpg';
import p223 from './images/p22-3.jpg';
import p224 from './images/p22-4.jpg';
import p225 from './images/p22-5.jpg';
import p226 from './images/p22-6.jpg';
import p227 from './images/p22-7.jpg';
import p228 from './images/p22-8.jpg';
import p229 from './images/p22-9.jpg';
import p2210 from './images/p22-10.jpg';
import p2211 from './images/p22-11.jpg';
import p2212 from './images/p22-12.jpg';
import p2213 from './images/p22-13.jpg';
import p2214 from './images/p22-14.jpg';
import p2215 from './images/p22-15.jpg';

import Z1 from'./images/p22-z1.jpg'
import Z2 from'./images/p22-z2.jpg'
import Z3 from'./images/p22-z3.jpg'
import Z4 from'./images/p22-z4.jpg'
import Z5 from'./images/p22-z5.jpg'
const { Header, Content } = Layout;
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
function error() {
    Modal.error({
      title: '系统维护中，该功能暂不支持！'
    });
  }

class App extends Component{

    render(){
        return(
            <Layout>
                {/* 头部↓ */}
                <Header>
                <div >
                    <div className='option'>
                        <Hea22 />{/*抽屉 */}
                    </div>
                    <div className='cc_title'>
                        图片广场
                    </div>
                    <div>
                        <HeaF/>
                    </div>
                </div>
                </Header>
                {/* 内容↓ */}
                <div>
                <Content>
                    {/* 项目栏 */}
                    <Tabs defaultActiveKey="1" onChange={callback} centered>
                        <TabPane tab="热门" key="1">
                        <ul className='p22img-ul'>
                            <Image.PreviewGroup>
                                <Image src={p221} alt='' className='p22img'/>
                                <Image src={p222} alt='' className='p22img'/>
                                <Image src={p223} alt='' className='p22img'/>
                                <Image src={p224} alt='' className='p22img'/>
                                <Image src={p225} alt='' className='p22img'/>
                                <Image src={p226} alt='' className='p22img'/>
                                <Image src={p227} alt='' className='p22img'/>
                                <Image src={p228} alt='' className='p22img'/>
                                <Image src={p229} alt='' className='p22img'/>
                                <Image src={p2210} alt='' className='p22img'/>
                                <Image src={p2211} alt='' className='p22img'/>
                                <Image src={p2212} alt='' className='p22img'/>
                                <Image src={p2213} alt='' className='p22img'/>
                                <Image src={p2214} alt='' className='p22img'/>
                                <Image src={p2215} alt='' className='p22img'/>
                            </Image.PreviewGroup>
                        </ul>
                        </TabPane>
                        <TabPane tab="专辑" key="2">
                            <div className='vw-list'>
                                <a className='vw-park' onClick={error}>
                                    <span>
                                        <span>
                                            <img src={Z1}  className='vw-image' alt=''/>
                                        </span>
                                        <span className='cc-text'>
                                            <dl>
                                                <dt>一周图片精选专辑</dt>
                                                <dd>POCO摄影社区</dd>
                                            </dl>
                                        </span>
                                    </span>
                                </a>
                                
                                <a className='vw-park' onClick={error}>
                                    <span>
                                        <span>
                                            <img src={Z2}  className='vw-image' alt=''/>
                                        </span>
                                        <span className='cc-text'>
                                            <dl>
                                                <dt>手机摄影作品精选</dt>
                                                <dd>POCO摄影社区</dd>
                                            </dl>
                                        </span>
                                    </span>
                                </a>
                                <a className='vw-park' onClick={error}>
                                    <span>
                                        <span>
                                            <img src={Z3}  className='vw-image' alt=''/>
                                        </span>
                                        <span className='cc-text'>
                                            <dl>
                                                <dt>航拍摄影精选专辑</dt>
                                                <dd>POCO摄影社区</dd>
                                            </dl>
                                        </span>
                                    </span>
                                </a>
                                <a className='vw-park' onClick={error}>
                                    <span>
                                        <span>
                                            <img src={Z4}  className='vw-image' alt=''/>
                                        </span>
                                        <span className='cc-text'>
                                            <dl>
                                                <dt>都市</dt>
                                                <dd>春天的风</dd>
                                            </dl>
                                        </span>
                                    </span>
                                </a>
                                <a className='vw-park' onClick={error}>
                                    <span>
                                        <span>
                                            <img src={Z5}  className='vw-image' alt=''/>
                                        </span>
                                        <span className='cc-text'>
                                            <dl>
                                                <dt>城市</dt>
                                                <dd>侠骨柔情</dd>
                                            </dl>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </TabPane>
                    </Tabs>
                    
                </Content>
                </div>
            </Layout>
        )
    };
}

export default App;



