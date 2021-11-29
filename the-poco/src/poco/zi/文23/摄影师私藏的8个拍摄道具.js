
import React, {Component} from 'react';
import {Layout} from 'antd';
import '../zi-css/p13.css';
import HeaT from '../zi-Hea/Hea0通'

import p1 from './images/sys8-1.jpg';
import p2 from './images/sys8-2.jpg';
import p3 from './images/sys8-3.jpg';
import p4 from './images/sys8-4.jpg';
import p5 from './images/sys8-5.jpg';
import p6 from './images/sys8-6.jpg';
import p7 from './images/sys8-7.jpg';
import p8 from './images/sys8-8.jpg';

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
                    <h3>摄影师私藏的8个拍摄道具：你也可以拍摄出杂志感大片</h3>
                    <p><span>编辑：请叫我Crystal | 作者：岑宝蓝</span><br/>
                    <span>2020-04-09 | 15812701 浏览</span></p>
                    <div style={{textAlign:'center'}}>
                        <p><span>今天给大家带来的是岑宝蓝摄影师推荐的私人拍摄技巧</span><br/>
                            <span>「摄影师私藏的8个拍摄道具·让你可以拍出杂志感大片」</span>
                        </p><br/>
                        <p><span>希望能够给大家摄影上一些灵感或者启发</span><br/>
                            <span>拍摄的时候我们最重要的</span><br/>
                            <span>就是尽我们所能去创造和发现属于你的“最佳道具”</span>
                        </p><br/>
                        <p><span>【感谢出镜模特、客户】</span><br/>
                            <span>Lisa、Maryna、Edith、Marina、童瑶、Sia、雨相、Yana、Ivan、Kristina、Masha</span>
                        </p><br/>
                        <p>↓↓↓</p><br/>
                        <p><span>第一名：烟饼</span><br/>
                            <span>价格：非常便宜</span><br/>
                            <span>优点：为作品增加光线的层次感，营造烟雾弥漫的梦幻感</span><br/>
                            <span>缺点：会因为燃烧而释放难闻的气体，在公众场所慎用</span><br/>
                            <span>推荐指数：★★★★☆</span></p>
                        <div>
                            <img src={p1} alt='烟饼示范'/>
                        </div><br/>
                        <p><span>第二名：头巾</span><br/>
                            <span>价格：价格不等，用心搜可以买到很便宜也很好看的</span><br/>
                            <span>优点：可以拍摄出浪漫的法式乡村感，同时也可以修饰脸型</span><br/>
                            <span>缺点：头巾的颜色与花纹要选好，不然会显得像村姑</span><br/>
                            <span>推荐指数：★★★★★</span></p>
                        <div>
                            <img src={p2} alt='头巾示范'/>
                        </div><br/>
                        <p><span>第三名：镜子</span><br/>
                            <span>价格：价格不等，非常容易获得</span><br/>
                            <span>优点：利用镜面的反射，拍摄出另类的、独特视角的作品</span><br/>
                            <span>缺点：如果是大块的镜子不便携带出门</span><br/>
                            <span>推荐指数：★★★★☆</span></p>
                        <div>
                            <img src={p3} alt='镜子示范'/>
                        </div><br/>
                        <p><span>第四名：复古电话</span><br/>
                            <span>价格：旧货市场大概在100元左右</span><br/>
                            <span>优点：拍摄出有故事感、电影感的照片</span><br/>
                            <span>缺点：暂无</span><br/>
                            <span>推荐指数：★★★☆☆</span></p>
                        <div>
                            <img src={p4} alt='复古电话示范'/>
                        </div><br/>
                        <p><span>第五名：玻璃制品（花瓶、水杯均可）</span><br/>
                            <span>价格：价格不等，通常不会很贵</span><br/>
                            <span>优点：利用光线拍摄出有光影斑驳、有质感的人像作品</span><br/>
                            <span>缺点：暂无</span><br/>
                            <span>推荐指数：★★★★☆</span></p>
                        <div>
                            <img src={p5} alt='玻璃制品示范'/>
                        </div><br/>
                        <p><span>第六名：水缸</span><br/>
                            <span>价格：价格根据尺寸不一</span><br/>
                            <span>优点：利用简单的水缸就可以拍摄出超有质感的水底人像</span><br/>
                            <span>缺点：体积较大、较重，不方便携带外出拍摄</span><br/>
                            <span>推荐指数：★★★☆☆</span></p>
                        <div>
                            <img src={p6} alt='水缸示范'/>
                        </div><br/>
                        <p><span>第七名：轻纱围巾</span><br/>
                            <span>价格：价格不一</span><br/>
                            <span>优点：拍摄出温柔、飘逸的人像，方便携带，同时也可以当作头巾</span><br/>
                            <span>缺点：</span><br/>
                            <span>推荐指数：★★★☆☆</span></p>
                        <div>
                            <img src={p7} alt='玻璃制品示范'/>
                        </div><br/>
                        <p><span>第八名：珍珠饰品</span><br/>
                            <span>价格：价格不一</span><br/>
                            <span>优点：拍摄珍珠在光影下闪烁的光影</span><br/>
                            <span>缺点：</span><br/>
                            <span>推荐指数：★★★☆☆</span></p>
                        <div>
                            <img src={p8} alt='玻璃制品示范'/>
                        </div><br/>
                        <div><span>¤</span><br/>
                            <span>不管怎么说,好的道具为我们的照片增加了无数的关注度</span><br/>
                            <span>一旦用得好，就可以用花少的钱拍出大片</span><br/>
                            <span>这篇摄影技巧干货推荐给大家哦~</span>
                        </div>
                        <div><br/>
                            <span>* * * *</span><br/>
                            <span>作者丨摄影：岑宝蓝</span><br/>
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

