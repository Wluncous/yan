import React, { useState } from 'react';
import {Drawer, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

import {UserOutlined,HomeOutlined,HddOutlined,PictureOutlined,BookOutlined,
  FireOutlined} from '@ant-design/icons';
  
import Icon from '@ant-design/icons';
import './HeaT.css';
import DL from './H登录-注册';

const Hea = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

const MenuIcon = () => (<svg class="icon" viewBox="0 0 1024 1024" version="1.1" 
xmlns="http://www.w3.org/2000/svg" p-id="1347" width="20" height="20">
<path d="M916.6 210.2H107.4c-17.7 0-32-14.3-32-32s14.3-32 32-32h809.2c17.7 0 32 14.3 32 32s-14.3 32-32 32zM714.3
544H107.4c-17.7 0-32-14.3-32-32s14.3-32 32-32h606.9c17.7 0 32 14.3 32 32s-14.3 32-32 32zM916.6 877.8H107.4c-17.7
0-32-14.3-32-32s14.3-32 32-32h809.2c17.7 0 32 14.3 32 32s-14.3 32-32 32z" p-id="1348" fill="#ffffff">
</path></svg>);
const MenuI = props => <Icon component={MenuIcon} {...props} />;
  
  return (
    <>
    <div>
    <div style={{width:'44px',height:'44px'}}>
      <Button onClick={showDrawer} icon={<MenuI style={{width:'20px',height:'20px'}}/>}
      style={{width:'44px',height:'44px',border:'0',padding:'0',background:'black',color:'#fff'}}> {/*disabled */}
      </Button>
    </div>
    <div style={{color:'#fff'}}>


      
    </div>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        
        <Menu  mode="inline" defaultSelectedKeys={['6']}
        theme='dark'> 
        <Menu.Item key="1" icon={<UserOutlined/> }><DL/></Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined/> }><Link to="/">首页</Link></Menu.Item>
        <Menu.Item key="3" icon={<HddOutlined/> }><Link to="/p21/">作品</Link></Menu.Item>
        <Menu.Item key="4" icon={<PictureOutlined/> }><Link to="/p22/">图片广场</Link></Menu.Item>
        <Menu.Item key="5" icon={<BookOutlined/> }><Link to="/p23/">技巧</Link></Menu.Item>
        <Menu.Item key="6" icon={<FireOutlined />}><Link to="/p11/">认证</Link></Menu.Item>
        </Menu>
      </Drawer>
      </div>
    </>
    
  );
};


export default Hea;