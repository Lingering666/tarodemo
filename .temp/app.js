import TaroRouter from '@tarojs/router';
import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";

// 其他插件的引入
// redux
import { Provider } from "@tarojs/redux-h5";
import configStore from './store';

// 页面组件的引入

import './app.less';

// 一些常量的定义
const store = configStore();

class App extends Component {

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  /**
   * 入口文件需要包含一个 render 方法，一般返回程序的第一个页面，
   * 但值得注意的是不要在入口文件中的 render 方法里写逻辑及引用其他页面、组件，
   * 因为编译时 render 方法的内容会被直接替换掉，你的逻辑代码不会起作用。
   * @returns {XML}
   */
  render() {
    return <Provider store={store}>
                <TaroRouter.Router />
              </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

}

Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
TaroRouter.initRouter([['/pages/index/index', () => import('./pages/index/index')]], Taro);
Nerv.render(<App />, document.getElementById('app'));