/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from './Nav0';
import Banner0 from './Banner0';
import Content0 from './Content0';
import Content9 from './Content9';
import Content5 from './Content5';
import Teams1 from './Teams1';
import Feature5 from './Feature5';
import Content3 from './Content3';
import Content13 from './Content13';
import Content12 from './Content12';
import Footer1 from './Footer1';

import {
  Nav00DataSource,
  Banner01DataSource,
  Content00DataSource,
  Content90DataSource,
  Content50DataSource,
  Teams10DataSource,
  Feature50DataSource,
  Content30DataSource,
  Content130DataSource,
  Content120DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

import Test from '../components/Test';
import Committe from '../components/Commite';
import Topics from '../components/Topics';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_1"
        key="Banner0_1"
        dataSource={Banner01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,

      <Topics ></Topics>,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams1
        id="Teams1_0"
        key="Teams1_0"
        dataSource={Teams10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
        id="Feature5_0"
        key="Feature5_0"
        dataSource={Feature50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content12
        id="Content12_0"
        key="Content12_0"
        dataSource={Content120DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >

        {this.state.show && children}

      </div>
    );
  }
}
