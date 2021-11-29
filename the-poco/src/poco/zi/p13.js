
import React, {Component} from 'react';
import {Layout} from 'antd';
import './zi-css/p13.css';
import HeaT from './zi-Hea/Hea0通'

import p1 from './images/p13-1.jpg';
import p2 from './images/p13-2.jpg';
import a1 from './images/p13-a1.jpg';
import a2 from './images/p13-a2.jpg';
import a3 from './images/p13-a3.jpg';
import b1 from './images/p13-b1.jpg';
import b2 from './images/p13-b2.jpg';
import b3 from './images/p13-b3.jpg';

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
                    <h3>这些父母向宫崎骏致敬！竟然高度还原了《千与千寻》的经典场景！</h3>
                    <p><span>编辑：阿嘴儿 | 作者：枫糖盒子</span><br/>
                    <span>2019-09-04 | 669509 浏览</span></p>
                    <p>18年前，宫崎骏老爷子那部让无数80、90后们感动的童年回忆《千与千寻》，今年的前段时间在中国重新上映了！</p>
                    <p>这次，中文版《千与千寻》由周冬雨和井柏然分别为千寻和白龙配音，宫崎骏老爷子更是亲自给中国观众绘制了一封暖心手写信：千与千寻，请多关照！</p>
                    <div>
                        <img src={p1} alt='宫崎骏写给中国观众的手绘信件'/>
                        <p>宫崎骏写给中国观众的手绘信件</p>
                    </div>
                    <p>这是一部讲述少女发现、探索与成长的“灵魂动漫”：</p>
                    <p>主人公千寻和在爸爸妈妈一同驱车前往新家的郊外小路上，
                        不慎进入了神秘的隧道——他们去到了另外一个充满了玄幻神明的世界，
                        经历了“神世间”的浮华与朴素，贪恋与平和，邪恶与善良。</p>
                    <p>也是一部用孩童的冒险故事，唤起成人对生活的积极态度的“不朽史诗”。</p>
                    <div>
                        <img src={p2} alt='无脸人与千寻'/>
                        <p>无脸人与千寻</p>
                    </div>
                    <p>来自重庆的went和小空夫妇是《千与千寻》的铁杆粉丝，同时也是两名资深摄影人“拍娃党”。
                        went拥有 20 余年摄影经验，作品涉及人像、风光、建筑、星空等，拍摄作品曾刊登在《重庆商报》《人居周报》《今日人像》等主流媒体，
                        曾在 2016年尼康官方举办的人像摄影比赛中获亲子类作品银奖及铜奖；小空则毕业于专业美术院校，拥有个人摄影工作室，
                        喜欢组织和拍摄儿童各类聚会活动，带娃游山玩水，自我总结拍摄自己小孩最顺手。</p>
                    <p>他们给孩子天天拍摄高度还原的创意场景照，让喜爱《千与千寻》与爱好拍娃的父母们激动万分。</p>
                    <div>
                        <img src={a1} alt=''/>
                        <img src={a2} alt=''/>
                        <img src={a3} alt=''/>
                    </div><br/>
                    <p>天天妈妈为了保证拍摄效果，网购了质量较好的服装和道具。为了更好的还原《千与千寻》的环境和色调，寻找了日式风格的客栈，
                        以及后期对环境及服装作了调整。这组照片是这套服装的第一次拍摄，2017年的寒假在老挝又拍了一组，那组照片中出现了无脸男。
                        一家三口居住在重庆，准备最后补拍一组洪崖洞夜景来完美的向宫崎骏致敬。</p>
                    <br/>
                    <p>来自沈阳的自由摄影师書林（微博：書林5861），是一枚理工科金牛女，笑起来有可爱的小虎牙。爱摄影爱女儿多多，
                        爱和女儿一起闯天涯；爱暗黑爱唯美，爱各种让人充满灵感的风格。人生最大的梦想，是用摄影编织一个属于女儿的童年童话。</p>
                    <p>这名拍娃界的女神，则为女儿拍了一组《龙猫》主题的创意童话照：</p>
                    <div>
                        <img src={b1} alt=''/>
                        <img src={b2} alt=''/>
                        <img src={b3} alt=''/>
                    </div><br/>
                    <p >書林说，某个周五放学回来，女儿多多说老师让小朋友去认识、亲近大自然，多多爸当时就决定带她们娘俩去美丽的山里，
                        那里绿树成荫、流水潺潺、鸟语花香，还有快要成熟的稻田，迎风开放的芦花，神秘寂静的山洞，听完爸爸的介绍，
                        多多问夫妇俩：“山里有大龙猫么？就是你跟我看过的那个大龙猫？”女儿多多迫不及待让自己帮她和龙猫制造一场“偶遇”！
                        于是，便有了这组创意照片。</p>
                    <p>宫崎骏为我们提供了无数的创意场景，而父母们则通过创意摄影和孩子一起创造梦幻，享受和孩子们在一起的亲密时光，
                        享受创意和现代摄影技术带来的视觉特效。这些照片的的意义在于多年后，孩子还会回味在以他们为主角的故事中。</p><br/><hr/>
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

