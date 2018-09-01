import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

/**
 * Taro 的页面同样是继承自 Component 组件基类，
 * 每一个页面都拥有自己配置 config，这个配置参考自微信小程序的页面配置，
 * 在编译成小程序时，将会生成跟页面JS文件同名的 json 配置文件；
 * 在编译成 H5 时，config 配置中 navigationBarTitleText 将会被用来设置当前页面的标题。
 *
 * 组建与页面的关系，两者类似，组建少了部分方法，
 * 多了componentWillReceiveProps
 * 表示当父组件（或页面）发生更新时将带动子组件进行更新时调用的方法
 */
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',//将会是页面的标题
  };

  /***********************************/
  /*        生命周期  钩子函数        */
  /***********************************/

  // 小程序中的onLaunch方法会带有一个options的参数，
  // 在Taro中可以使用this.$router.params的方式访问
  /**
   * 程序在被挂载之前触发
   * 在微信小程序中这一生命周期方法对应 app 的 onLaunch
   */
  componentWillMount () { }

  /**
   * 程序挂载之后触发
   * 在微信小程序中这一生命周期方法对应 app 的 onReady
   */
  componentDidMount () { }

  /**
   * 组建在取消挂载之前触发 对应小程序中的onUnload
   */
  componentWillUnmount () { }

  /**
   * 组建展示之后触发
   * 在微信小程序中这一生命周期方法对应 onShow，在H5中同样实现
   */
  componentDidShow () { }

  /**
   * 组建在隐藏后触发
   * 在微信小程序中这一生命周期方法对应 onHide，在H5中同样实现
   */
  componentDidHide () { }

  /**
   * 组建更新前触发, 小程序中是否有效, 官方没有具体说明, 待验证
   */
  componentWillUpdate(){}

  /**
   * 组建更新后触发, 小程序中是否有效, 官方没有具体说明, 待验证
   */
  componentDidUpdate(){}

  /**
   * 渲染函数 必须要有
   * @returns {XML} JSX
   */
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }

  /*******************************/
  /*        小程序专属函数        */
  /*******************************/
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 多作用于下拉刷新操作(我猜的)
   */
  onPullDownRefresh(){}

  /**
   * 页面上拉触底事件的处理函数
   * 多作用于上拉加载的操作
   */
  onReachBottom(){}

  /**
   * 用户点击右上角转发
   */
  onShareAppMessage(){}

  /**
   * 页面滚动触发事件的处理函数
   */
  onPageScroll(){}

  /**
   * 当前是 tab 页时，点击 tab 时触发
   */
  onTabItemTap(){}

  /***********************************/
  /*           普通函数定义           */
  /***********************************/


}

