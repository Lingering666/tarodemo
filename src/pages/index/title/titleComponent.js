// Taro 是一定要引入的
import Taro, {Component} from '@tarojs/taro'
// 这里的组件是 Taro 的组件 , View 即使用不到也最好引入
// 组件的命名规范符合首字母大写的驼峰命名法
import {View, Text} from '@tarojs/components'
import './title.less'
// 通过import 语句引入静态文件, 特别说明的是本地图片在使用前一定要引入

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
export default class TitleComponent extends Component {

    config = {
        navigationBarTitleText: '标题栏组件',//将会是页面的标题
    };

    /***********************************/
    /*        生命周期  钩子函数        */

    /***********************************/
    /**
     * 可以基于属性来初始化状态
     * @param props props
     */
    constructor(props) {
        super(props);
    }

    // 小程序中的onLaunch方法会带有一个options的参数，
    // 在Taro中可以使用this.\$router.params的方式访问
    /**
     * 程序在被挂载之前触发, WebSocket 订阅不要再这边执行 推荐使用constructor()来替代。
     * 在微信小程序中这一生命周期方法对应 app 的 onLaunch
     */
    componentWillMount() {
    }

    /**
     * 渲染函数 必须要有,
     * JSX 中不能出现js表达式，换句话说就是不能出现 if for之类的语句
     * 但是可以在{}中使用一些简单的表达式达到条件渲染以及循环列表渲染
     * 循环列表渲染的时候一定要加上KEY(兄弟节点中要唯一)
     * boolean, undefined, Null是有效的children，但是并不会被渲染
     * @returns {XML} JSX
     */
    render() {

        return (
            <View className=''>
                <Text>Hello world!</Text>
            </View>
        )

        /*
    * JSF的补充说明
    *   1 不能在包含 JSX 元素的 map 循环中使用 if 表达式
    *   2 不能使用 Array\#map 之外的方法操作 JSX 数组
    *   3 不能在 JSX 参数中使用匿名函数
    *   4 暂不支持在 render() 之外的方法定义 JSX
    *   5 不允许在 JSX 参数(props)中传入 JSX 元素
    *   6 不能在 JSX 参数中使用对象展开符
    *   7 不支持无状态组件
    *   8 在 Taro 中，JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误。
    */
    }

    /**
     * 程序挂载之后触发 适合从服务器端加载数据 在该方法里 setState() 将会触发重新渲染。
     * 在微信小程序中这一生命周期方法对应 app 的 onReady
     */
    componentDidMount() {
    }

    /**
     * 组建在取消挂载之前触发 对应小程序中的onUnload
     */
    componentWillUnmount() {
    }

    /**
     * 组建展示之后触发
     * 在微信小程序中这一生命周期方法对应 onShow，在H5中同样实现
     */
    componentDidShow() {
    }

    /**
     * 组建在隐藏后触发
     * 在微信小程序中这一生命周期方法对应 onHide，在H5中同样实现
     */
    componentDidHide() {
    }

    /**
     * 装载的组件接收到新属性前调用, 要比较this.props 和 nextProps的，
     * 状态的改变最好通过this.setState() 进行改变
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    };

    /**
     * 组建更新前触发, 小程序中是否有效, 官方没有具体说明, 待验证
     */
    componentWillUpdate() {
    }

    /**
     * 组建更新后触发, 小程序中是否有效, 官方没有具体说明, 待验证
     */
    componentDidUpdate() {
    }

    /*******************************/
    /*        小程序专属函数        */

    /*******************************/
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     * 多作用于下拉刷新操作(我猜的)
     */
    onPullDownRefresh() {
    }

    /**
     * 页面上拉触底事件的处理函数
     * 多作用于上拉加载的操作
     */
    onReachBottom() {
    }

    /**
     * 用户点击右上角转发
     */
    onShareAppMessage() {
    }

    /**
     * 页面滚动触发事件的处理函数
     */
    onPageScroll() {
    }

    /**
     * 当前是 tab 页时，点击 tab 时触发
     */
    onTabItemTap() {
    }

    /***********************************/
    /*           普通函数定义           */
    /***********************************/


}

