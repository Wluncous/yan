
import React, {Component} from 'react';
import {Layout,Tabs} from 'antd';

import './zi-css/zi.css';

import Hea23 from './zi-Hea/Hea23技巧'

import QB from './文23/A全部'
import JC from './文23/A基础'
import SZ from './文23/A实战'
import HQ from './文23/A后期'
import QC from './文23/A器材'
import ZX from './文23/A资讯'
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
                        <Hea23 />{/*抽屉 */}
                    </div>
                    <div className='cc_title'>
                        技巧
                    </div>
                </div>
                </Header>
                {/* 内容↓ */}
                <div>
                <Content>
                    {/* 项目栏 */}
                    <Tabs defaultActiveKey="1" onChange={callback} centered>
                        <TabPane tab="全部" key="1"><QB/></TabPane>
                        <TabPane tab="基础理论" key="2"><JC/></TabPane>
                        <TabPane tab="实战" key="3"><SZ/></TabPane>
                        <TabPane tab="后期教程" key="4"><HQ/></TabPane>
                        <TabPane tab="摄影器材" key="5"><QC/></TabPane>
                        <TabPane tab="资讯" key="6"><ZX/></TabPane>
                    </Tabs>
                </Content>
                </div>
            </Layout>
        )
    };
}

export default App;



