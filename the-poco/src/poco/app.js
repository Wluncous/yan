
import React, {Component} from 'react';

import { BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './democ';

import p11 from './zi/p11';
import p12 from './zi/p12';
import p13 from './zi/p13';
import p14 from './zi/p14';
import p21 from './zi/p21';
import p22 from './zi/p22';
import p23 from './zi/p23';
import p31 from './zi/文23/摄影师私藏的8个拍摄道具';
import p32 from './zi/文23/如何给顾客片修出杂志感照片';
import p33 from './zi/文23/本叔PS教程-摄影后期必备调色技巧之色相色谱条技法';
import p231 from './zi/文23/海信、佳能强强联合';
import xzy from './zi/xzy';

 
class App extends Component{
    render(){
        return(
            <Router >
                <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/p11" component={p11} />
                <Route exact path="/p12" component={p12} />
                <Route exact path="/p13" component={p13} />
                <Route exact path="/p14" component={p14} />
                <Route exact path="/p21" component={p21} />
                <Route exact path="/p22" component={p22} />
                <Route exact path="/p23" component={p23} />
                <Route exact path="/p31" component={p31} />
                <Route exact path="/p32" component={p32} />
                <Route exact path="/p33" component={p33} />
                <Route exact path="/p231" component={p231} />
                <Route exact path="/xzy" component={xzy} />
                </div>
            </Router>
        )
    };
}

export default App;