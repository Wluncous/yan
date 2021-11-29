
import React, {Component} from 'react';
import {Layout} from 'antd';
import '../zi-css/p13.css';
import HeaT from '../zi-Hea/Hea0通'


import DL1 from '../登录-收藏';
import DL2 from '../登录-写评论';
import DL3 from '../登录-注册';

import p2311 from './images/p23-11.jpg' 
import p2312 from './images/p23-12.jpg' 
import p2313 from './images/p23-13.jpg' 


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
                    <h3>海信、佳能强强联合，推进消费级8K影像解决方案！</h3>
                    <p><span>编辑：Yisand | 作者：南方娱乐网</span><br/>
                    <span>2021-05-14 | 8392853 浏览</span></p>
                    <div>
                        
                        <p>5月14日，第二十三届中国国际照相机械影像器材与技术博览会
                        （2021 CHINA P&amp;E）在北京开幕，海信、佳能两大品牌携手亮相展会，
                        展示了正在共同推进的“8K影像解决方案”。双方分别发挥在超高清影像拍摄和超高清影像显示方面的优势，
                        强强联合，在跨品牌打造8K影像解决方案的探索中迈出了坚实的一步，
                        为超高清视频面向广大的消费级市场和行业应用市场提供了强大的技术支持，为8K产业的快速发展和8K技术的应用普及奠定基础。
                        </p><br/>
                        <div>
                            <img src={p2311} alt=''/>
                        </div><br/>
                        <p>在佳能、海信联合展区，佳能EOS R5全画幅专微相机和海信ULED 8K超画质电视 U7G-MAX共同亮相，
                            吸引诸多摄影圈和科技圈的发烧友、消费者驻足。佳能与海信共同推进的8K影像解决方案，
                            是面向民用消费市场的8K输入输出解决方案，该方案利用佳能8K超高清视频拍摄设备记录下清晰细腻的高分辨率影像，
                            再通过具有8K超高清显示能力的海信电视进行真实还原。“这种方式让我们喜欢摄影的群体有了更好的作品展示渠道，
                            尤其是8K超高清照片能够100%呈现出照片原有的色泽和画质，带来的是视觉上的享受。”摄影爱好者刘先生在体验了该方案设备后表示。
                        </p><br/>
                        <div>
                            <img src={p2312} alt=''/>
                        </div><br/>
                        <p>佳能EOS R5全画幅专微相机是第一台可以拍摄8K短片的EOS相机，功能升级扩展了创作的可能性。海信U7G-MAX电视，
                            是海信U7冠军系列的旗舰产品，被誉为“IMAX 8K剧院”，画质表现卓越。
                        </p><br/>
                        <p>据了解，海信U7G-MAX电视搭载了海信自主研发的第三代8K超解像技术，可以实现从低画质片源到2K、4k、8k画质的三级优化，
                            同时通过对抗式AI技术实时构建场景模型，对设备没有拍摄出来的物体细节进行AI场景补偿，让图像更趋近肉眼可见的真实世界，
                            用户足不出户就能体验到沉浸感极强的8K级视觉盛宴。此外，信芯U+超画质芯片、百级全阵列动态背光技术、ULED 8K光型塑造技术的应用，
                            可以更好地控制电视画面整体光线对比度，让暗部的细节更暗且深邃，让亮部的细节更亮且不过曝，更具视觉层次感。
                        </p><br/>
                        <div>
                            <img src={p2313} alt=''/>
                        </div><br/>
                        <p>此次佳能EOS R5与海信ULED 8K配合，不仅能还原出8K超高清影像细腻的画面、丰富的色彩、自然的动态范围，
                            配合大尺寸屏幕播放还带来更有沉浸感的8K超高清视觉体验，如置身现场一般，在家中也能感受到自然逼真的世界。</p>
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

