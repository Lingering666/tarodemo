import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

class App extends Component {

  config = {
    // 每个页面都需要在这里进行注册
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  /**
   * 入口文件需要包含一个 render 方法，一般返回程序的第一个页面，
   * 但值得注意的是不要在入口文件中的 render 方法里写逻辑及引用其他页面、组件，
   * 因为编译时 render 方法的内容会被直接替换掉，你的逻辑代码不会起作用。
   * @returns {XML}
   */
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'));
