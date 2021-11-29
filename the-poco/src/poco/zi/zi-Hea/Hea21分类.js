import React, { useState } from 'react';
import {Drawer, Button,Modal} from 'antd';

import {} from '@ant-design/icons';

import {Layout} from 'antd';

import {LeftOutlined, } from '@ant-design/icons';
import { ConfigProvider } from 'antd';

import './HeaD.css';
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
      title: '系统维护中，该功能暂不支持！请返回选择其他操作'
    });
  }
  
  return (
    <>
    <ConfigProvider autoInsertSpaceInButton={false}>
          <Button  className='cc-right' type='text'
          onClick={showDrawer}>
              分类
            </Button>

      <Drawer width={'100%'} onClose={onClose} visible={visible}
        bodyStyle={{ paddingBottom: 80 }}>
        <Header>
          <div >
            <div className='optionF' style={{color:'#fff'}}>
              <LeftOutlined style={{fontSize:'20px'}}/>
            </div>
            <div className='cc_title'>分类</div>
          </div>
        </Header>
        <div className='f-cur'>
          <a onClick={error}>全部</a>
          <a onClick={error}>人像</a>
          <a onClick={error}>风景</a>
          <a onClick={error}>城市</a>
          <a onClick={error}>纪实</a>
          <a onClick={error}>生活</a>
          <a onClick={error}>观念</a>
          <a onClick={error}>手机摄影</a>
          <a onClick={error}>夜景</a>
          <a onClick={error}>旅游</a>
          <a onClick={error}>美食</a>
          <a onClick={error}>航拍</a>
          <a onClick={error}>运动</a>
          <a onClick={error}>宠物</a>
        </div>
      </Drawer>
    </ConfigProvider>
    </>
    
  );
};


export default DL1;