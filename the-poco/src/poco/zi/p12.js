
import React, {Component} from 'react';
import {Layout} from 'antd';
import { Link } from 'react-router-dom';

import './zi-css/p12.css';

const {Content } = Layout;




class App extends Component{
    render(){
        return(
            <Layout className='p12bj'>
                <div>
                <Content >
                    <div className='p12-0'></div>
                    <div className='p12-1'></div>
                    <Link to="/xzy/" className='p12-2'></Link>
                    <div className='p12-3'></div>
                    <div className='p12-4'>
                        <span className='span'></span>
                        <i className='i'></i>
                    </div>
                    <div className='p12-5'>
                        <span className='span'></span>
                        <i className='i'></i>
                    </div>
                    <div className='p12-6'>
                        <span className='span'></span>
                        <i className='i'></i>
                    </div>
                    <Link to="/xzy/" className='p12-2'></Link>
                    
                </Content>
                </div>
                <div class="footer"><p>
                备案号：***-********-* ICP证号：***-********</p>
                <p>Copyright **** **** **.,***.</p>
                </div>
            </Layout>
        )
    };
}

export default App;