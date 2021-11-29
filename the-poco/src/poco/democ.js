
import React, {Component} from 'react';
import {Layout, Carousel,Image} from 'antd';
import { Link } from 'react-router-dom';

import './demo.css';
import Hea from './zi/zi-Hea/Hea'

import p1zmd1 from './image/p1zmd1.jpg';
import p1zmd2 from './image/p1zmd2.jpg';
import p1zmd3 from './image/p1zmd3.jpg';
import p1zmd4 from './image/p1zmd4.jpg';

import p3tj1 from './image/p3tj1.jpg';
import p3tj2 from './image/p3tj2.jpg';
import p3tj3 from './image/p3tj3.jpg';

import p5zp1 from './image/p5zp1.jpg';
import p5zp2 from './image/p5zp2.jpg';
import p5zp3 from './image/p5zp3.jpg';
import p5zp4 from './image/p5zp4.jpg';
import p5zp5 from './image/p5zp5.jpg';
import p5zp6 from './image/p5zp6.jpg';

import p6xz from './image/logo.png';


const { Header, Footer, Content } = Layout;




class App extends Component{
    render(){
        return(
            <Layout>
                {/* 头部↓ */}
                <Header>
                <div >
                    <div className='option'>
                        <Hea />{/*抽屉 */}
                    </div>
                    <div className='cc_title'>
                        POCO
                    </div>
                </div>
                </Header>
                {/* 内容↓ */}
                <div>
                <Content>
                    <div className='p1zmd'>
                        <Carousel> {/* autoplay */}
                        <div>
                            <Link to="/p11/">
                                <img src={p1zmd1} alt='封面图一'/>
                            </Link>
                        </div>
                        <div>
                            <Link to="/p12/">
                                <img src={p1zmd2} alt='封面图二'/>
                            </Link>
                        </div>
                        <div>
                            <Link to="/p13/">
                                <img src={p1zmd3} alt='封面图三'/>
                            </Link>
                        </div>
                        <div>
                            <Link to="/p14/">
                                <img src={p1zmd4} alt='封面图四'/>
                            </Link>
                        </div>
                        </Carousel>
                    </div>
                    <div>
                        <ul className="p2zj">
                            <li><Link to="/p21/">
                                <div className='zj1'></div>
                                <div>作品</div>
                                </Link></li>
                            <li><Link to="/p22/">
                                <div className='zj2'></div>
                                <div>图片</div>
                                </Link></li>
                            <li><Link to="/p23/">
                                <div className='zj3'></div>
                                <div>技巧</div>
                                </Link></li>
                        </ul>
                    </div>
                    <div className="p3tj">
                        <div className='title'>热门推荐</div>
                        <div>
                            <ul className='list'>
                                <Link to="/p31/">
                                    <li>
                                        <div>
                                            <img src={p3tj1} alt='' style={{width: '70px',height: '70px',marginBottom:'7px'}}/>
                                        </div>
                                        <div className='rbox'>
                                            摄影师私藏的8个拍摄道具：你也可以拍摄出杂志感大片
                                        </div>
                                        </li>
                                </Link>
                                <Link to="/p32/">
                                    <li>
                                        <div>
                                            <img src={p3tj2} alt='' style={{width: '70px',height: '70px',marginBottom:'7px'}}/>
                                        </div>
                                        <div className='rbox'>
                                            #本叔PS教程# | 摄影后期必备调色技巧之色相色谱条技法
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/p33/">
                                    <li>
                                        <div>
                                            <img src={p3tj3} alt='' style={{width: '70px',height: '70px',marginBottom:'7px'}}/>
                                        </div>
                                        <div className='rbox'>
                                            #后期教程#如何给客片修出杂志感照片？
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className='p4rm'>
                        <div className='title'>热门摄影师</div>
                    </div>
                    <div className='p5zp'>
                        <div className='title' style={{marginTop:'16px'}}>勋章作品</div>
                        <ul className='list'>
                            <Image.PreviewGroup>
                                    <Image src={p5zp1} alt='' className='box'/>
                                    <Image src={p5zp2} alt='' className='box'/>
                                    <Image src={p5zp3} alt='' className='box'/>
                                    <Image src={p5zp4} alt='' className='box'/>
                                    <Image src={p5zp5} alt='' className='box'/>
                                    <Image src={p5zp6} alt='' className='box'/>
                            </Image.PreviewGroup>
                        </ul>
                    </div>
                    <div className='p6xz'>
                        <Link to="/xzy/">
                            <div className='app'>打开“POCO摄影”APP</div>
                        </Link>
                    </div>
                </Content>
                </div>
                {/* 底部↓ */}
                <Footer>
                    <div className='title' style={{color:'#444'}}>
                        -图的就是好玩-
                    </div>
                    <div className='logo'>
                        <img src={p6xz} alt=''/>
                    </div>
                </Footer>
            </Layout>
        )
    };
}

export default App;