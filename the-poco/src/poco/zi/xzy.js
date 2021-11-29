
import React, {Component} from 'react';
import {Layout,Button,Modal} from 'antd';

import xzy from './images/xzy.png';
import './zi-css/xzy.css';




const { Footer, Content } = Layout;

class App extends Component{
    render(){

    function error() {
        Modal.error({
          title: '系统维护中，该功能暂不支持！'
        });
      }
      
        return(
            <Layout className=''>
                <Content style={{ marginTop: '200px'}}>
                    <div className='panel'>
                        <div>
                            <img className='xzy-icon' src={xzy} alt=''/>
                            <h3 style={{fontSize:'20px',marginTop:'5px'}}>
                                POCO</h3>
                            <p style={{fontSize: '12px',marginTop:'0px'}}>3.0分  34万次下载  97.59MB</p>
                        </div>
                    </div>
                    <div className='btn-layout'>
                        <div className='download'>
                            <Button type='text' className='fast-download'
                             onClick={error}> 安全下载</Button>
                            
                            <Button type='text' className='normal-download'
                             onClick={error}>其他下载方式</Button>
                        </div>
                    </div>
                </Content>
                <Footer class="xzy-footer">
                    <p>开发者：*********</p>
                    <p>版本：*.*.*</p>
                </Footer>
            </Layout>
        )
    };
}

export default App;