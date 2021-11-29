
import React, {Component} from 'react';
import {Layout, Image,Tabs} from 'antd';

import './zi-css/zi.css';

import Hea21 from './zi-Hea/Hea21作品'
import HeaF from './zi-Hea/Hea21分类'

import p211 from './images/p21-1.jpg';
import p212 from './images/p21-2.jpg';
import p213 from './images/p21-3.jpg';
import p214 from './images/p21-4.jpg';
import p215 from './images/p21-5.jpg';
import p216 from './images/p21-6.jpg';
import p217 from './images/p21-7.jpg';
import p218 from './images/p21-8.jpg';
import p219 from './images/p21-9.jpg';
import p2110 from './images/p21-10.jpg';

const { Header, Content } = Layout;


const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }

class App extends Component{

    render(){
        return(
            <Layout>
                {/* 头部↓ */}
                <Header>
                <div >
                    <div className='option'>
                        <Hea21 />{/*抽屉 */}
                    </div>
                    <div className='cc_title'>
                        作品
                    </div>
                    <div>
                        <HeaF/>
                    </div>
                </div>
                </Header>
                {/* 内容↓ */}
                <div>
                <Content>
                    <Tabs defaultActiveKey="1" onChange={callback} centered>
                        <TabPane tab="推荐" key="1">
                            <ul className='p21img-ul'>
                                <Image.PreviewGroup>
                                    <Image src={p211} alt='' className='p21img'/>
                                    <Image src={p212} alt='' className='p21img'/>
                                    <Image src={p213} alt='' className='p21img'/>
                                    <Image src={p214} alt='' className='p21img'/>
                                    <Image src={p215} alt='' className='p21img'/>
                                    <Image src={p216} alt='' className='p21img'/>
                                    <Image src={p217} alt='' className='p21img'/>
                                    <Image src={p218} alt='' className='p21img'/>
                                    <Image src={p219} alt='' className='p21img'/>
                                    <Image src={p2110} alt='' className='p21img'/>
                                </Image.PreviewGroup>
                            </ul>
                        </TabPane>
                        <TabPane tab="人气" key="2">
                            <div style={{textAlign:'center',padding:'25px 0',color:'#666',
                                fontSize:'15px'}}>
                                <p>暂无相关内容</p>
                            </div>
                        </TabPane>
                        <TabPane tab="最新" key="3">
                            <ul className='p21img-ul'>
                                <Image.PreviewGroup>
                                    <Image src={p218} alt='' className='p21img'/>
                                    <Image src={p219} alt='' className='p21img'/>
                                    <Image src={p211} alt='' className='p21img'/>
                                    <Image src={p215} alt='' className='p21img'/>
                                    <Image src={p216} alt='' className='p21img'/>
                                    <Image src={p212} alt='' className='p21img'/>
                                    <Image src={p214} alt='' className='p21img'/>
                                    <Image src={p217} alt='' className='p21img'/>
                                    <Image src={p2110} alt='' className='p21img'/>
                                    <Image src={p213} alt='' className='p21img'/>
                                </Image.PreviewGroup>
                            </ul>
                        </TabPane>
                    </Tabs>
                    {/* 项目栏 */}
                </Content>
                </div>
            </Layout>
        )
    };
}

export default App;



