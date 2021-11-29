
import React, {Component} from 'react';
import {Button, Layout} from 'antd';

import './zi-css/p11.css';
import Hea11 from './zi-Hea/Hea11认证'

import DL from './p11登录A';
import p1 from './images/p11-1.png'

const { Header, Footer, Content } = Layout;




class App extends Component{
    render(){
        return(
            <Layout>
                {/* 头部↓ */}
                <Header>
                <div >
                    <div className='option'>
                        <Hea11 />{/*抽屉 */}
                    </div>
                    <div className='cc_title'>
                        认证中心
                    </div>
                </div>
                </Header>
                {/* 内容↓ */}
                <div>
                <Content>
                    <div><img src={p1} alt=''/></div>
                    <div className='vnav-container1'>
                        <div className='box-container'>
                            <div className='nav-container'>
                                <div className='list-container'>
                                    <div className='img-container'>
                                        <div className='p11-2'></div>
                                    </div>
                                    <div className='brand'>
                                        <p className='p11-p'>超级红人</p>
                                        <span className='p11-span'>摄影圈中实力超群的流量摄影大V认证</span>
                                    </div>
                                </div>
                                <div className='vnav-container2'><Button className='status'>仅官方邀请</Button></div>
                            </div>
                        </div>
                        <div className='box-container'>
                            <div className='nav-container'>
                                <div className='list-container'>
                                    <div className='img-container'>
                                        <div className='p11-3'></div>
                                    </div>
                                    <div className='brand'>
                                        <p className='p11-p'>摄影红人认证</p>
                                        <span className='p11-span'>各类实力派个人摄影师认证</span>
                                    </div>
                                </div>
                                <div className='vnav-container2'><div className='status userf1'><DL/></div></div>
                            </div>
                        </div>
                        <div className='box-container'>
                            <div className='nav-container'>
                                <div className='list-container'>
                                    <div className='img-container'>
                                        <div className='p11-4'></div>
                                    </div>
                                    <div className='brand'>
                                        <p className='p11-p'>摄影机构认证</p>
                                        <span className='p11-span'>摄影行业内各类相关服务机构、企业、媒体等</span>
                                    </div>
                                </div>
                                <div className='vnav-container2'><div className='status userf2'><DL/></div></div>
                            </div>
                        </div>
                    </div>
                    <div className='ver-benefit'>
                        <div className='ben-container'>
                            <div className='sec-title'>
                                认证优势
                            </div>
                            <div className='benli-container'>
                                <div className='ben-lists'>
                                    <div className='p11-51'></div>
                                    <div className='ben-title'>
                                        认证标识
                                    </div>
                                </div>
                                <div className='ben-lists'>
                                    <div className='p11-52'></div>
                                    <div className='ben-title'>
                                        更多曝光
                                    </div>
                                </div>
                                <div className='ben-lists'>
                                    <div className='p11-53'></div>
                                    <div className='ben-title'>
                                        专属服务
                                    </div>
                                </div>
                                <div className='ben-lists'>
                                    <div className='p11-54'></div>
                                    <div className='ben-title'>
                                        专属特权
                                    </div>
                                </div>
                                <div className='ben-lists'>
                                    <div className='p11-55'></div>
                                    <div className='ben-title'>
                                        作品变现
                                    </div>
                                </div>
                                <div className='ben-lists'>
                                    <div className='p11-56'></div>
                                    <div className='ben-title'>
                                        视频秘笈
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Content>
                </div>
            </Layout>
        )
    };
}

export default App;