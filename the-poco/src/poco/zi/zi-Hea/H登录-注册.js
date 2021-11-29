import React, { useState } from 'react';
import {Drawer, Button, Input, Modal, Space } from 'antd';

import {Layout} from 'antd';

import {LeftOutlined, EyeInvisibleOutlined, EyeTwoTone ,
  WeiboCircleFilled, QqCircleFilled} from '@ant-design/icons';
import '../zi-Hea/HeaD.css';
import { ConfigProvider } from 'antd';

const { Header} = Layout;


const DL1 = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  
  function error() {
    Modal.error({
      title: '系统维护中，该功能暂不支持！'
    });
  }
  
  
  return (
    <><ConfigProvider autoInsertSpaceInButton={false}>
      <Button onClick={showDrawer} type="text"
      style={{color:'rgba(255,255,255,0.65)',
      marginLeft: '-16px',
      marginTop: '-16px'}}> {/*disabled */}
        <div>登录/注册</div>
      </Button>
    <Drawer
    width={'100%'}
    onClose={onClose}
    visible={visible}
    bodyStyle={{ paddingBottom: 80 }}
    >
      <Header>
        <div >
          <div className='optionF' style={{color:'#fff'}}>
            <LeftOutlined style={{fontSize:'20px'}}/>
          </div>
          <div className='cc_title'>登录</div>
          <Button  className='cc-right' type='text'
            onClick={error}>
              注册
            </Button>
        </div>
      </Header>
        <div style={{textAlign:'center'}}>
          <Space direction="vertical">
            <Input.Group compact={Boolean}
            style={{ width: '80vw',textAlign:'left'}}>
              <Input size="large" placeholder="Email/账号/手机号" />
              <Input.Password size="large" placeholder="密码"
              iconRender={visible =>
              (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
            </Input.Group>
            <Button size="large" onClick={error}
            style={{ width: '80vw',ontWeight:'500',
            color:'#fff',background:'#333',borderRadius:'5px',border:'0'}}>
              登录
            </Button>
            <div>
              <div style={{color:'#666',fontSize:'11px',marginTop:'20px'}}>
                <span className='sign'></span>
                <bdo>或用第三方账号登录</bdo>
                <span className='sign'></span>
              </div>
              {/* 两个图标 */}
                <QqCircleFilled style={{color:'#30d0f0',fontSize:'60px',margin:'12px 2px'}} onClick={error}/>
                <WeiboCircleFilled style={{color:'#ff6347',fontSize:'60px',margin:'12px 2px'}} onClick={error}/>
            </div>
          </Space>
        </div>
      </Drawer>
    </ConfigProvider>
    </>
    
  );
};


export default DL1;